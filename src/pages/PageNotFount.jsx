import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {FaGem} from "react-icons/fa6";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 3.2rem;
`;
const StyledNav = styled(NavLink)`
  & svg {
    font-size: 6.4rem;
    color: var(--color-primary-shade-2);
  }
`;

export default function PageNotFount() {
  document.title ='Page Not Found';

  return (
    <Container>
      <h1>There is no such address☹️</h1>
      <StyledNav to={'/'}><FaGem/></StyledNav>

    </Container>
  )
}