import React, { useState } from 'react';

function ClickQuantityTable() {
  const [qty, setQty] = useState(0);

  const qtyCalcMinus = () => {
    setQty(qty - 1);
  };
  const qtyCalcPlus = () => {
    setQty(qty + 1);
  };
  return (
    <>
      <button onClick={qtyCalcMinus}>-</button> {qty}{' '}
      <button onClick={qtyCalcPlus}>+</button>
    </>
  );
}

export default ClickQuantityTable;
