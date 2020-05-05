var cors = require('cors');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const mongoConnect = require('./db/database').mongoConnect;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/', (req, res)  => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
})

const port = process.env.PORT || 4000;
mongoConnect( () => {
  app.listen(port, () => {
    console.log('listening on 4000')
  })
});
