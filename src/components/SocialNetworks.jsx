import styled from "styled-components";
import {BsInstagram} from "react-icons/bs";
import {FaTelegramPlane} from "react-icons/fa";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;
const Anchor = styled.a`
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  transition: all 0.2s;
  &:hover {
    box-shadow: var(--shadow-me-sm);
  }  
  &:hover svg {
    transition: all 0.3s;
    color: var(--color-grey-4);
  }
  & svg {
    font-size: 2.6rem;
    color: var(--color-primary);  
  }
`;

export default function SocialNetworks() {

  return (
    <Container>
      <Anchor href={'https://www.instagram.com/daenerys_dracaryss/'} target={'_blank'}><BsInstagram/></Anchor>
      <Anchor href={'https://t.me/m_ghajari'} target={'_blank'}><FaTelegramPlane/></Anchor>
    </Container>
  )
}