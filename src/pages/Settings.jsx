import {NavLink, Outlet} from "react-router-dom";
import styled, {css} from "styled-components";
import {NavBtn} from "../styles/general.js";
import {FiSettings} from "react-icons/fi";
import {BsPersonGear} from "react-icons/bs";
import {IoMdNotificationsOutline} from "react-icons/io";
import {MdOutlinePolicy, MdSecurity} from "react-icons/md";
import {SlExclamation, SlQuestion} from "react-icons/sl";
import {useRef, useState} from "react";
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from "react-icons/ai";
import SettingsSideBar from "../components/SettingsSideBar.jsx";

const Container = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;
  position: relative;
  min-height: 90vh;
`;
const Content = styled.div`
  @media (max-width: 1040px) {
    grid-column: 1/-1;
    grid-row: 1/2!important;
  }
`;
const SideBar = styled.aside`
  background-color: var(--color-white-1);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;

  @media (max-width: 1040px) {
    display: none;
  }

`;
const SettingMenuBtn = styled.button`
  margin: 0.4rem;
  padding: 0.6rem 1rem;
  border: none;
  background-color: var(--color-white-1);
  border-radius: var(--border-radius-sm);
  z-index: 3;
  position: absolute;
  display: none;
  & svg {
    color: var(--color-dark);
    font-size: 2rem;
  }
  @media (max-width: 1040px) {
    display: block;
    width: 8%;
    & svg {
      font-size: 3.2rem;
    }
  }
`;
const Menu = styled.div`
  min-height: 100%;
  width: 30rem;
  top: 0;
  position: absolute;
  background-color: var(--color-white-1);
  backdrop-filter: brightness(0);
  box-shadow: var(--shadow-md);
  transform: translate(${props => props.trans}, 0%);
  display: none;
  transition: 0.5s;
  z-index: 2;
  @media (max-width: 1040px) {
    display: block;
  }
`;
export const NavSettings = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    justify-content: flex-start;

    color: ${props => props.isdark === 'true' ? '#ddd' : 'var(--color-grey-4)'};
    outline: none;
    width: ${(props) => props.width};
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
`;


export default function Settings() {
  document.title = 'Settings';

  const [isOpen, setIsOpen] = useState(false);
  const [transform, setTransform] = useState('-100%');

  const securityRef = useRef();
  const personInfoRef = useRef();
  const aboutUsRef = useRef();
  const askRef = useRef();

  function handleOpen () {
    setIsOpen(!isOpen)
    setTransform((transform) => transform === '0%' ? '-100%' : '0%')
  }
  function handleClickMenu (e) {
    if(e.target === securityRef.current || e.target === personInfoRef.current || e.target === askRef.current || e.target === aboutUsRef.current) {
      setTransform((transform) => transform === '0%' ? '-100%' : '0%')
    }
  }



  return (
    <Container>
      <SideBar>
        <SettingsSideBar/>
      </SideBar>
      <Content>
        <SettingMenuBtn onClick={handleOpen}>{isOpen ? <AiOutlineMenuUnfold/> : <AiOutlineMenuFold/>}</SettingMenuBtn>
        <Menu onClick={handleClickMenu} trans={transform}>
          <SettingsSideBar askRef={askRef} aboutUsRef={aboutUsRef} personInfoRef={personInfoRef} securityRef={securityRef} martop={'4.8rem'}/>
        </Menu>
        <Outlet/>
      </Content>
    </Container>
  )
}