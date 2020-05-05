const getDB = require('../db/database').getDB;

class Process {
  constructor({id, name, startTime, jobs}) {
    this.id = id;
    this.name = name;
    this.startTime = startTime;
    this.jobs = jobs;
  }

  save() {
    const db = getDB();
    return db.collection('processes').insertOne(this)
      .catch(err => console.error('Inserting failed', err));
  }

  static fetchAll() {
    const db = getDB();
    return db.collection('processes').find().toArray()
      .catch(err => console.error('Failed fetching the processes', err));
  }

  static deleteById(processId) {
    const db = getDB();
    return db.collection('processes').deleteOne({id: processId})
      .catch(err => console.error('Failed to delete the processes', err));;
  }
}

module.exports = Process;