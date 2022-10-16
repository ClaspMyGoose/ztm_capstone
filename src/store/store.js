import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk  from 'redux-thunk'; 

import { rootReducer } from './root-reducer';

const middleWares = [logger, thunk];
 
const composedEnhancer = compose(applyMiddleware(...middleWares))

const persistConfig = {
  key: 'root', 
  storage,
  blacklist: ['user', 'category'] 
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composedEnhancer); 

export const persistor = persistStore(store); 
