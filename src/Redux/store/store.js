import reducer from "../reducer/reducer"

import {createStore,applyMiddleware,compose} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from '../sagas/rootSaga'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {
    persistStore,
    persistReducer
  } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const reducers = persistReducer(persistConfig, reducer);

const sagaMiddleWare = createSagaMiddleware()

const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers,
    withDevTools(applyMiddleware(sagaMiddleWare))
);

export const persistor = persistStore(store);

sagaMiddleWare.run(rootSaga);


//create store with redux saga middleWare