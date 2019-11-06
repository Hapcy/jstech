import React from 'react';
import { FavouritesContext } from './FavouritesProvider';


export default class SearchTile extends React.Component {
  render() {
    const { show } = this.props;
    const rating = show.rating.average;
    let ratingLabel;
    if (rating) {
      ratingLabel = rating + '/10';
    } else {
      ratingLabel = 'unknown';
    }
    return (
      <FavouritesContext.Consumer>
        {
          ({ favourites, toggleFavourite }) => (
            <div className="film" onClick={() => toggleFavourite(show.id)}>
              <div className="title">{show.name}</div>
              <img src={show.image ? show.image.medium : ''} />
              <div className="rating">{ratingLabel}</div>
              { favourites.includes(show.id) ? <span>Favourite</span> : null }
            </div>
          )
        }
      </FavouritesContext.Consumer>
      
    );
  }
}