import React from 'react';
import styles from './SliderReview.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function SliderReview({ reviews }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review, index) => {
          return (
            <SwiperSlide key={`slider-review-${index}`}>
              <div className={`p-5 ${styles['icon-slider-padding']}`}>
                <div>
                  <div className="d-flex justify-content-center">
                    <div className={styles['icon-slider']} />
                  </div>
                  <div className={styles['text-box']}>
                    <p className="w-75 my-4">{review.content}</p>
                  </div>

                  <div className={styles['image-box']}>
                    <img
                      src={review.author_image_key}
                      alt={review.author_name}
                    />
                  </div>

                  <div
                    className={`${styles['name-box']} text-center text-white`}
                  >
                    <h4>{review.author_name}</h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default SliderReview;
