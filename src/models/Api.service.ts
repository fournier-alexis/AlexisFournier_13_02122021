import axios from 'axios';
import store from '../store';
import { User } from '../types/User';

export function login(email:string, password:string){
  return post(`${process.env.REACT_APP_BACKURL}/api/v1/user/login`, {email, password}, "");
}

export function getUserProfile(token:string){
  return post(`${process.env.REACT_APP_BACKURL}/api/v1/user/profile`, {}, token);
}

export function updateUser(newUser: User){
  const token = store.getState().token.token;
  
  return token && put(`${process.env.REACT_APP_BACKURL}/api/v1/user/profile`, newUser, token);
}

async function post(url:string, datas: object, token:string){
  const {data} = await axios.post(
      url, 
      datas,
      {headers: { Authorization: `Bearer ${token}` }}
    );
  return data
}

async function put(url:string, datas: object, token:string){
  const {data} = await axios.put(
      url, 
      datas,
      {headers: { Authorization: `Bearer ${token}` }}
    );
  return data
}