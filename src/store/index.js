import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import authApi from "api/auth";

import userReducer from "./features/userSlice";

const reducer = combineReducers({ user: userReducer });

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const onRehydrateFinished = () => {
  const state = store.getState();
  if (state.user.basicAuth) {
    authApi.authorizeApiClient(state.user.basicAuth);
  }
};

const persistor = persistStore(store, {}, onRehydrateFinished);

export { store, persistor };
