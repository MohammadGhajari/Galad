import Logo from "./logo.jsx";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {HiOutlineHome} from "react-icons/hi2";
import {BiSearchAlt2} from "react-icons/bi";
import {BsBook} from "react-icons/bs";
import {FiSettings} from "react-icons/fi";
import MenuList from "./MenuList.jsx";


const Aside = styled.aside`
  grid-column: 1;
  grid-row: 1/3;
  background-color: var(--color-white-1);
  box-shadow: var(--shadow-md);
  z-index: 1;
`;

export default function Menu () {
  return (
    <Aside>
      <Logo/>
        <MenuList/>
    </Aside>
  )
}