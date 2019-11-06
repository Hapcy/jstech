import React from 'react';

export const FavouritesContext = React.createContext(null);

export default class FavouritesProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = { favourites: [] };
  }

  toggleFavourite(id) {
    const isFavourite = this.state.favourites.includes(id);
    if (isFavourite) {
      // le lehet írni egyszerűbben, de így referenciák szempontjából is tiszta
      this.setState({
        favourites: this.state.favourites.filter(favId => favId !== id),
      });
    } else {
      this.setState({
        favourites: this.state.favourites.concat([id]),
      });
    }
  }

  render() {
    const { children } = this.props;
    return (
      <FavouritesContext.Provider value={{
        favourites: this.state.favourites,
        toggleFavourite: id => this.toggleFavourite(id),
        }}>
        { children }
      </FavouritesContext.Provider>
    );
  }

}

