import PropTypes from 'prop-types';
import job from './job';

export default {
  id: PropTypes.string,
  name: PropTypes.string, 
  startTime: PropTypes.number, 
  jobs: PropTypes.arrayOf(job),
  totalJobs: PropTypes.number,
  status: PropTypes.oneOf(['running', 'successed', 'failed'])
};