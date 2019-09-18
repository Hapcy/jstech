const kereses = document.querySelector('#kereses');
const sorozatCim = document.querySelector('#sorozat-cim');

let sorozatok = [];

kereses.addEventListener('click', () => {
  fetch(`http://api.tvmaze.com/search/shows?q=${sorozatCim.value}`)
    .then(resp => resp.json())
    .then(response => {
      sorozatok = response;
      console.log(sorozatok);
    });
  console.log(sorozatok);
});
