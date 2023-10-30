import userReducer from './UserSlice.js';
import generalReducer from './GeneralSlice.js';
import {configureStore} from "@reduxjs/toolkit";
import {useEffect, useState} from "react";


const store = configureStore({
  reducer: {
    user: userReducer,
    general: generalReducer
  }
});

export default store;
