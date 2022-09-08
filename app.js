// mengimport core modulu yang dibutuhkan
const http = require('http');
const fs = require('fs');

// membuat variabel untuk menyimpan port
const port = 3000;

// membuat fungsi untuk merender file
const renderFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('Error : Page not found');
    } else {
      res.write(data);
    }
    res.end();
  });
};

// membuat web server
http
  .createServer((req, res) => {
    // menangkat url
    const url = req.url;

    if (url === '/about') {
      renderFile('./about.html', res);
    } else if (url === '/contact') {
      renderFile('./contact.html', res);
    } else {
      renderFile('./index.html', res);
    }
  })
  .listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
  });
