import styled, {css} from "styled-components";
import {BiLogIn, BiSearchAlt} from "react-icons/bi";
import {useSelector} from "react-redux";
import {PiUserLight} from "react-icons/pi";
import { useState} from "react";
import ProfileMenu from "./ProfileMenu.jsx";
import {Centralized, NavBtn} from "../styles/general.js";
import HeaderButtons from "./HeaderButton.jsx";
import {NavLink} from "react-router-dom";

const HeaderDiv = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  height: 10vh;
  border-bottom: 1px solid var(--color-white-4);
  width: 100%;
  background-color: var(--color-white-1);
  position: fixed;
  
  z-index: 10;
  
`;
const UserProfBtn = styled.button`
  width: 4.8rem;
  height: 4.8rem;
  background-color: var(--color-white-1);
  box-shadow: var(--shadow-sm);
  border: 4px solid var(--color-primary);
  border-radius: 50%;
  position: relative;
  transition: all 0.2s;
  overflow: hidden;
  &:hover {
    box-shadow: var(--shadow-md);
    background-color: var(--color-primary);
    transition: all 0.2s;
    svg {
      color: var(--color-white-2);
    }
  }
  

  & svg {
    font-size: 3.2rem;
    color: var(--color-primary);
  }
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const NavBtnLR = styled(NavLink)`
  
  &:link,
  &:visited {
    display: ${props => props.display};
    justify-content: flex-start;
    
    color: ${props => props.isdark === 'true' ? '#ddd': 'var(--color-grey-4)'};
    outline: none;
    width: 15%;
    padding: 0.8rem 1.8rem;
    border-radius: var(--border-radius-sm);
    margin-right: 1rem;
    box-shadow: var(--shadow-me-sm);
    transition: 0.1s;
    
    background-color: var(--color-white-1);

  }
  ${(props) => props.active === 'true' && css`
    &.active:link,
    &.active:visited {
      color: var(--color-white-1);
      background-color: var(--color-primary-tint-1);
      & svg {
        color: var(--color-white-1);
      }
    }  
  `}
  
  
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    background-color: var(--color-primary);
    color: var(--color-white-2);
  }
  &:hover svg {
    color: var(--color-white-2);
  }
  &:focus {
    box-shadow: var(--shadow-me-lg);
  }
  & svg {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 0.4rem;
    color: var(--color-primary);
  }
  
  @media (max-width: 1380px) {
    &:link,
    &:visited {
      width: 15%;
    }
  }
  @media (max-width: 1180px) {
    &:link,
    &:visited {
      width: 20%;
    }
  }
  @media (max-width: 1040px) {
    &:link,
    &:visited {
      display: flex;
    }
  }
  @media (max-width: 920px) {
    &:link,
    &:visited {
      width: 20rem;
    }
  }
  @media (max-width: 650px) {
    &:link,
    &:visited {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 440px) {
    &:link,
    &:visited {
      width: 5rem;
      padding: 0.6rem 0;
    }
    & svg {
      width: 5rem;
    }
    & span {
      display: none;
    }
  }
`;



export default function Header() {
  const {isLoggedIn, hasProf, profImgURL} = useSelector(state => state.user);
  const [showMenu, setShowMenu] = useState(false);


  return (
    <HeaderDiv>
      <HeaderButtons/>
      <NavBtnLR to={'/searchBooks'} display={'none'}><BiSearchAlt/><span>Search</span></NavBtnLR>
      {!isLoggedIn
        ? <>
          <NavBtnLR to={'/login'} display={'flex'}><span>Login / Register</span> <BiLogIn/></NavBtnLR>
        </>
        : <Centralized>
          {showMenu && <ProfileMenu setShowMenu={setShowMenu} showMenu={showMenu}></ProfileMenu>}
          <UserProfBtn onClick={() =>setShowMenu(!showMenu)}>{!hasProf ? <PiUserLight/> : <StyledImg src={profImgURL} alt={'profile image'}/> }</UserProfBtn>
        </Centralized>
      }
    </HeaderDiv>
  )
}