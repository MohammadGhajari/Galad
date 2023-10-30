import {createSlice} from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {updateUser} from "../services/apiFirebase.js";

const initialState = {
  isLoggedIn: false,
  userName: '',
  password: '',
  email: '',
  books: ['firstBook'],
  rates: [['firstBook', 0]],
  hasProf: false,
  name: '',
  lastName: '',
  phone: '',
  birthday: '',
  gender: '',
  country: '',
  profImgURL: ''
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setCurUserName(state, action) {
        state.userName = action.payload;
      },
      setCurEmail(state, action) {
        state.email = action.payload;
      },
      setCurPassword(state, action) {
        state.password = action.payload;
      },
      addCurBook(state, action) {
        state.books.push(action.payload);

        const updatedStateObject = JSON.parse(JSON.stringify(state));
        updateUser(updatedStateObject.userName, updatedStateObject);

        const localStorageData = JSON.parse(localStorage.getItem('user'));
        localStorageData.books.push(action.payload);
        localStorage.setItem('user', JSON.stringify(localStorageData));
        toast.success('Added to the list');
      },
      setCurBooks(state, action) {
        state.books = action.payload;
      },
      setName (state, action) {
        state.name = action.payload;
      },
      setLastName (state, action) {
        state.lastName = action.payload;
      },
      setPhone (state, action) {
        state.phone = action.payload;
      },
      setBirthday (state, action) {
        state.birthday = action.payload;
      },
      setGender (state, action) {
        state.gender = action.payload;
      },
      setCountry (state, action) {
        state.country = action.payload;
      },
      addProfile (state, action) {
        state.profImgURL = action.payload;
        if(action.payload) state.hasProf = true;
      },
      deleteProfile (state) {
        state.profImgURL = '';
        state.hasProf = false;

        const updatedStateObject = JSON.parse(JSON.stringify(state));
        updateUser(updatedStateObject.userName, updatedStateObject);
      },
      deleteBook(state, action) {
        state.books = state.books.filter(item => item !== action.payload);
        const updatedStateObject = JSON.parse(JSON.stringify(state));
        updateUser(updatedStateObject.userName, updatedStateObject);

        const localStorageData = JSON.parse(localStorage.getItem('user'));
        localStorageData.books = localStorageData.books.filter(item => item !== action.payload);
        localStorage.setItem('user', JSON.stringify(localStorageData));

        toast.success('Removed from the list');
      },
      setUserLogin(state, action) {
        state.isLoggedIn = action.payload;
        const updatedStateObject = JSON.parse(JSON.stringify(state));
        updateUser(updatedStateObject.userName, updatedStateObject);
      },
      setHasProf(state, action) {
        state.hasProf = action.payload;
      },
      setUserLogOut(state) {

        state.isLoggedIn = false;

        const updatedStateObject = JSON.parse(JSON.stringify(state));
        updateUser(updatedStateObject.userName, updatedStateObject);

        state.userName = '';
        state.password = '';
        state.email = '';
        state.books = [];
        state.hasProf = false;

      },
      setRates(state, action) {
        state.rates = action.payload;
      },
      setOneRates(state, action) {
        const founded = state.rates.find(item => item[0] === action.payload[0]);
        const localStorageData = JSON.parse(localStorage.getItem('user'));

        if(founded) {
          state.rates.find(item => item[0] === action.payload[0])[1] = action.payload[1];

          localStorageData.rates.find(item => item[0] === action.payload[0])[1] = action.payload[1];
        }else {
          state.rates.push(action.payload);

          localStorageData.rates.push(action.payload);
        }

        localStorage.setItem('user', JSON.stringify(localStorageData));
        const updatedStateObject = JSON.parse(JSON.stringify(state));
        updateUser(updatedStateObject.userName, updatedStateObject);
        toast.success(`you rate this book`);
      }
    },
  })
;

export const {
  setCurUserName,
  setCurEmail,
  setCurPassword,
  addCurBook,
  deleteBook,
  setUserLogin,
  setCurBooks,
  setHasProf,
  setUserLogOut,
  addProfile,
  deleteProfile,
  setName,
  setCountry,
  setGender,
  setLastName,
  setPhone,
  setBirthday,
  setOneRates,
  setRates
} = userSlice.actions;

export default userSlice.reducer;


