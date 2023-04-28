import React, { useCallback, useEffect, useState, useRef } from 'react';
import styles from './MultiRangeSlider.module.scss';

function MultiRangeSlider({ min, max, onChange }) {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  const refTimeChange = useRef();
  useEffect(() => {
    if (typeof onChange !== 'function') {
      return;
    }

    clearTimeout(refTimeChange.current);
    refTimeChange.current = setTimeout(() => {
      onChange({ min: minVal, max: maxVal });
    }, 200);
  }, [maxVal, minVal]);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  return (
    <div className={styles['container']}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className={styles['thumb']}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className={styles['thumb']}
      />

      <div className={styles['slider']}>
        <div className={styles['slider-track']} />
        <div ref={range} className={styles['slider-range']} />
        <div className={styles['slider-left-value']}>{minVal}</div>
        <div className={styles['slider-right-value']}>{maxVal}</div>
      </div>
    </div>
  );
}

export default MultiRangeSlider;
