import React from 'react';
import ImageShow from '../image-show';
import './image-list.css';

const ImageList = ({ images = [] }) => {
  if (!images.length)
    return (
      <section className="section no-results-section">
        <div className="container">
          <h1 className="title no-results-message">No Results Found</h1>
          <p className="no-results-description">
            Your search didn't return any results. Please try a different search
            query.
          </p>
        </div>
      </section>
    );

  return (
    <div className="gallery">
      {images.map((image) => {
        const { regular, alt_description, id, description } = image.urls;
        return (
          <div className="gallery-item" key={id}>
            <img src={regular} alt={alt_description} />
            <div className="gallery-caption">{description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageList;
