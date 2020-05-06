let ws;

module.exports = {
  init: app => {
    ws = require('express-ws')(app);
    return ws;
  },
  getSocket: () => {
    if (!ws) {
      throw new Error('WebSocket not initialized!');
    }
    return ws;
  },
  sendToClients: (msg) => {
    if (!ws) {
      throw new Error('WebSocket not initialized!');
    }
    ws.getWss().clients.forEach(c => c.send(JSON.stringify(msg)))
  }
};
