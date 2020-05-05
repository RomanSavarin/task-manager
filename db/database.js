const mongodb = require('mongodb');

let db;
const mongoConnect = (callback) => {
  mongodb.MongoClient.connect('mongodb+srv://web-client:EK1V5GzVFrQ9xa9A@cluster0-maeeh.mongodb.net/tasks?retryWrites=true&w=majority')
    .then(client => {
      console.log('DB connected');
      db = client.db();
      callback();
    })
    .catch((err) => {
      console.error('DB connection faoled: ', err);
      throw err;
    })
}

const getDB = () => {
  if(db){
    return db
  }
  throw 'No database found'
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;