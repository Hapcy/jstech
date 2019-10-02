import React from 'react';

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  inputChanged(event) {
    const v = event.target.value;
    this.setState(s => ({ text: v }));
  }

  render() { 
    return (
      <div className="col-12" id="searchForm">
        <form>
          <div className="form-row align-items-center">
            <div className="col-auto">
              <input
                id="sorozat-cim"
                className="form-control"
                type="text"
                name="title"
                placeholder="Sorozat címe"
                value={this.state.text}
                onChange={event => this.inputChanged(event)}
              />
            </div>
            <input id="kereses" type="button" value="Keresés" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;