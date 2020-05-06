
import getStatus from 'helpers/getStatus';

export default function extendProcess(p) {
  p.totalJobs = p?.jobs?.length;
  p.status = getStatus(p?.jobs);
  return p;
}