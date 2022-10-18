import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './root-reducer';

import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from './root-saga';


const sagaMiddleware = createSagaMiddleware(); 


const middleWares = [logger, sagaMiddleware];
 
const composedEnhancer = compose(applyMiddleware(...middleWares))

const persistConfig = {
  key: 'root', 
  storage,
  blacklist: ['user', 'category'] 
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composedEnhancer); 

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store); 
