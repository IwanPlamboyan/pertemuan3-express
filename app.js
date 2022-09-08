// mengimport express
const express = require('express');
// memasukkan sebuah fungsi express ke variabel app
const app = express();

// menyimpan port
const port = 3000;

// membuat route /
app.get('/', (req, res) => {
  // memanggil file html
  res.sendFile(__dirname + '/index.html');
});

// membuat route /about
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/about.html');
});

// membuat route /contact
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/contact.html');
});

// membuat middleware jika mengakses route selain route yang diatas maka page not found
app.use('/', (req, res) => {
  // menetapkan status code untuk page not found
  res.status(404);
  // mengirim pesan
  res.send('Page not found : 404');
});

// menjalankan express di port 3000
app.listen(port, () => {
  // mengirim pesan jika server sudah siap digunakan
  console.log(`Example app listening on port ${port}`);
});
