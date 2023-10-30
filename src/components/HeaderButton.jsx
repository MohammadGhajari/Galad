import Logo from "./logo.jsx";
import {NavBtn} from "../styles/general.js";
import {FiSettings} from "react-icons/fi";
import {BsBook, BsSun} from "react-icons/bs";
import {BiSearchAlt} from "react-icons/bi";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import SocialNetworks from "./SocialNetworks.jsx";
import {MdOutlineDarkMode} from "react-icons/md";
import {setDarkMode} from "../StateManagement/GeneralSlice.js";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
  @media (max-width: 1180px) {
    &:first-child {
      width: 60%;
    }
  }
  @media (max-width: 1180px) {
    &:first-child {
      width: 70%;
    }
  }
  @media (max-width: 1040px) {
    &:last-child {
      display: none;
    }
  }
  
`;
const OuterContainer = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 9.8rem;
  width: 87%;
  padding: 0 0.8rem;
  @media (max-width: 1040px) {
    justify-content: flex-end;
    gap: 4.2rem;
  }
`;
const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const DarkMod = styled.button`
  padding: 0.6rem;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-white-1);
  margin-right: 1rem;
  & svg {
    font-size: 2.4rem;
    color: var(--color-primary);
  }
  &:hover {
    background-color: var(--color-primary);
    svg {
      color: var(--color-white-1);
      
    }
  }
`;

export default function HeaderButtons() {
  const {isLoggedIn} = useSelector(state => state.user);
  const {isDarkMode} = useSelector(state => state.general);
  const dispatch = useDispatch();

  function handleDarkMode () {
    dispatch(setDarkMode(!isDarkMode));
  }

  return (
    <OuterContainer>
      <Logo/>
      <MiddleContainer>
        <Container width={'55%'}>
          <DarkMod onClick={handleDarkMode}>{!isDarkMode ? <MdOutlineDarkMode/> : <BsSun/>}</DarkMod>

          <NavBtn isdark={`${isDarkMode}`} width={'40%'} to={'/settings'}><FiSettings/>Settings</NavBtn>
          {isLoggedIn && <NavBtn  isdark={`${isDarkMode}`} width={'17rem'} to={'/myBooks'}><BsBook/>My Books</NavBtn>}
          <NavBtn  isdark={`${isDarkMode}`} width={'40%'} to={'/searchBooks'}><BiSearchAlt/>Search Books</NavBtn>
        </Container>
        <Container>
          <SocialNetworks/>
        </Container>
      </MiddleContainer>
    </OuterContainer>
  )
}