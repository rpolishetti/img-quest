import React, { useEffect, useState } from 'react';
import SearchBar from './components/search-bar';
import ImageList from './components/image-list/image-list';

const App = () => {
  const [imageData, setImageData] = useState({});
  const { results: images = [], total: totalImages } = imageData;

  return (
    <div className="container">
      <SearchBar setImageData={setImageData} />
      {typeof totalImages !== 'undefined' ? (
        <ImageList images={images} />
      ) : null}
    </div>
  );
};

export default App;
