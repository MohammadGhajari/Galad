import styled from "styled-components";
import {useState} from "react";
import {MdOutlineCancel} from "react-icons/md";
import {IoChevronBack} from "react-icons/io5";
import {TiTickOutline} from "react-icons/ti";
import AccTypeCont from "../components/AccTypeCont.jsx";
import UserProfCont from "../components/UserProfCont.jsx";
import UserInfoCont from "../components/UserInfoCont.jsx";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
  addProfile,
  setBirthday,
  setCountry,
  setGender,
  setLastName,
  setName, setPhone
} from "../StateManagement/UserSlice.js";
import {updateUser} from "../services/apiFirebase.js";
import {BackBtn} from "../components/GeneralComponents.jsx";
import YesNoMessage from "../components/YesNoMessage.jsx";
import toast from "react-hot-toast";

const NotLoggedInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  
  color: var(--color-grey-2);
`;

const OuterContainer = styled.div`
  position: relative;
  
  margin-top: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 4.8rem;
`;
const Container = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(2fr);
  width: 100%;
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 4fr 1fr;
  }
`;
const SaveChangesCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 2.4rem;
  margin-bottom: 3.2rem;
  
  @media (max-width: 780px) {
    grid-column: 1/2;
    grid-row: 4/5;
    align-items: center;
  }
  
`;
const StyledButton = styled.button`
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: var(--border-radius-sm);
  color: #eee;
  box-shadow: var(--shadow-md);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  & svg {
    font-size: 2.6rem;
  }
  &:first-child {
    background-color: red;
    &:hover {
      background-color: #d90404;
    }
  }
  
  &:last-child {
    background-color: var(--color-primary);
    color: ${props => props.isdark === 'true' ? '#426786': 'var(--color-white-1)'};

    &:hover {
      background-color: var(--color-primary-shade-2);
    }
  }
`;


export default function PersonInformation() {
  const userData = useSelector(state => state.user);
  document.title ='Personal Information';
  const {
    profImgURL,
    userName,
    hasProf,
    name,
    lastName,
    phone,
    birthday,
    gender,
    country
  } = useSelector(state => state.user);

  const [elemName, setElemName] = useState(name);
  const [elemLastName, setElemLastName] = useState(lastName);
  const [elemPhone, setElemPhone] = useState(phone);
  const [elemBirthday, setElemBirthday] = useState(birthday);
  const [elemGender, setElemGender] = useState(gender);
  const [elemCountry, setElemCountry] = useState(country);

  const [showDiscard, setShowDiscard] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSave(e) {
    const LocalHostData = JSON.parse(localStorage.getItem('user'));

    dispatch(setName(elemName));
    dispatch(setLastName(elemLastName));
    dispatch(setPhone(elemPhone));
    dispatch(setBirthday(elemBirthday));
    dispatch(setGender(elemGender));
    dispatch(setCountry(elemCountry));
    dispatch(addProfile(profImgURL));


    const data = {
      name: elemName,
      lastName: elemLastName,
      phone: elemPhone,
      birthday: elemBirthday,
      gender: elemGender,
      country: elemCountry,
      profImgURL,
      hasProf
    };
    const newLocalHostData = {
      ...LocalHostData,
      ...data
    };
    localStorage.setItem('user', JSON.stringify(newLocalHostData));
    updateUser(userName, data);
    toast.success('Changes saved successfully')
    navigate('/')
  }

  function handleDiscard(e) {
    navigate('/');
    setShowDiscard(false)
  }

  return (
    <>
      {!userData.isLoggedIn ? <NotLoggedInContainer><h1>Please login first</h1></NotLoggedInContainer>:
      <OuterContainer>
        <Container onSubmit={(e) => e.preventDefault()}>
          <AccTypeCont/>
          <UserProfCont/>
          <UserInfoCont setName={setElemName} setLastName={setElemLastName} setPhone={setElemPhone}
                        setBirthday={setElemBirthday} setGender={setElemGender} setCountry={setElemCountry}
                        elemName={elemName} elemLastName={elemLastName} elemPhone={elemPhone}
                        elemBrithday={elemBirthday}
                        elemGender={elemGender} elemCountry={elemCountry}
          />
          <SaveChangesCont>
            <StyledButton onClick={() => setShowDiscard(true)}><MdOutlineCancel/>Discard</StyledButton>
            {showDiscard && <YesNoMessage message={'Discard'} noFunc={setShowDiscard} yesFunc={handleDiscard} top={'30%'} left={'25%'} src={'dis'}/>}
            <StyledButton onClick={handleSave}><TiTickOutline/>Save Changes</StyledButton>
          </SaveChangesCont>
        </Container>
      </OuterContainer>}
    </>
  )
}
