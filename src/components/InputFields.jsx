import styled, {css} from "styled-components";
import React, {useState} from "react";
import {BsEye, BsEyeSlash} from "react-icons/bs";

export const StyledInp = styled.input`
  border: none;
  padding: 0.6rem 0.8rem;
  border-bottom-right-radius: var(--border-radius-sm);
  border-top-right-radius: var(--border-radius-sm);
  width: 90%;
  transition: background-color 0.2s;
  background-color: ${props => props.color ? props.color : 'var(--color-white-2)'};
  color: var(--color-grey-2);
  &::placeholder {
    color: var(--color-grey-4);
  }
  @media (max-width: 410px) {
    width: 100%;
  }
`;

const InputContainer = styled.div`
  border-bottom: 1px solid var(--color-grey-4);
  display: flex;
  align-items: center;
  width: 70%;
  position: relative;
  
  &:focus-within {
    border-bottom: 1px solid var(--color-primary);
  }
  ${(props) =>
          props.error === 'true' && css`
            border-bottom: 1px solid red;
            //padding: 0 0.6rem;
          `}
  & svg:first-child {
    font-size: 2.4rem;
    padding-right: 0.4rem;
    color: var(--color-grey-4);
  }
  & svg:nth-child(2) {
    color: var(--color-grey-4);
    cursor: pointer;
    font-size: 2.2rem;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    right: 0;
  }
  @media (max-width: 880px) {
    width: 120%;
  }
  @media (max-width: 410px) {
    width: 120%;
    font-size: 1.8rem;
    & svg:first-child {
      font-size: 2.6rem;
    }
    // ${props => props.src = 'setting' && css`
    //   font-size: 90%;
    // `}
    
  }
  
`;


export default function InputFields({error, setValue, value, type, children, placeHolder, color, src}) {
  const [showPass, setShowPass] = useState(false);
  const [inputType, setInputType] = useState(type);


  function handleShowPass () {
    setShowPass(true);
    setInputType('text');
  }
  function handleHidePass () {
    setShowPass(false);
    setInputType('password');
  }

  // password fields are special because of show password element
  if(inputType === 'password' || showPass) {
    return (
      <InputContainer src={src} error={`${error}`}>
        {children}
        {showPass && <BsEyeSlash onClick={handleHidePass}/>}
        {!showPass && <BsEye onClick={handleShowPass}/>}
        <StyledInp type={inputType} onChange={(e) => setValue(e.target.value)} value={value} placeholder={placeHolder} required color={color}/>
      </InputContainer>
    )
  }


  return (
    <InputContainer error={`${error}`}>
      {children}
      <StyledInp type={inputType} onChange={(e) => setValue(e.target.value)} value={value} placeholder={placeHolder} required/>
    </InputContainer>
  )
}