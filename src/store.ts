import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/user/userSlice"
import errorReducer from "./features/error/errorSlice"
import changesReducer from "./features/changes/changesSlice"
import tokenReducer from "./features/token/tokenSlice"
import { STORAGE_KEY } from './constants';
import { User } from './types/User';

export type storeDatas = {
  user: User | null;
  token: String | null;
}

export default configureStore({
    reducer: {
        user: userReducer,
        error: errorReducer,
        changes: changesReducer,
        token: tokenReducer,
    },
})

export function saveToSessionStorage(datas: storeDatas): void {
  try {
    const serializedDatas = JSON.stringify(datas);
    sessionStorage.setItem(STORAGE_KEY, serializedDatas);
  } catch (error) {
    throw error;
  }
}

export function updateSessionStorage(newDatas: Partial<storeDatas>): void {
  const currentDatas: storeDatas | null = loadFromSessionStorage();

  if (currentDatas) {
    saveToSessionStorage({ ...currentDatas, ...newDatas });
  } else {
    saveToSessionStorage({user: null, token: null , ...newDatas});
  }
}

export function loadFromSessionStorage(): storeDatas | null {
    try {
    const serializedDatas = sessionStorage.getItem(STORAGE_KEY);

    if (!serializedDatas) return null;

    return JSON.parse(serializedDatas);

    } catch (error) {
        throw error;
    }
}
