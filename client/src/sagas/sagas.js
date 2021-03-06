import { call, put, all, select, takeLatest, takeEvery } from 'redux-saga/effects';

import { get, post, remove  } from 'api';
import handleError from 'helpers/handleError';
import extendProcess from 'helpers/extendProcess';
import generateProcessMock from 'helpers/generateProcess';
import isNotYetExist from 'helpers/isNotYetExist';
import { 
  fetch,
  create,
  addProcess,
  addProcesses,
  deleteProcess, 
  removeProcess,
} from 'features/processes/processesSlice';
import { setIsLoading } from 'features/loader/loaderSlice';
import { resetSortedBy } from 'features/sortedBy/sortedBySlice';

//TODO Create withLoader HOF
function* fetchProcessesSaga() {
  try {
    yield put(setIsLoading(true));
    const processes = yield call(get, 'processes');
    if(processes?.data) {
      const processesExtended = processes.data.map(extendProcess);
      yield put(addProcesses(processesExtended));
      yield put(resetSortedBy());
    }
  } catch(error) {
    handleError('Error while fetching the processes', error);
  } finally {
    yield put(setIsLoading(false));
  }
}

function* createProcessSaga() {
  try {
    yield put(setIsLoading(true));
    const newProcess = generateProcessMock();
    const process = yield call(post, 'processes', newProcess);
    const state = yield select();
    if(process?.data && isNotYetExist(state, process?.data?.id)) {
      const processExtended = extendProcess(process.data);
      yield put(addProcess(processExtended));
      yield put(resetSortedBy());
    }
  } catch(error) {
    handleError('Error while creating a process', error);
  } finally {
    yield put(setIsLoading(false));
  }
}

function* deleteProcessSaga(action) {
  const processId = action.payload;
  try {
    yield put(setIsLoading(true));
    const process = yield call(remove, `processes/${processId}`);
    const state = yield select();
    if(process?.status === 204 && !isNotYetExist(state, processId)) { //move 204 to constant
      yield put(removeProcess(processId));
    }
  } catch(error) {
    handleError('Error while deleting a process', error)
  } finally {
    yield put(setIsLoading(false));
  }
}

function* watchCreateProcess() {
  yield takeEvery(create, createProcessSaga);
}

function* watchFetchProcess() {
  yield takeLatest(fetch, fetchProcessesSaga);
}

function* watchDeleteProcess() {
  yield takeEvery(deleteProcess, deleteProcessSaga);
}

export default function* rootSaga() {
  yield all([
    watchFetchProcess(),
    watchCreateProcess(),
    watchDeleteProcess()
  ])
}