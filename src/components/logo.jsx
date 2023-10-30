import styled, {css} from "styled-components";
import {NavLink} from "react-router-dom";
import {FaGem} from "react-icons/fa6";
import {useSelector} from "react-redux";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => 
      css`
        position: ${props.pos};
        top: ${props.top};
        right: ${props.right};
        transform: translate(${props.htranslate}%, ${props.vtranslate}%);
      `
  }
  z-index: 2;
  
`;
const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  font-family: sans-serif;
  text-decoration: none;
  outline: none;
  
  & svg {
    ${(props) =>
            css`
      width: ${props.size};
    `
    }
    fill: ${props => props.isdark === 'true' ? '#ccc': 'var(--color-primary-shade-2)'};
    @media (max-width: 600px) {
      width: 3.6rem;
    }
  }
  
`;
const H1 = styled.h1`
  font-weight: 400;
  ${(props) =>
      css`
      font-size: ${props.size};
    `
  }
  color: ${props => props.isdark === 'true' ? '#ccc': 'var(--color-primary-shade-2)'};
  @media (max-width: 600px) {
    font-size: 3.2rem;
  }
`;

export default function Logo({pos='unset', top='0', right='0', htranslate='0', vtranslate='0', size='4.8rem'}) {
  const {isDarkMode} = useSelector(state => state.general);

  return (
    <StyledDiv pos={pos} top={top} right={right} htranslate={htranslate} vtranslate={vtranslate}>
      <StyledNavLink  isdark={`${isDarkMode}`} to={'/'}>
        <FaGem size={size}/>
        <H1 isdark={`${isDarkMode}`} size={size}>Galad</H1>
      </StyledNavLink>
    </StyledDiv>
  )
}