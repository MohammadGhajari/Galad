import styled, {css} from "styled-components";
import {BiLogOut} from "react-icons/bi";
import {AiOutlineClose, AiOutlineEdit} from "react-icons/ai";
import {RiDeleteBin5Line, RiLockPasswordLine} from "react-icons/ri";
import InputFields, {StyledInp} from "../components/InputFields.jsx";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";
import {setCurPassword, setUserLogOut} from "../StateManagement/UserSlice.js";
import {removeUser, updateUser} from "../services/apiFirebase.js";
import {IoChevronBack} from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import {BackBtn} from "../components/GeneralComponents.jsx";
import YesNoMessage from "../components/YesNoMessage.jsx";
import DeleteAccountModal from "../components/DeleteAccountModal.jsx";

const NotLoggedInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  color: var(--color-grey-2);
  
`;
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 4.8rem;
  position: relative;
  @media (max-width: 1040px) {
    flex-direction: column;
  }
`;
const StyledBtn = styled.button`
  padding: 0.8rem 1.6rem;
  border-radius: var(--border-radius-sm);
  border: none;
  background-color: ${props => props.backgroundcolor || 'var(--color-primary)'};
  color: var(--color-white-1);
  ${props => props.backgroundcolor && css`
    color: #fff;
  `};
  width: ${props => props.width || '20rem'};
  margin-top: ${props => props.margintop || '0'};
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.8rem;

  align-self: ${props => props.alignself || ''};

  &:hover {
    background-color: ${props => props.backgroundcolor ? '#be0101' : 'var(--color-primary-shade-2)'};
  }

  & svg {
    font-size: 2.6rem;
  }
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin-left: 1.6rem;
  margin-top: 8.4rem;
`;
const ChangeContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 50%;
  margin-top: 7.4rem;
  @media (max-width: 1040px) {
    align-self: center;
    margin-bottom: 5rem;
    width: 70%;
  }
  @media (max-width: 880px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    gap: 6.4rem;
  } 
`;
const InputContainer = styled.div`
  display: flex;
  gap: 3.2rem;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 470px) {
    font-size: 90%;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    align-self: center;
    gap: 1.6rem;
    width: 80%;
    
    
  }
`;
const StyledLbl = styled.label`
  color: var(--color-grey-3);
  @media (max-width: 880px) {
    width: 50%;
  }
  @media (max-width: 400px) {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;


export default function Security() {
  document.title ='Security';

  const userData = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currPass, setCurrPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [conPass, setConPass] = useState('');
  const [showChangeFields, setShowChangeFields] = useState(false);


  const [ready, setReady] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);

  function handleChange(e) {
    e.preventDefault();

    console.log(newPass, conPass)
    if (userData.password !== currPass && currPass.length !== 0) {
      toast.error('Current password is not valid');
      return;
    }
    if (newPass !== conPass) {
      toast.error('Password does not match');
      return;
    }
    dispatch(setCurPassword(newPass));
    updateUser(userData.userName, {...userData, password: newPass});
    toast.success('Password successfully changed');
    const storageData = JSON.parse(localStorage.getItem('user'));
    localStorage.setItem('user', JSON.stringify({...storageData, password: newPass}));


    setCurrPass('');
    setNewPass('');
    setConPass('');
  }

  function handleLogOut() {
    toast.success('Logged Out');
    dispatch(setUserLogOut());
    localStorage.clear();
  }

  function handleChangeDelete(e) {
    if (e.target.value === `Galad-${userData.userName}`) {
      setReady(true);
    } else {
      setReady(false);
    }
  }

  function handleDelete() {
    toast.success('Account successfully deleted');
    dispatch(setUserLogOut());
    localStorage.clear();
    removeUser(userData.userName);
  }

  return (
    <>
      {!userData.isLoggedIn ? <NotLoggedInContainer><h1>Please login first</h1></NotLoggedInContainer> :
        <Container>
          {showModal && <DeleteAccountModal setShowModal={setShowModal} handleChangeDelete={handleChangeDelete} setShowDelete={setShowDelete} userData={userData} ready={ready}/>}

          <BtnContainer>
            <StyledBtn onClick={() => setShowChangeFields(true)}><AiOutlineEdit/>Change Password</StyledBtn>
            <StyledBtn onClick={() => {setShowLogOut(true);setShowChangeFields(false);}}><BiLogOut/>Log Out</StyledBtn>
            {showLogOut && <YesNoMessage yesFunc={handleLogOut} noFunc={setShowLogOut} message={'Log Out'}/>}
            <StyledBtn onClick={() => {setShowModal(true); setShowChangeFields(false);}} backgroundcolor={'red'}><RiDeleteBin5Line/>Delete
              Account</StyledBtn>
            {showDelete && <YesNoMessage yesFunc={handleDelete} noFunc={setShowDelete} message={'Delete Account'}/>}
          </BtnContainer>
          {showChangeFields && <ChangeContainer onSubmit={handleChange}>
            <InputContainer>
              <StyledLbl>Current Password:</StyledLbl>
              <InputFields src={'setting'} setValue={setCurrPass} type={'password'} value={currPass}
                           placeHolder={'Current Password'} color={'var(--color-white-1)'}><RiLockPasswordLine/></InputFields>
            </InputContainer>
            <InputContainer>
              <StyledLbl>New Password:</StyledLbl>
              <InputFields setValue={setNewPass} type={'password'} value={newPass}
                           placeHolder={'New Password'} color={'var(--color-white-1)'}><RiLockPasswordLine/></InputFields>
            </InputContainer>
            <InputContainer>
              <StyledLbl>Confirm Password:</StyledLbl>
              <InputFields setValue={setConPass} type={'password'} value={conPass}
                           placeHolder={'Confirm Password'} color={'var(--color-white-1)'}><RiLockPasswordLine/></InputFields>
            </InputContainer>
            {currPass && newPass && conPass &&
              <StyledBtn onClick={handleChange} width={'15rem'} margintop={'3.2rem'}
                         alignself={'flex-end'}><AiOutlineEdit/>Change</StyledBtn>}
          </ChangeContainer>}
        </Container>}
    </>
  )

}
