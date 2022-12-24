const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8000;

app.use(cors());

const aliens = {

}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})
