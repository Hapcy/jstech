import React from 'react';


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
      <div className="film">
        <div className="title">{show.name}</div>
        <img src={show.image ? show.image.medium : ''} />
        <div className="rating">{ratingLabel}</div>
      </div>
    );
  }
}