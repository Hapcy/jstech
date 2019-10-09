import React from 'react';
import SearchForm from './SearchForm';
import SearchTileset from './SearchTilesetHooks';

class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.searchFormRef = React.createRef();
  }

  render() {
    return (
      <>
        <div className="row">
          <SearchForm
            ref={this.searchFormRef}
            onSubmit={text => this.setState({ searchTerm: text })}
          />
          {/* <button
            onClick={() => console.log(this.searchFormRef.current.state)}
          >asd</button> */}
        </div>
        <div className="row mt-2">
          <SearchTileset searchTerm={this.state.searchTerm} />
        </div>
      </>
    );
  }
}

export default SearchPage;
