const STATUS = {
  running: 'running',
  failed: 'failed',
  successed: 'successed'
}

const compare = (status) => (j) => j.status === status;

export default function getStatus(jobs) {
  const { running, failed, successed } = STATUS;
  
  if(jobs.some(compare(running))) {
    return running;
  } else if(jobs.some(compare(failed))){
    return failed;
  }
  return successed;
}