const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  req.method === 'GET';
  if (req.url === '/about') {
    res.write('Ez Tibor oldala.');
  } else if (req.url === '/calculate') {
    res.write('4');
  } else {
    res.write('udv az oldalon');
  }
  res.end();
});

server.listen(3001, () => console.log('started'));
