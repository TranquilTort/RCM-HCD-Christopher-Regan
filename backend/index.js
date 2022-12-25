const express = require("express");
const axios = require('axios');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

let brewList = null;

axios.get('https://api.openbrewerydb.org/breweries')
    .then(response =>{
        console.log(response.data)
        brewList= response.data;
        // app.get("/api", (req, res) => {
        //     res.json(brewList);
        //   });
        
        // app.listen(PORT, () => {
        //   console.log(`Server listening on ${PORT}`);
        // });
    })
    .catch(error => {
        console.log(error)
    });

app.use(express.static(path.resolve(__dirname, '../my-app/build')))

app.get("/api", (req, res) => {
    res.json(brewList);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../my-app/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});