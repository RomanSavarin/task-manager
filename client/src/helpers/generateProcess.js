import { nanoid } from '@reduxjs/toolkit';

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getTimestamp() {
  return new Date().getTime();
}

function generateJobMock(processId) {
  const id = `${nanoid(10)}`;
  return {
    id,
    name: `Jobs ${id}`,
    processId: processId,
    status: ['running', 'successed', 'failed'][getRandomInteger(0,2)]
  }
};

function generateJobsArray(processId) {
  const jobs = [];
  const jobsCount = getRandomInteger(1,10);
  do {
    jobs.push(generateJobMock(processId))
  } while (jobs.length !== jobsCount);
  return jobs;
}

export default function generateProcessMock() {
  const id = `${nanoid(10)}`;
  return {
    id,
    name: `Process ${id}`,
    startTime: getTimestamp(),
    jobs: generateJobsArray(id)
  }
};