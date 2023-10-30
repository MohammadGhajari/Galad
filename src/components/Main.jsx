import styled from "styled-components";

const MainDiv = styled.main`
  background: var(--color-white-1);
  margin-top: 10vh;
  width: 100%;
  min-height: 90vh;
`;

export default function Main ({children}) {
  return (
    <MainDiv>{children}</MainDiv>
  )
}