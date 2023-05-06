/* eslint-disable no-redeclare */
import {atom} from 'recoil';

const authData = JSON.parse(localStorage.getItem("authData")) || {};

if (authData.token && authData.expirationTime && new Date().getTime() < authData.expirationTime) {
  var user = authData.user || null;
  var token = authData.token;
} else {
  var user = null;
  var token = "";
}

const AuthState = atom({
    key: "AuthState",
    default: {
        isLoading: false,
        user,
        token,
        error: '',
    }
})

export {AuthState}