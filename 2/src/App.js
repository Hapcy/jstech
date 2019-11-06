import React from 'react';
import './App.css';
import SearchPage from './components/SearchPage';
import FavouritesProvider from './components/FavouritesProvider';

function App() {
  return (
    <FavouritesProvider>
      <div className="layout">
        <div className="header">
          <div className="navbar navbar-dark bg-dark navbar-expand">
            <a className="navbar-brand" href="/">TvMaze</a>
          </div>
        </div>
        <div className="body">
          <div className="container mt-2">
            <SearchPage />
          </div>
        </div>
      </div>
    </FavouritesProvider>
  );
}

export default App;
