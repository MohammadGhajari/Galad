import {HiOutlineHome} from "react-icons/hi2";
import {BiSearchAlt2} from "react-icons/bi";
import {BsBook} from "react-icons/bs";
import {FiSettings} from "react-icons/fi";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Ul = styled.ul`
  margin-top: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;
const Li = styled.li`
  width: 70%;
  border-radius: 5px;
`
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    outline: none;
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-2);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    border-radius: var(--border-radius-sm);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  &:link:focus,
  &:visited:focus {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  /* This works because react-router places the active class on the active NavLink */

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-4);
    background-color: var(--color-primary);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-primary);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-grey-4);
  }
`;


export default function MenuList () {
  return (
    <Ul >
      <Li>
        <StyledNavLink to={'/'}><HiOutlineHome />Home</StyledNavLink>
      </Li>
      <Li>
        <StyledNavLink to={'/searchBooks'}><BiSearchAlt2/>Search Books</StyledNavLink>
      </Li>
      <Li>
        <StyledNavLink to={'/mybooks'}><BsBook/>My Books</StyledNavLink>
      </Li>
      <Li>
        <StyledNavLink to={'/settings'}><FiSettings/>Settings</StyledNavLink>
      </Li>
    </Ul>
  )
}