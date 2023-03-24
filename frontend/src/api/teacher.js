import axios from 'axios';
import store from '../store';
import { TEACHER_SIGNOUT } from '../constants/actionTypes';
import { BACKEND_URL } from '../constants/url';

const API = axios.create({
  baseURL: `${BACKEND_URL}/teacher`,
  withCredentials: true,
});

// Teacher endpoints
export const loginTeacher = (data) => API.post(`/login`, data);
export const verifyTeacher = (data) => API.get(`/verify`);
export const logoutTeacher = () => API.get(`/logout`);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return new Promise((res, rej) => {
      if (error.response.status === 401) {
        store.dispatch({
          type: TEACHER_SIGNOUT,
        });
      }
    });
  }
);