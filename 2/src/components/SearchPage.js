import React from 'react';
import SearchForm from './SearchForm';
import SearchTileset from './SearchTileset';

function SearchPage() {
  return (
    <>
      <div className="row">
        <SearchForm />
      </div>
      <div className="row mt-2">
        <SearchTileset />
      </div>
    </>
  );
}

export default SearchPage;
