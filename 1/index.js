// Search form megjelenítése

function searchForm() {
    return `
    <form>
      <div class="form-row align-items-center">
        <div class="col-auto">
          <input id="sorozat-cim" class="form-control" type="text" name="title" placeholder="Sorozat címe" />
        </div>
        <input id="kereses" type="button" value="Keresés" class="btn btn-primary" />
      </div>
    </form>
    `;
  }
  
  document.querySelector('#searchForm').innerHTML = searchForm();
  
  // Találatok megjelenítése
  
  const kereses = document.querySelector('#kereses');
  const sorozatCim = document.querySelector('#sorozat-cim');
  const eredmenyek = document.querySelector('#eredmenyek');
  
  let sorozatok = [];
  
  kereses.addEventListener('click', async () => {
    const resp = await fetch(`http://api.tvmaze.com/search/shows?q=${sorozatCim.value}`)
    const response = await resp.json();
    sorozatok = response.map(sorozat => sorozat.show);
    console.log(sorozatok);
  
    eredmenyek.innerHTML = showTileset(sorozatok);
  });
  
  function showTileset(shows) {
    return shows.map(show => showTile(show)).join('');
  }
  
  function showTile(show) {
    const rating = show.rating.average;
    let ratingLabel;
    if (rating) {
      ratingLabel = rating + '/10';
    } else {
      ratingLabel = 'unknown';
    }
    return `
    <div class="film">
      <div class="title">${show.name}</div>
      <img src="${show.image ? show.image.medium : ''}" />
      <div class="rating">${ratingLabel}</div>
    </div>
    `
  }
  