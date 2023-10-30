import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {MdOutlineBookmarkAdd, MdOutlineBookmarkRemove} from "react-icons/md";
import {BsArrowRight} from "react-icons/bs";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";
import {addCurBook, deleteBook} from "../StateManagement/UserSlice.js";

const OuterContainer = styled.div`
  height: 15rem;
  width: 70%;
  position: relative;
  @media (max-width: 1040px) {
    width: 80%;
  }
  @media (max-width: 880px) {
    width: 90%;
  }
  @media (max-width: 730px) {
    width: 90%;
    height: 10rem;
  }
  @media (max-width: 450px) {
    height: 8rem;
  }
`;
const StyledContainer = styled.div`
  background-color: var(--color-white-1);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;

  height: 100%;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  position: relative;
  z-index: 2;

  &:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
const StyledSpan = styled.span`
  position: absolute;
  width: 20rem;
  height: 20rem;
  background-color: var(--color-bubble-1);
  border-radius: 50%;
  top: 0;
  left: 0;
  translate: -17% -12%;
  z-index: 1;
  @media (max-width: 730px) {
    width: 13.33rem;
    height: 13.33rem;
  }
  @media (max-width: 450px) {
    width: 10.66rem;
    height: 10.66rem;
  }
`;
const ImgCnt = styled.div`
  overflow: hidden;
  position: relative;
  width: 12%;
  color: var(--color-grey-4);
  background-color: var(--color-white-3);
  height: 100%;
  border-top-left-radius: var(--border-radius-sm);
  border-bottom-left-radius: var(--border-radius-sm);
  @media (max-width: 1300px) {
    width: 15%;
  }
  @media (max-width: 1040px) {
    width: 17%;
  }
  @media (max-width: 730px) {
    width: 15%;
  }
  @media (max-width: 560px) {
    width: 20%;
  }
  @media (max-width: 450px) {
    width: 18%;
  }
  @media (max-width: 350px) {
    width: 25%;
  }
`;
const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  border-top-left-radius: var(--border-radius-sm);
  border-bottom-left-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
const StyledInfo = styled.div`
  height: 100%;
  width: 76%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 1;
  
  @media (max-width: 730px) {
    width: 80%;
  }
`;
const StyledH1 = styled(NavLink)`
  width: fit-content;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: -1px;
  position: relative;
  z-index: 3;
  color: var(--color-grey-3);
  transition: all 0.2s;

  outline: none;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  
  & span {
    position: absolute;
    width: 2.2rem;
    height: 2.2rem;
    background-color: var(--color-bubble-1);
    top: 0;
    left: 0;
    border-radius: 50%;
    z-index: 2;
  }
  
  & svg {
    transition: all 0.2s;
  }

  &:hover {
    svg {
      //transform: scaleX(2);
      width: 3rem;
      height: 3rem;
    }
  }

  @media (max-width: 730px) {
    font-size: 1.8rem;
  }
  @media (max-width: 660px) {
    font-size: 1.6rem;
  }
`;
const StyledH2 = styled.h3`
  color: var(--color-grey-3);
  font-size: 1.6rem;
  font-weight: 500;
  position: relative;
  z-index: 3;

  & span {
    position: absolute;
    width: 1.8rem;
    height: 1.8rem;
    background-color: var(--color-bubble-1);
    top: 0.1rem;
    left: -0.1rem;
    border-radius: 50%;
    z-index: 2;
  }

  @media (max-width: 730px) {
    font-size: 1.4rem;
  }
  @media (max-width: 660px) {
    letter-spacing: -1px;
  }
