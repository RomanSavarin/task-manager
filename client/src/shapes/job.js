import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string, 
  processId: PropTypes.string, 
  status: PropTypes.oneOf(['running', 'successed', 'failed'])
});