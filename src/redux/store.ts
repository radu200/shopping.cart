import { Store, createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import { RootState } from './rootReducer';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root-shooping-cart',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {}) as Store<RootState>;

export default store;
