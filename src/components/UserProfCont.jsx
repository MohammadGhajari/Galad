import {PiUserLight} from "react-icons/pi";
import {AiOutlinePlusCircle} from "react-icons/ai";
import styled, {keyframes} from "styled-components";
import {useState} from "react";
import {deleteImage, uploadImage} from "../services/apiFirebase.js";
import Loader from "./Loader.jsx";
import BookLoader from "./BookLoader.jsx";
import {useDispatch, useSelector} from "react-redux";
import {RiDeleteBin5Line} from "react-icons/ri";
import {addProfile, deleteProfile} from "../StateManagement/UserSlice.js";


const StyledUserProfCont = styled.div`
  margin-top: 1rem;
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 780px) {
    grid-column: 1/2;
    grid-row: 2/3;
    
  }
`;
const ImgCont = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  border: 5px solid var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & svg {
    font-size: 10rem;
    color: var(--color-primary);
  }
`;
const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;
const StyledLabel = styled.label`
  padding: 0.8rem 1.6rem;
  background-color: var(--color-primary);
  border-radius: var(--border-radius-sm);
  color: var(--color-white-1);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  box-shadow: var(--shadow-sm);

  & svg {
    font-size: 3rem;
    color: var(--color-white-1);
  }

  &:hover {
    background-color: var(--color-primary-shade-2);
  }
`;
const StyledButton = styled.button`
  padding: 0.8rem 1.6rem;
  border-radius: var(--border-radius-sm);
  border: none;
  background-color: red;
  color: #eee;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  &:hover {
    background-color: #be0101;
    
  }

  & svg {
    font-size: 2.6rem;
  }
`;


export default function UserProfCont() {
  const [isUploading, setIsUploading] = useState(false);

  const {hasProf, profImgURL} = useSelector(state => state.user);
  const dispatch = useDispatch();

  function handleChange(e) {
    const file = e.target.files[0];
    uploadImage(file, file.name, setIsUploading, dispatch);
  }
  function handleDelete (e) {
    const deleteProf = window.confirm('Do you want to delete profile?');
    if(!deleteProf) return;

    deleteImage(profImgURL.split('%2F')[1].split('?')[0])
    dispatch(deleteProfile());
  }

  return (
    <StyledUserProfCont>
      <ImgCont>
        {isUploading ? <BookLoader/> : hasProf ? <StyledImg src={profImgURL} alt={'profile'}/> : <PiUserLight/>}

      </ImgCont>
      <StyledLabel htmlFor={'chooseImageInp'}><AiOutlinePlusCircle/> Choose Image</StyledLabel>
      <input id={'chooseImageInp'} style={{display: "none"}} type={'file'} accept={'image/jpeg, image/png, image/jpg'}
             onChange={handleChange}/>
      {hasProf && <StyledButton onClick={handleDelete}><RiDeleteBin5Line/>Delete Profile</StyledButton>}
    </StyledUserProfCont>

  )
}