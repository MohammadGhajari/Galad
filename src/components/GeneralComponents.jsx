import styled, {css} from "styled-components";

export const BackBtn = styled.button`

  background-color: var(--color-primary);
  border-radius: var(--border-radius-sm);
  border: none;
  padding: 0.8rem 1.6rem;
  margin: 1.6rem;
  box-shadow: var(--shadow-sm);
  position: ${props => props.pos};
  left: 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white-1);
  font-size: 1.8rem;
  
  & svg {
    font-size: 2.4rem;
    color: var(--color-white-1);
  }

  &:hover {
    background-color: var(--color-primary-shade-2);
  }
  
  @media (max-width: 1040px) {
    display: ${props => props.src === 'settings' ? 'none' : 'flex'};
  }
`;