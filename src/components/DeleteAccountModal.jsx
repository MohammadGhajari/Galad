import {AiOutlineClose} from "react-icons/ai";
import styled from "styled-components";
import {useSelector} from "react-redux";

const Modal = styled.div`
  background-color: var(--color-white-2);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.6rem;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-80%, -20%);
  z-index: 999;
  width: 40%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3.2rem;
  
  @media (max-width: 1040px) {
    left: 50%;
    transform: translate(-50%, 0%);
  }
  @media (max-width: 880px) {
    font-size: 85%;
  }
  @media (max-width: 750px) {
    width: 60%;
  }
  @media (max-width: 450px) {
    width: 80%;
  }
  @media (max-width: 330px) {
    width: 95%;
  }
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Message = styled.p`
  color: var(--color-grey-2);
  font-size: ${props => props.fontSize};
  @media (max-width: 880px) {
    font-size: 1.8rem;
  }
`;
const CloseBtn = styled.button`
  border-radius: var(--border-radius-sm);
  padding: 0.6rem;
  border: none;

  &:hover {
    background-color: red;
    color: ${props => props.isdark === 'true' ? '#ccc': 'var(--color-white-1)'};
  }
`;
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
  & p {
    color: var(--color-grey-2);
  }
`;
const DeleteButton = styled.button`
  color: ${props => props.isdark === 'true' ? '#ccc': 'var(--color-white-1)'};

  border-radius: var(--border-radius-sm);
  border: none;
  background-color: ${props => props.ready === 'false' ? '#c20000' : 'red'};
  height: 3rem;

  &:hover {
    background-color: #b20000;
  }
`;
const DeleteInput = styled.input`
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius-sm);
  height: 3rem;
  padding: 0.8rem;
`;
const Overlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998; 
`;


export default function DeleteAccountModal ({setShowModal, userData, handleChangeDelete, setShowDelete, ready}) {

  const {isDarkMode} = useSelector(state => state.general);

  return (
    <>
      <Modal onKeyDown={() => ready && setShowDelete(true)}>
        <Header>
          <Message fontSize={'1.4rem'}>Delete Account</Message>
          <CloseBtn isdark={`${isDarkMode}`}  onClick={() => setShowModal(false)}><AiOutlineClose/></CloseBtn>
        </Header>
        <Message fontSize={'2.6rem'}>Delete {userData.userName}</Message>
        <Footer>
          <p>To confirm, type "Galad-{userData.userName}" in the box below</p>
          <DeleteInput onChange={handleChangeDelete} type={'text'}/>
          <DeleteButton isdark={`${isDarkMode}`} onClick={() => setShowDelete(true)} ready={ready + ''}
                        disabled={!ready}>Delete {userData.userName} account</DeleteButton>
        </Footer>
      </Modal>
      <Overlay></Overlay>
    </>
  )
}