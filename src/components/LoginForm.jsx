import {BiLogIn} from "react-icons/bi";
import styled from "styled-components";
import {BsArrowRight} from "react-icons/bs";
import {AiOutlineMail, AiOutlineUser} from "react-icons/ai";
import {RiLockPasswordLine} from "react-icons/ri";
import {useState} from "react";
import {getAllUsers, getUser, newUser} from "../services/apiFirebase.js";
import {NavLink, useNavigate} from "react-router-dom";
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
} from "../StateManagement/UserSlice.js";
import InputFields from "./InputFields.jsx";
import Loader from "./Loader.jsx";
import getBook from "../services/apiGoogleBooks.js";
import toast from "react-hot-toast";

const StyledForm = styled.form`
  padding: 8rem 9.6rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
  grid-column: 5/8;
  grid-row: 1/3;
  position: relative;
  
  @media(max-width: 1120px) {
    grid-column: 4/8;
  }
  @media (max-width: 880px) {
    grid-column: 1/-1;
    grid-row: 1/2;
    height: 100vh;
  }
  
`;
export const NavToCreateAcc = styled(NavLink)`
  &:link, &:visited {
    text-decoration: underline;
    
    color: ${props => props.isdark === 'true' ? '#aaa' : 'var(--color-primary-shade-2)'};

    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.4rem;

    @media (max-width: 340px) {
      flex-direction: column;
      align-items: center;
      line-height: 8px;
      font-size: 1.2rem;
    }
  }
`;
export const StyledBtn = styled.button`
  margin-top: 3.2rem;
  width: 30%;
  align-self: center;
  padding: 0.8rem 1.6rem;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-primary);
  box-shadow: var(--shadow-md);
  color: ${props => props.isdark === 'true' ? '#333' : 'var(--color-grey-3)'};
  
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${props => props.isdark === 'true' ? '#333' : 'var(--color-white-2)'};
    background-color: ${props => props.isdark === 'true' ? '#ccc' : 'var(--color-primary)'};
  }
  &:focus {
    box-shadow: var(--shadow-lg);
  }
  & svg {
    font-size: 2.4rem;
    color: ${props => props.isdark === 'true' ? '#333' : 'var(--color-grey-3)'};
  }
  &:hover svg {
    color: var(--color-white-2);
  }
  @media (max-width: 880px) {
    width: 30%;
  }
  @media (max-width: 510px) {
    padding: 0.6rem;
    width: 30% !important;
    & span {
      display: none;
    }
  }
  @media (max-width: 410px) {
    width: 50% !important;
  }
  
  
`;
const StyledH1 = styled.h1`
  color: var(--color-dark);
  position: absolute;
  top: 3.2rem;
  right: 50%;
  transform: translate(50%, 50%);
  @media (max-width: 370px) {
    font-size: 2.4rem;
  }
`;
const StyledP = styled.p`
  font-size: 1.4rem;
  display: flex;
  gap: 0.6rem;
  color: var(--color-grey-2);
  @media (max-width: 380px) {
    flex-direction: column;
    align-items: center;
    line-height: 8px;
    font-size: 1.2rem;
  }
`;
const LoaderContainer = styled.div`
  height: 1rem;
  @media (max-width: 1120px) {
    margin-top: 3.6rem;
    margin-bottom: 1.8rem;
  }
  
`;

