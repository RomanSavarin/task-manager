const Process = require('../models/process');

exports.getProcesses = (req, res, next) => {
  return Process.fetchAll()
    .then( processes => res.send(processes))
    .catch((err) => {
      console.error('Error while fetching processes ', err);
      res.status(500).send({ error: 'Error while fetching processes' });
    });;
}

exports.postAddProcess = (req, res, next) => {
  const { id, name, startTime, jobs } = req.body;
  const process = new Process({id, name, startTime, jobs});
  process.save()
    .then(process => res.send(process.ops[0]))
    .catch((err) => {
      console.error('Error while posting a process ', err);
      res.status(500).send({ error: 'Error while posting a process' });
    })
}

exports.deleteProcess = (req, res, next) => {
  const id = req.params.processId;
  return Process.deleteById(id)
    .then(() => res.status(204).send([]))
    .catch((err) => {
      console.error('Error while deleting a process ', err);
      res.status(500).send({ error: 'Error while deleting a process' });
    });
}