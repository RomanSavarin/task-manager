const express = require('express');

const controller = require('../controller');

const router = express.Router();
const { getProcesses, deleteProcess, postAddProcess } = controller;
router.get('/processes', getProcesses);
router.post('/processes', postAddProcess);
router.delete('/processes/:processId', deleteProcess);
module.exports = router;