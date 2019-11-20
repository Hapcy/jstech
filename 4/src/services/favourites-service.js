const favourites = [502];

class FavouritesService {

  getFavourites() {
    return Promise.resolve(favourites);
  }

  addFavourite(newFavourite) {
    const favouriteExists = favourites.some(
      favourite => favourite === newFavourite
    );
    if (favouriteExists) {
      return Promise.reject();
    } else {
      favourites.push(newFavourite);
      return Promise.resolve();
    }
  }

  deleteFavourite(favouriteToDelete) {
    const favouriteIndex = favourites.indexOf(favouriteToDelete);
    if (favouriteIndex === -1) {
      return Promise.reject();
    } else {
      favourites.splice(favouriteIndex, 1);
      return Promise.resolve();
    }
  }

}

module.exports = FavouritesService;
