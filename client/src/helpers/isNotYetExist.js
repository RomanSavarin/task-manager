import { selectProcessesId } from 'features/processes/processesSlice';

export default (state, id) => (
  !selectProcessesId(state).find(process => process === id)
);