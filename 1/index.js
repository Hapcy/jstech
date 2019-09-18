const kereses = document.querySelector('#kereses');
kereses.type = 'button';
const sorozatCim = document.querySelector('#sorozat-cim');
kereses.addEventListener('click', () => {

});

function xhr(method, url, data, cb) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  xhr.addEventListener('load', () => {
    let { response, status } = xhr;
    let res = JSON.parse(response);
    if (status >= 200 && status < 400) {
      cb({ response: res, status });
    } else {
      cb({ response: res, status });
    }
  });

  if (data) {
    xhr.send(JSON.stringify(data));
  } else {
    xhr.send();
  }
}