export default function LoginForm({isLogin = true}) {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  //warnings
  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);


  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {isDarkMode} = useSelector(state => state.general);



  function onsubmitHandler(e) {
    e.preventDefault();
    isLogin ? loginHandler() : signUpHandler();
  }

  async function loginHandler() {

    setIsLoading( true);
    const user = await getUser(userName);
    setIsLoading( false);



    if (user === 'no such user available') {
      toast.error('No such user available!!!');
      return;
    }
    if (user.password !== password) {
      toast.error('Password is wrong!!!');
      return;
    }
    toast.success('Logged In successfully');



    // store logged-in user in local storage
    const storedData = {
      userName: user.userName,
      email: user.email,
      password: user.password,
      books: user.books,
      rates: user.rates,
      isLoggedIn: true,
      hasProf: user.hasProf,
      name: user.name,
      lastName: user.lastName,
      phone: user.phone,
      birthday: user.birthday,
      gender: user.gender,
      country: user.country,
      profImgURL: user.profImgURL
    };
    localStorage.setItem('user', JSON.stringify(storedData));


    dispatch(setCurUserName(user.userName));
    dispatch(setCurEmail(user.email));
    dispatch(setCurPassword(user.password));
    dispatch(setCurBooks(user.books));
    dispatch(setRates(user.rates));
    dispatch(setUserLogin(true));
    dispatch(setHasProf(user.hasProf));
    dispatch(setName(user.name));
    dispatch(setLastName(user.lastName));
    dispatch(setPhone(user.phone));
    dispatch(setBirthday(user.birthday));
    dispatch(setGender(user.gender));
    dispatch(setCountry(user.country));
    dispatch(addProfile(user.profImgURL));



    navigate('/');
  }

  async function signUpHandler() {
    //3 type of warning: email taken, userName taken, password does not match

    setIsLoading(() => true);
    const users = await getAllUsers();
    setIsLoading(() => false);

    let founded = false;
    if (password !== confirm) {
      setPasswordError(true);
      setUserNameError(false);
      setEmailError(false);
      toast.error('Password does not match!!!');
      return;
    }

    for (const key in users) {
      if (users[key].userName === userName || users[key].email === email) {
        if(users[key].userName === userName) {
          setUserNameError(true);
          setEmailError(false);
          toast.error('User Name is taken!!!');
        }else {
          setEmailError(true);
          setUserNameError(false);
          toast.error('Email is taken!!!');
        }
        setPasswordError(false)

        //if userName or email is taken then password field cleared
        setPassword('');
        setConfirm('');

        founded = true;

        return;
      }
    }

    if(!founded) {
      newUser(userName, {userName, email, password, isLoggedIn: false, hasProf: false, books: ['firstBook'], rates: [['firstBook', 0]], name: '', lastName: '', birthday: '', phone: '', gender: '', country: '', profImgURL: ''});
      toast.success('Sign Up successfully')
      //reset warning flags
      setUserNameError(false);
      setEmailError(false);
      setPasswordError(false);


      //reset input flags
      setUserName('');
      setEmail('');
      setPassword('');
      setConfirm('');

      //navigate to login page
      navigate('/login');
    }
  }

  
  return (
    <StyledForm onSubmit={onsubmitHandler}>

      <LoaderContainer>{isLoading && <Loader/>}</LoaderContainer>

      <StyledH1>{isLogin ? 'Login Account' : 'Create Account'}</StyledH1>
      <InputFields error={userNameError} setValue={setUserName} value={userName} type={'text'} placeHolder={'user name'}><AiOutlineUser/></InputFields>
      {!isLogin && <InputFields error={emailError} setValue={setEmail} value={email} type={'email'} placeHolder={'email'}><AiOutlineMail/></InputFields>}

      <InputFields error={passwordError} setValue={setPassword} value={password} type={'password'} placeHolder={'password'}>
        <RiLockPasswordLine/>
      </InputFields>

      {!isLogin && <InputFields error={passwordError} setValue={setConfirm} value={confirm} type={'password'} placeHolder={'password'}>
        <RiLockPasswordLine/>
      </InputFields>}
      <StyledBtn isdark={`${isDarkMode}`}><span>{isLogin ? 'Login' : 'Sign Up'}</span> <BiLogIn/></StyledBtn>
      {isLogin && <StyledP>don't have an account? <NavToCreateAcc isdark={`${isDarkMode}`} href={'#'} to={'/sign-up'}>create account</NavToCreateAcc></StyledP>}
      {!isLogin && <NavToCreateAcc isdark={`${isDarkMode}`} to={'/login'}>back to Login <BsArrowRight/></NavToCreateAcc>}


    </StyledForm>
  )
}