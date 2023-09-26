import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';

const SearchBar = ({ setImageData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const onSubmit = useCallback(
    debounce((searchTerm) => {
      axios
        .get(
          `https://api.unsplash.com/search/photos?page=1&query=${searchTerm}`,
          {
            headers: {
              Authorization:
                'Client-ID FdZPVCtZsZ8LgMwmObyDFV9wlN1K2Vo6UmwtvGtUrfY',
            },
          }
        )
        .then((resp) => {
          setImageData(resp.data);
        })
        .catch((error) => console.error(error));
    }, 500),
    []
  );

  return (
    <section className="container is-max-desktop my-6">
      <h1 className="title is-size-1 has-text-centered">Search</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(searchTerm);
        }}
      >
        <p className="control has-icons-left">
          <input
            className="input"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            type="text"
            placeholder="Search for cars and more ..."
          />
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </form>
    </section>
  );
};

export default SearchBar;
