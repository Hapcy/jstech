import React from 'react';
import SearchTile from './SearchTile';

function SearchTileset() {
  const show = {
    "id": 36959,
    "url": "http://www.tvmaze.com/shows/36959/a-wedding-and-a-murder",
    "name": "A Wedding and a Murder",
    "type": "Documentary",
    "language": "English",
    "genres": [
      "Crime"
    ],
    "status": "Running",
    "runtime": 60,
    "premiered": "2018-06-03",
    "officialSite": "http://www.oxygen.com/a-wedding-and-a-murder",
    "schedule": {
      "time": "20:00",
      "days": [
        "Monday"
      ]
    },
    "rating": {
      "average": null
    },
    "weight": 97,
    "network": {
      "id": 79,
      "name": "Oxygen",
      "country": {
        "name": "United States",
        "code": "US",
        "timezone": "America/New_York"
      }
    },
    "webChannel": null,
    "externals": {
      "tvrage": null,
      "thetvdb": 348512,
      "imdb": "tt8276298"
    },
    "image": {
      "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/165/414251.jpg",
      "original": "http://static.tvmaze.com/uploads/images/original_untouched/165/414251.jpg"
    },
    "summary": "<p><b>A Wedding and a Murder</b> examines the true stories of engagements, weddings, and picture-perfect honeymoons that went from joyous celebration to untimely death. Each hour-long episode will expose a grisly homicide set against the backdrop of what appears to be wedded bliss. The series will chronicle many cases including the well-known disappearance of Annie Le, a young beautiful Yale student who vanished before her wedding as well as Gail and Rick Brink, happy newlyweds whose marriage ended in a tragedy and remained unsolved for decades until an unexpected witness revealed a disturbing family secret. From the bride and groom, to a family member, or even a jealous wedding guest - anyone could be the victim or suspect when marriage serves as the powerful catalyst for murder.</p>",
    "updated": 1569889284,
    "_links": {
      "self": {
        "href": "http://api.tvmaze.com/shows/36959"
      },
      "previousepisode": {
        "href": "http://api.tvmaze.com/episodes/1721365"
      },
      "nextepisode": {
        "href": "http://api.tvmaze.com/episodes/1721366"
      }
    }
  };
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-12">
          <h1>Találatok</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12" id="eredmenyek" style={{display: 'flex'}}>
          <SearchTile show={show}/>
          <SearchTile show={show}/>
        </div>
      </div>
    </div>
  );
}

export default SearchTileset;