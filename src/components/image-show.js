import React from 'react';

const ImageShow = ({ src }) => {
  return (
    <figure className="image is-128x128">
      <img src={src} />
    </figure>
  );
};

export default ImageShow;
