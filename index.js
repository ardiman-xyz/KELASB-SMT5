const express = require('express')
const app = express()
const port = 4000

// npm install express --save
// / http://localhost:4000/

app.get('/', (req, res) => {

  let dataMahasiswa = [
    {
      "nama": "Ardiman",
      "email": "ardiman@umkendari.ac.id",
      "phone_number": 123456789,
      "student": false
    },
    {
      "nama": "Rendi",
      "email": "rendi@umkendari.ac.id",
      "phone_number": 123456789,
      "student": true
    }
  ];

  res.json(dataMahasiswa);

})


app.get("/tentang", (req, res) => {
  // http://localhost:4000/tentang?nama=ardiman&kelas=7

  let query = req.query;

  res.json({
    nama: req.query.nama,
    kelas: req.query.kelas,
  });
});









app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
