import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { persistStore } from 'redux-persist';
// import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
// import rootSaga from './rootSaga';

export const store = configureStore({
  reducer: rootReducer,
  middleware: process.env.NODE_ENV === 'development' ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
});

// sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);

export default { store };
