import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
// import rootSaga from './rootSaga';

// const sagaMiddleware = createSagaMiddleware();

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

// sagaMiddleware.run(rootSaga);

export default { store };
