import React from 'react';

function SearchForm() {
  return (
    <div className="col-12" id="searchForm">
      <form>
        <div class="form-row align-items-center">
          <div class="col-auto">
            <input id="sorozat-cim" class="form-control" type="text" name="title" placeholder="Sorozat címe" />
          </div>
          <input id="kereses" type="button" value="Keresés" class="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default SearchForm;