`;
const P = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-4);
  margin-top: 3.6rem;
  display: flex;

  & svg {
    color: var(--color-primary);
    font-size: 2rem;
  }
  
  @media (max-width: 730px) {
    display: none;
  }
`;
const StyledBtn = styled.button`
  align-self: flex-end;
  margin-bottom: 0.6rem;
  margin-right: 0.6rem;
  width: 13rem;
  height: 3.6rem;
  font-size: 1.4rem;
  position: relative;
  z-index: 2;
  color: var(--color-grey-2);
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.4rem 0.8rem;
  border-radius: var(--border-radius-sm);
  border: 1px solid ${(props) => props.type === 'add' ? 'var(--color-primary)' : '#dc3545'};
  background-color: var(--color-white-1);
  
  & span {
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    background-color: var(--color-bubble-1);
    border-radius: 50%;
    z-index: -1;
  }

  & span:first-child {
    bottom: 0;
    left: 0;
    translate: -40% 30%;

  }

  & span:nth-child(2) {
    top: 0;
    right: 0;
    translate: 40% -40%;
    width: 1.6rem;
    height: 1.6rem;
  }

  & svg {
    font-size: 2rem;
    color: ${(props) => props.type === 'add' ? 'var(--color-primary)' : '#dc3545'};
  }

  &:hover {
    background-color: ${(props) => props.type === 'add' ? 'var(--color-primary)' : '#dc3545'};
    color: var(--color-white-2);

    svg {
      color: var(--color-white-2);
    }
  }

  @media (max-width: 730px) {
    width: 11rem;
    height: 3.2rem;
  }
  @media (max-width: 660px) {
    font-size: 80%;
  }
  @media (max-width: 560px) {
    font-size: 70%;
  }
  @media (max-width: 450px) {
    width: 4.8rem;
    height: 2.8rem;
    font-size: 40%;
    padding: 0.2rem;
    
    & svg {
      width: 100%;
      height: 100%;
    }
  }
`;
const ButtonTitleSpan = styled.div`
  @media (max-width: 450px) {
    display: none;
  } 
`;
const Nobook = styled.p`
  position: absolute;
  text-align: center;
  top: 50%;
  left: -40%;
  transform: translate(50%, -50%);
  @media (max-width: 1400px) {
    font-size: 1.4rem;
  }
  @media (max-width: 1300px) {
    transform: translate(70%, -50%);
  }
  @media (max-width: 1200px) {
    transform: translate(60%, -50%);
  }
  @media (max-width: 800px) {
    transform: translate(50%, -50%);
  }
  @media (max-width: 750px) {
    font-size: 1rem;
  }
  @media (max-width: 450px) {
    transform: translate(45%, -50%);
  }
`;


export default function BookCart({data}) {

  let {title, imageLinks, description, authors} = data.volumeInfo;
  authors = authors?.join(', ');
  let desWordCount = 25;
  let titleWordCount = 15;

  if(window.innerWidth < 660) {
    titleWordCount = 6
  } else if(window.innerWidth < 660) {
    titleWordCount = 12
  } else if(window.innerWidth < 730) {
    desWordCount = 12;
  } else if(window.innerWidth < 1040) {
    desWordCount = 20;
  }

  description = description?.split(' ')?.filter((item, i) => i < desWordCount)?.join(' ');
  title = title?.split(' ')?.filter((item, i) => i < titleWordCount)?.join(' ');

  const [isAdded, setIsAdded] = useState(false);
  const {books} = useSelector(state => state.user);

  useEffect(() => {
    const isInList = books.find(item => item === data.id);
    if (isInList) setIsAdded(true);
  }, [isAdded]);

  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector(state => state.user);

  function handleAdd() {
    if (!isLoggedIn) {
      toast.error('Please log in to your account.')
      return;
    }
    dispatch(addCurBook(data.id));
    setIsAdded(true);
  }

  function handleRemove() {

    dispatch(deleteBook(data.id));
    setIsAdded(false);
  }

  return (
    <OuterContainer>
      <StyledSpan></StyledSpan>
      <StyledContainer>
        <ImgCnt>
          {imageLinks && <StyledImg src={imageLinks && imageLinks.thumbnail} alt={'photo'}/>}
          {!imageLinks && <Nobook>No Book Image</Nobook>}
        </ImgCnt>
        <StyledInfo>
          <StyledH1 to={`/bookSearch/book/${data.id}`}><span></span>{title}<BsArrowRight/></StyledH1>
          <StyledH2><span></span>Authors: {authors}</StyledH2>
          <P>{description ? description + '...' : 'No description'}</P>
        </StyledInfo>
        {!isAdded &&
          <StyledBtn onClick={handleAdd} type={'add'}><span></span><span></span>  <ButtonTitleSpan>Add Book</ButtonTitleSpan><MdOutlineBookmarkAdd/></StyledBtn>}
        {isAdded && <StyledBtn onClick={handleRemove} type={'remove'}><span></span><span></span>  <ButtonTitleSpan>Remove Book</ButtonTitleSpan><MdOutlineBookmarkRemove/></StyledBtn>}
      </StyledContainer>
    </OuterContainer>
  )
}
