import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/user/userSlice"
import errorReducer from "./features/error/errorSlice"
import changesReducer from "./features/changes/changesSlice"
import { STORAGE_KEY } from './constants';
import { User } from './types/User';

export type storeDatas = {
  user: User | null;
  token?: string;
}

export default configureStore({
    reducer: {
        user: userReducer,
        error: errorReducer,
        changes: changesReducer,
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

export function updateSessionStorage(newDatas: storeDatas): void {
  const currentDatas: storeDatas | null = loadFromSessionStorage();

  if (currentDatas) {
    saveToSessionStorage({ ...currentDatas, ...newDatas });
  } else {
    saveToSessionStorage(newDatas);
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
