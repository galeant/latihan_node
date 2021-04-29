const bodyParser = require('body-parser');
const express = require('express')
const cors = require("cors");

// Models
// const db = require("./app/models");

const app = express()
const port = 3000
// config
app.use(cors({
  origin: "http://localhost:3000"
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));
// Sync database
// db.sequelize.sync({force:true});
// dev listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// route test
app.get('/', (req, res) => {
  res.json({
    'message':'success',
    'result':null
  });
})


require("./app/routes/UserRoute")(app);
require("./app/routes/CompanyRoute")(app);