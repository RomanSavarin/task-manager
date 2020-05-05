import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {reducer as toastrReducer} from 'react-redux-toastr'

import loaderReducer from 'features/loader/loaderSlice';
import sortedByReducer from 'features/sortedBy/sortedBySlice';
import searchReducer from 'features/search/searchSlice';
import processesReducer from 'features/processes/processesSlice';
import rootSaga from 'sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  isLoading: loaderReducer,
  processes: processesReducer,
  sortedBy: sortedByReducer,
  search: searchReducer,
  toastr: toastrReducer
});

export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware]
});

sagaMiddleware.run(rootSaga);