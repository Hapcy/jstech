const Datastore = require('nedb');
const db = new Datastore({
  filename: 'favourites',
  autoload: true,
});

const favourites = [502];

class FavouritesService {

  getFavourites() {
    const p = new Promise((resolve, reject) => {
      db.find({}, (err, docs) => {
        if (err) {
          reject(err);
        }
        
        resolve(docs);
      });
    });
    return p;
  }

  addFavourite(newFavourite) {
    return this.getFavourite(newFavourite)
      .then(
        () => {
          return Promise.reject();
        },
        () => {
          return this.insert(newFavourite);
        }
      );
  }

  deleteFavourite(favouriteToDelete) {
    return new Promise((resolve, reject) => db.remove({
      id: favouriteToDelete
    }, (err, deletedCount) => {
      if (err) {
        reject(err);
      }
      if (deletedCount === 0) {
        reject();
      } else {
        resolve();
      }
    }));
  }

  getFavourite(id) {
    const p = new Promise((resolve, reject) => {
      db.findOne({
        id,
      }, (err, doc) => {
        if (err) {
          reject(err);
        }
        if (doc === null) {
          reject(err);
        } else {
          resolve(doc);
        }
      })
    });
    return p;
  }

  insert(id) {
    return new Promise((resolve, reject) => {
      db.insert({ id }, (err, doc) => {
        if (err) {
          reject(err);
        }
        resolve(doc);
      });
    });
  }

}

module.exports = FavouritesService;
