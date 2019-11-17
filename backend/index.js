const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();



const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

//app.use(cors());

app.use(cors({
  origin: '*',
  credentials: true
}));

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.set()

const qrcode = {"id_barang":1}
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.log(err);
    throw err;
  } else {
    console.log('Mysql connected');
  }
});


app.get('/getDetailBarang/:id_barang',(request,response)=>{
  response.setHeader('Content-Type', 'application/json');
  let id_barang = request.params.id_barang
  query = `SELECT status,kondisi,health,lokasi FROM barang where id_barang = ${id_barang}`
  db.query(query, (err, result)=>{
    console.log(JSON.stringify(result));
    if (err) {
      response.json({
        status: false,
        message: err.toString(),
      });
    } else {
      response.send(
        {
        status: true,
        data: JSON.stringify(result),
        message: 'success get detail',
      });
    }
  });
})

app.post('/changeStatus',(request,response)=>{
  let status_baru = request.body.status;
  let kondisi =  request.body.kondisi;
  let id_barang = request.body.id_barang;
  let lokasi = ''
  let health = ''
  if(status_baru == 4){
    lokasi = 'Sedang dalam perjalan ke proyek runway'
    health = 70
  } else if(status_baru == 1){
    lokasi = 'Bandar Udara Soekarno Hatta'
    health = 65
  } else if(status_baru == 2){
    lokasi = 'Bandar Udara Soekarno Hatta'
    health = 30
  } else{
    lokasi = 'Warehouse 2'
    health = 73
  }
  query = `UPDATE \`barang\` SET \`status\`= ${status_baru},\`kondisi\`= '${kondisi}',\`lokasi\`= '${lokasi}',\`health\`= ${health} WHERE \`id_barang\`= ${id_barang}`
  db.query(query, (err, result)=>{
    console.log(JSON.stringify(result));
    if (err) {
      response.json({
        status: false,
        message: err.toString(),
      });
    } else {
      response.send(
        {
        status: true,
        data: JSON.stringify(result),
        message: 'success get detail',
      });
    }
  });
})

app.listen(PORT, ()=>{
    console.log(`Server started in port ${PORT}`);
});