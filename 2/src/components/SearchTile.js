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
      <div class="film">
        <div class="title">{show.name}</div>
        <img src={show.image ? show.image.medium : ''} />
        <div class="rating">{ratingLabel}</div>
      </div>
    );
  }
}