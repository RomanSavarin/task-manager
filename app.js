var cors = require('cors');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const ws = require('./ws');
const routes = require('./routes');
const mongoConnect = require('./db/database').mongoConnect;

const app = express();
ws.init(app);
app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/', (req, res)  => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
})
app.ws('/', (ws, req) => {
  ws.send(JSON.stringify({msg: 'Server: WS connection is open'}));
});
const port = process.env.PORT || 4000;
mongoConnect( () => {
  app.listen(port, () => {
    console.log(`listening on ${port}`)
  })
})
