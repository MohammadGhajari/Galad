import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {BiLogOut, BiSearchAlt} from "react-icons/bi";
import {BsBook} from "react-icons/bs";
import {FiSettings} from "react-icons/fi";
import {setUserLogOut} from "../StateManagement/UserSlice.js";
import toast from "react-hot-toast";
import YesNoMessage from "./YesNoMessage.jsx";

const ProfMenu = styled.div`
  font-size: 1.6rem;
  position: absolute;
  width: 22rem;
  border-radius: var(--border-radius-sm);
  background-color: ${props => props.isdark === 'true' ? '#426786': 'var(--color-white-1)'};

  box-shadow: var(--shadow-md);
  top: 150%;
  right: 10%;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
  z-index: 10;
`;
const OverLay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: -100; 
`;
const StyledNav = styled(NavLink)`
  &:link, &:visited {
    display: ${props => props.disp || 'flex'};
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 4.8rem;
    border-radius: var(--border-radius-sm);
    color: var(--color-grey-2);
    & svg {
      color: var(--color-primary);
      font-size: 2.4rem;
      margin-right: 1rem;
      margin-left: 1rem;
      transition: 0.2s;
    }
    &:link:hover, &:visited:hover {
      color: var(--color-white-2);
      background-color: var(--color-primary);;
      svg {
        color: var(--color-white-2);
      }
    }
  }
  
  @media (max-width: 1040px) {
    &:link, &:visited {
      display: ${props => props.disp === 'none' && 'flex'};
    }
  }
  
  
`;
const StyledBtn = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 4.8rem;
  border-radius: var(--border-radius-sm);
  border: none;
  
  background-color: ${props => props.isdark === 'true' ? '#426786': 'var(--color-white-1)'};
  color: var(--color-grey-2);
  
  & svg {
    color: var(--color-primary);
    font-size: 2.4rem;
    margin-right: 1rem;
    margin-left: 1rem;
    transition: 0.2s;
  }
  &:hover {
    background-color: var(--color-primary);
    color: var(--color-white-2);
    svg {
      color: var(--color-white-2);
    }
  }
`;
const StyledSpan = styled.span`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.8rem;
  color: var(--color-grey-2);
  & strong {
    margin-left: 0.6rem;
  }
`;


export default function ProfileMenu({setShowMenu, showMenu}) {
  const {userName} = useSelector(state => state.user);
  const {isDarkMode} = useSelector(state => state.general);
  const dispatch = useDispatch();
  const [showLogOut, setShowLogOut] = useState(false);

  function handleLogOut () {
      toast.success('logged out');
      dispatch(setUserLogOut());
      localStorage.clear();
  }

  return (
    <ProfMenu isdark={`${isDarkMode}`} >
      {showMenu && <OverLay onClick={() => setShowMenu(false)}></OverLay>}
      <StyledSpan>Welcome<strong>{userName.at(0).toUpperCase() + userName.toLowerCase().slice(1, userName.length)}</strong></StyledSpan>
      <StyledNav to={'/settings'} onClick={() => setShowMenu(false)}><FiSettings/>Account Settings</StyledNav>
      <StyledNav to={'/myBooks'} onClick={() => setShowMenu(false)}><BsBook/>My Books List</StyledNav>
      <StyledBtn isdark={`${isDarkMode}`} onClick={() => setShowLogOut(true)}><BiLogOut/>Log Out</StyledBtn>
      {showLogOut && <YesNoMessage message={'Log Out'} yesFunc={handleLogOut} noFunc={setShowMenu} top={'50%'} left={'-260%'}/>}
    </ProfMenu>
  )
}
