import { configureStore } from '@reduxjs/toolkit';
import mainSlice from './slices/mainSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, mainSlice)


const store = configureStore({
  reducer: {
    mainSlice: persistedReducer
  }


});


export default store;
export const persistor = persistStore(store);
