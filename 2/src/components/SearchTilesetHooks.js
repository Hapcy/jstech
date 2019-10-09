import React, { useState, useEffect } from 'react';
import SearchTile from './SearchTile';

function useSearchShows(searchTerm) {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    async function getShows(searchText) {
      if (searchText) {
        const resp = await fetch(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
        const response = await resp.json();
        setShows(response.map(sorozat => sorozat.show));
      }
    }
    getShows(searchTerm);
    return () => {};
  }, [searchTerm]);
  return shows;
}

function SearchTileset({ searchTerm }) {
  const shows = useSearchShows(searchTerm);

  const tiles = shows.map(
    show => (<SearchTile show={show} key={show.id} />)
  );
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-12">
          <h1>Találatok</h1>
        </div>
      </div>
      <div className="row">
        <div
          className="col-12"
          id="eredmenyek"
          style={{display: 'flex'}}
        >
          { tiles }
        </div>
      </div>
    </div>
  );
}

/*
class SearchTileset extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shows: [],
    };
  }

  componentDidMount() {
    this.getShows(this.props.searchTerm);
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchTerm !== prevProps.searchTerm) {
      this.getShows(this.props.searchTerm);
    }
  }

  async getShows(searchTerm) {
    if (searchTerm) {
      const resp = await fetch(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
      const response = await resp.json();
      this.setState({
        shows:  response.map(sorozat => sorozat.show),
      });
    }
  }

  render() {
    const { shows } = this.state;
    const tiles = shows.map(
      show => (<SearchTile show={show} key={show.id} />)
    );
    return (
      <div className="col-12">
        <div className="row">
          <div className="col-12">
            <h1>Találatok</h1>
          </div>
        </div>
        <div className="row">
          <div
            className="col-12"
            id="eredmenyek"
            style={{display: 'flex'}}
          >
            { tiles }
          </div>
        </div>
      </div>
    );
  }
}
*/

export default SearchTileset;
