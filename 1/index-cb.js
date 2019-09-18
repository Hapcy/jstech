const kereses = document.querySelector('#kereses');
const sorozatCim = document.querySelector('#sorozat-cim');

let sorozatok = [];

kereses.addEventListener('click', () => {
  xhr(
    'GET',
    `http://api.tvmaze.com/search/shows?q=${sorozatCim.value}`,
    null,
    ({ response }) => {
      sorozatok = response;
      console.log(sorozatok);
    }
  );
  console.log('hello');
});


















function xhr(method, url, data, cb) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.addEventListener('load', () => {
    let { response, status } = xhr;
    let res = JSON.parse(response);
    if (status >= 200 && status < 400) {
      cb({ response: res, status });
    } else {
      cb({ response: res, status });
    }
  });

  xhr.send();
}
