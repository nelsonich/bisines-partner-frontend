import React from 'react';
import ImageGallery from 'react-image-gallery';

function ProductSlider({ images }) {
  return (
    <div>
      <ImageGallery items={images} />
    </div>
  );
}

export default ProductSlider;
