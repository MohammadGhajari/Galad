import {IoPersonOutline} from "react-icons/io5";
import {AiOutlineEdit, AiOutlinePhone} from "react-icons/ai";
import {LiaBirthdayCakeSolid} from "react-icons/lia";
import {PiGenderIntersexBold} from "react-icons/pi";
import {BsFlag} from "react-icons/bs";
import styled, {css} from "styled-components";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";


const StyledUserInfoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  width: 70%;
  margin-left: 3.2rem;
  margin-bottom: 3.2rem;
  

  @media (max-width: 780px) {
    grid-column: 1/2;
    grid-row: 3/4;
    gap: 3.6rem;
    width: 90%;
    margin-left: 0;
    justify-self: center;
  }
  @media (max-width: 400px) {
    width: 90%;
  }
;
`;
const InputCont = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  @media (max-width: 400px) {
    font-size: 90%;
    gap: 1.2rem;
  }
`;
const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  color: var(--color-grey-2);
  & svg {
    font-size: 2.4rem;
    color: var(--color-primary-shade-2);
  }
`;
const StyledInpText = styled.input`
  width: 60%;
  padding: 0.4rem 0;
  border: none;
  border-bottom: 1px solid var(--color-grey-5);
  background-color: var(--color-white-1);
  color: var(--color-grey-2);
  
  &::placeholder {
    font-weight: 600;
    color: var(--color-grey-4);
  }
  &:focus {
    border-bottom: 1px solid var(--color-primary);
  }
 
`;
const StyledSelect = styled.select`
  width: 60%;
  padding: 0.6rem 0;
  border: none;
  border-bottom: 1px solid var(--color-grey-5);
  background-color: var(--color-white-1);
  color: var(--color-grey-2);
  &:focus {
    border-bottom: 1px solid var(--color-primary);
  }
  & option {
    height: 100%!important;
  }
`;

export default function UserInfoCont ({setName, setLastName, setPhone, setBirthday, setGender, setCountry}) {
  const {name, lastName, phone, birthday, gender, country} = useSelector(state => state.user);

  return (
    <StyledUserInfoCont>
      <InputCont>
        <Label htmlFor={'name'}><IoPersonOutline/>Name:</Label>
        <StyledInpText id={'name'} placeholder={'Name'} type={'tex'} onChange={(e) => setName(e.target.value)} defaultValue={name}/>
      </InputCont>
      <InputCont>
        <Label htmlFor={'last-name'}><IoPersonOutline/>Last Name: </Label>
        <StyledInpText id={'last-name'} placeholder={'Last Name'} type={'tex'} onChange={(e) => setLastName(e.target.value)} defaultValue={lastName}/>
      </InputCont>
      <InputCont>
        <Label htmlFor={'phone'}><AiOutlinePhone/>Phone Number: </Label>
        <StyledInpText id={'phone'} placeholder={'phone number'} type={'tel'} onChange={(e) => setPhone(e.target.value)} defaultValue={phone}/>
      </InputCont>
      <InputCont>
        <Label><LiaBirthdayCakeSolid/>Birthday: </Label>
        <StyledInpText type={'date'} onChange={(e) => setBirthday(e.target.value)}/>
      </InputCont>
      <InputCont>
        <Label><PiGenderIntersexBold/>Gender: </Label>
        <StyledSelect onChange={(e) => setGender(e.target.value)}>
          <option value={'male'}>male</option>
          <option value={'female'}>female</option>
        </StyledSelect>
      </InputCont>
      <InputCont>
        <Label><BsFlag/>Country: </Label>
        <StyledSelect onChange={(e) => setCountry(e.target.value)}>
          <option value={'Argentina'}>Argentina</option>
          <option value={'Australia'}>Australia</option>
          <option value={'Brazil'}>Brazil</option>
          <option value={'Canada'}>Canada</option>
          <option value={'China'}>China</option>
          <option value={'Egypt'}>Egypt</option>
          <option value={'France'}>France</option>
          <option value={'Germany'}>Germany</option>
          <option value={'India'}>India</option>
          <option value={'Indonesia'}>Indonesia</option>
          <option value={'Italy'}>Italy</option>
          <option value={'Japan'}>Japan</option>
          <option value={'Kenya'}>Kenya</option>
          <option value={'Mexico'}>Mexico</option>
          <option value={'Netherlands'}>Netherlands</option>
          <option value={'New Zealand'}>New Zealand</option>
          <option value={'Nigeria'}>Nigeria</option>
          <option value={'Peru'}>Peru</option>
          <option value={'Russia'}>Russia</option>
          <option value={'South Africa'}>South Africa</option>
          <option value={'South Korea'}>South Korea</option>
          <option value={'Spain'}>Spain</option>
          <option value={'Sweden'}>Sweden</option>
          <option value={'Switzerland'}>Switzerland</option>
          <option value={'Thailand'}>Thailand</option>
          <option value={'United Kingdom'}>United Kingdom</option>
          <option value={'United States'}>United States</option>
          <option value={'Vietnam'}>Vietnam</option>
          <option value={'Zambia'}>Zambia</option>
          <option value={'Zimbabwe'}>Zimbabwe</option>
        </StyledSelect>
      </InputCont>
    </StyledUserInfoCont>
  )
}