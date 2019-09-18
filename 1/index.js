const kereses = document.querySelector('#kereses');
kereses.type = "button";
const sorozatCim = document.querySelector('#sorozat-cim');
kereses.addEventListener('click', () => {
  fetch(`http://api.tvmaze.com/search/shows?q=${sorozatCim.value}`)
    .then(resp => resp.json())
    .then(sorozatok => console.log(sorozatok));
});
