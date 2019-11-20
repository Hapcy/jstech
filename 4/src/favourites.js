const express = require('express');
const bodyParser = require('body-parser');
const FavouritesService = require('./services/favourites-service');

const router = express.Router();

router
  .get('', (req, res, next) => {
    const service = new FavouritesService();
    service.getFavourites()
      .then(favourites => {
        res.send(favourites);
        next();
      });
  })
  .post('', bodyParser.json(), (req, res, next) => {
    const service = new FavouritesService();
    const { favouriteId } = req.body;
    service.addFavourite(favouriteId)
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(409))
      .finally(() => next());
  })
  .delete('/:favouriteId', (req, res, next) => {
    const service = new FavouritesService();
    const favouriteId = parseInt(req.params.favouriteId);
    service.deleteFavourite(favouriteId)
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(404))
      .finally(() => next());
  });

module.exports = router;
