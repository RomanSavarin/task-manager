import { addProcess, removeProcess, selectProcessesId } from 'features/processes/processesSlice';
import { resetSortedBy } from 'features/sortedBy/sortedBySlice';
import { wsUrl } from 'api/config';
import isNotYetExist from 'helpers/isNotYetExist';


export default function WS(store) {
  const state = store.getState();
  const socket = new WebSocket(wsUrl);

  socket.onopen = () => {
    console.log('Client: WS was opened')
  }

  socket.onclose = (event) => {
    if (event.wasClean) {
      console.log('WS was closed', event);
    } else {
      console.error('WS was aborted', event);
    }
  }

  socket.onerror = (error) => {
    console.error('WS error', error);
  };

  socket.onmessage = e => {
    try {
      const message = JSON.parse(e.data);
      console.log('%c WS message: ', 'background: #383E49; color: #1ADEAE', message);
      const { action, payload } = message;
      if(!action || !payload)  return;
      switch (action) {
        case addProcess.toString():
          if(isNotYetExist(state, payload.id)) {
            store.dispatch(addProcess(payload));
            store.dispatch(resetSortedBy());
          }
          break;
        case removeProcess.toString():
          if(!isNotYetExist(state, payload)) {
            store.dispatch(removeProcess(payload));
          }
          break;
        default:
          console.warn('Unknown message type through WebSocket');
      }
    } catch (err){
      console.error('Error while handling WS message', err)
    }
  }

  return socket;
}