import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";

export const Centralized = styled.div`
  display: flex;
  align-items: center;
  gap: 9.6rem;
  border-radius: var(--border-radius-sm);
  padding: 0 3.2rem;
  position: relative;
`;
export const NavBtn = styled(NavLink)`
  
  &:link,
  &:visited {
    display: flex;
    justify-content: flex-start;
    
    color: ${props => props.isdark === 'true' ? '#ddd': 'var(--color-grey-4)'};
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
  
  @media (max-width: 1380px) {
    &:link,
    &:visited {
      width: 50%;
    }
  }
  @media (max-width: 1040px) {
    &:link,
    &:visited {
      display: none;
    }
  }

`;