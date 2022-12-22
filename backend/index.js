const express = require("express");
const axios = require('axios');

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


app.get("/api", (req, res) => {
    res.json(brewList);
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});