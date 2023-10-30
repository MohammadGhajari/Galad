import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "../src/pages/Settings.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import MyBooks from "./pages/MyBooks.jsx";
import SearchBooks from "./pages/SearchBooks.jsx";
import PageNotFount from "./pages/PageNotFount.jsx";
import AppLayout from "./components/AppLayout.jsx";
import GlobalStyles from "./styles/globalstyles.js";
import SignUp from "./pages/SignUp.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  addProfile,
  setBirthday, setCountry,
  setCurBooks,
  setCurEmail,
  setCurPassword,
  setCurUserName, setGender,
  setHasProf, setLastName, setName, setPhone, setRates,
  setUserLogin
} from "./StateManagement/UserSlice.js";
import {Toaster} from "react-hot-toast";
import BookDetails from "./pages/BookDetails.jsx";
import PersonInformation from "./pages/PersonInformation.jsx";
import AskQuestion from "./pages/AskQuestion.jsx";
import Security from "./pages/Security.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import DefaultSettingPage from "./pages/DefaultSettingPage.jsx";
import {generateImage} from "./services/apiGoogleBooks.js";


function App() {


  const {isDarkMode} = useSelector(state => state.general);

  const dispatch = useDispatch();

  // read logged-in user from local storage and store in user slice
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user) {
      const {userName, password, email, books, hasProf, isLoggedIn, name, lastName, phone, birthday, gender, country, profImgURL, rates} = user;

      dispatch(setCurUserName(userName));
      dispatch(setCurPassword(password));
      dispatch(setCurEmail(email));
      dispatch(setCurBooks(books));
      dispatch(setRates(rates));
      dispatch(setHasProf(hasProf));
      dispatch(setUserLogin(isLoggedIn));
      dispatch((setName(name)));
      dispatch((setLastName(lastName)));
      dispatch((setPhone(phone)));
      dispatch((setBirthday(birthday)));
      dispatch((setGender(gender)));
      dispatch((setCountry(country)));
      dispatch((addProfile(profImgURL)));
    }

    if(isDarkMode) {
      document.documentElement.style.setProperty("--color-primary", "#eee")
      document.documentElement.style.setProperty("--color-primary-shade-1", "#eee")
      document.documentElement.style.setProperty("--color-primary-shade-2", "#ccc")
      document.documentElement.style.setProperty("--color-primary-tint-1", "#ddd")
      document.documentElement.style.setProperty("--color-primary-tint-2", "#6195c5")

      document.documentElement.style.setProperty("--color-white-1", "#2e475d");
      document.documentElement.style.setProperty("--color-white-2", "#2e475d");
      document.documentElement.style.setProperty("--color-white-3", "red");
      document.documentElement.style.setProperty("--color-white-4", "#335");

      document.documentElement.style.setProperty("--color-grey-2", "#ddd");
      document.documentElement.style.setProperty("--color-grey-3", "#ddd");
      document.documentElement.style.setProperty("--color-grey-4", "#bbb");
      document.documentElement.style.setProperty("--color-grey-5", "#aaa");

      document.documentElement.style.setProperty("--color-bubble-1`", "red");
      document.documentElement.style.setProperty("--color-bubble-2", "rgba(0, 81, 255, 0.26)");

      document.documentElement.style.setProperty("--color-hero", "#2e475d");

      document.documentElement.style.setProperty("--color-dark", "#ccc");

    }else {
      document.documentElement.style.setProperty("--color-primary", "#0b8cd5")
      document.documentElement.style.setProperty("--color-primary-shade-1", "#0575b2")
      document.documentElement.style.setProperty("--color-primary-shade-2", "#035886")
      document.documentElement.style.setProperty("--color-primary-tint-1", "#47b1fa")
      document.documentElement.style.setProperty("--color-primary-tint-2", "#64bbff")

      document.documentElement.style.setProperty("--color-white-1", "#fff");
      document.documentElement.style.setProperty("--color-white-2", "#eee");
      document.documentElement.style.setProperty("--color-white-3", "#ddd");
      document.documentElement.style.setProperty("--color-white-4", "#ccc");

      document.documentElement.style.setProperty("--color-grey-2", "#222");
      document.documentElement.style.setProperty("--color-grey-3", "#312f2f");
      document.documentElement.style.setProperty("--color-grey-4", "#444");
      document.documentElement.style.setProperty("--color-grey-5", "#aaa");

      document.documentElement.style.setProperty("--color-bubble-1`", "rgba(0, 81, 255, 0.13)");
      document.documentElement.style.setProperty("--color-bubble-2", "rgba(0, 81, 255, 0.26)");

      document.documentElement.style.setProperty("--color-hero", "#f6f9fc");

      document.documentElement.style.setProperty("--color-dark", "#2e475d");
    }
  }, [isDarkMode]);


  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="searchBooks" element={<SearchBooks/>}/>
            <Route path="myBooks" element={<MyBooks/>}/>
            <Route path="settings" element={<Settings/>}>
              {/*<Route index element={<DefaultSettingPage/>}/>*/}
              <Route index element={<PersonInformation/>}/>
              <Route path="personal-information" element={<PersonInformation/>}/>
              <Route path="security" element={<Security/>}/>
              <Route path="ask-question" element={<AskQuestion/>}/>
              <Route path="about" element={<AboutUs/>}/>
            </Route>
            <Route path={'/bookSearch/book/:bookID'} element={<BookDetails/>}/>
          </Route>
          <Route path="login" element={<Login/>}/>
          <Route path="sign-up" element={<SignUp/>}/>
          <Route path="*" element={<PageNotFount/>}/>
        </Routes>
      </BrowserRouter>
      <Toaster
        position={'top-center'}
        gutter={12}
        containerStyle={{margin: '8px'}}
        toastOptions={{
          success: {
            duration: 3000
          },
          error: {
            duration: 5000
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '12px 24px',
            backgroundColor: 'var(--color-white-1)',
            color: 'var(--color-grey-4)',
          }
        }}
      />
    </>
  )
}

export default App
