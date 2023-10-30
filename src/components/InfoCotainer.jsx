import {AiFillStar, AiOutlineBook} from "react-icons/ai";
import styled from "styled-components";
import {MdOutlineBookmarkAdd, MdOutlineBookmarkRemove} from "react-icons/md";
import {BsFlag} from "react-icons/bs";
import {HiMiniLanguage} from "react-icons/hi2";
import toast from "react-hot-toast";
import {addCurBook, deleteBook} from "../StateManagement/UserSlice.js";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrencySymbol, getLanguageName} from "../util/helper.js";
import StarRating from "./StarRating.jsx";

const REPEContainer = styled.div`
  display: flex;
  @media (max-width: 450px) {
    justify-content: center;
  }

`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  gap: 0.8rem;
  color: var(--color-grey-2);
  border-right: 1px solid var(--color-grey-5);
  padding: 0 2.4rem;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    border-right: none;
  }

  & span {
    background-color: var(--color-bubble-1);
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    //background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
  }

  &:first-child span svg {
    font-size: 1rem;
    
  }

  &:nth-child(3) span svg,
  &:nth-child(4) span svg,
  &:nth-child(5) span svg {
    font-size: 2rem;
  }

  & p {
    color: var(--color-grey-4);
    font-size: 1.2rem;
    font-weight: 400;
    display: flex;
    justify-content: center;
    
  }
  @media (max-width: 415px) {
    padding: 0 1.6rem;
    & p {
      display: flex;
      width: 100%;
      font-size: 1rem;
    }
    &:first-child {
      padding-left: 0rem;
      width: 80rem;
    ;
    }

  }

`;
const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.6rem;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 0.8rem;
  }
`;
const BuyLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.6rem;
  width: 17rem;
  color: var(--color-white-2);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-primary);
  font-size: 1.6rem;

  &:hover {
    background-color: var(--color-primary-shade-1);
  }
`;
const StyledButton = styled.button`
  align-self: flex-end;
  margin-bottom: 0.6rem;
  margin-right: 0.6rem;
  width: 13rem;
  height: 3.6rem;
  font-size: 1.4rem;
  position: relative;
  z-index: 2;
  color: var(--color-primary);

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

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.4rem 0.8rem;
  border-radius: var(--border-radius-sm);
  border: 1px solid ${(props) => props.type === 'add' ? 'var(--color-primary)' : '#dc3545'};
  background-color: var(--color-white-1);

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
`;
const RateSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  
  color: var(--color-grey-4);
  font-size: 2.2rem;
  background-color: var(--color-bubble-1);
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  & svg {
    color: var(--color-grey-4);
    font-size: 1.8rem;
  }
`;
const MainBtns = styled.div`
  display: flex;
  gap: 2.6rem;
`;
const SubBtns = styled.div`
  display: flex;
  gap: 2.6rem;

`;



export default function InfoContainer({buyLink, isEbook, amount, currency, avgRating, reviews, pageCount, language, country, id}) {
  const {books, isLoggedIn, rates} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(Boolean(books?.find((item) => item === id)));
  const [rate, setRating] = useState(() => {
    const founded = Boolean(rates.find((item) => item[0] === id));
    if(founded) {
      return rates.find((item) => item[0] === id)[1];
    }
    return 0;
  });

  const [isRatingStarted, setIsRatingStarted] = useState(false);

  function handleAdd() {
    if (!isLoggedIn) {
      toast.error('Please log in to your account.')
      return;
    }
    dispatch(addCurBook(id));
    setIsAdded(true);
  }
  function handleRemove() {
    dispatch(deleteBook(id));
    setIsAdded(false);
  }

  return (
    <>
      <REPEContainer>
        <ItemContainer>
          <span>{avgRating || 3.6}<AiFillStar/></span>
          <p>{reviews || 10} review</p>
        </ItemContainer>
        <ItemContainer>
          <span>{pageCount || '235'}</span>
          <p>Pages</p>
        </ItemContainer>
        {isEbook && <ItemContainer>
          <span><AiOutlineBook/></span>
          <p>Ebook</p>
        </ItemContainer>}
        <ItemContainer>
          <span><BsFlag/></span>
          <p>{country || 'US'}</p>
        </ItemContainer>
        <ItemContainer>
          <span><HiMiniLanguage/></span>
          <p>{getLanguageName(language) === 'Language not found' ? 'en' : getLanguageName(language)}</p>
        </ItemContainer>
      </REPEContainer>
      <BtnContainer>
        <MainBtns>
          <BuyLink href={buyLink} target={'_blank'}>{getCurrencySymbol(currency) || '$'}{amount || 5} Ebook</BuyLink>
          {!isAdded && <StyledButton type={'add'} onClick={handleAdd}><span></span><span></span>Add
            Book<MdOutlineBookmarkAdd/></StyledButton>}
          {isAdded && <StyledButton onClick={handleRemove} type={'remove'}><span></span><span></span>Remove
            Book<MdOutlineBookmarkRemove/></StyledButton>}
        </MainBtns>
        <SubBtns>
          {!isRatingStarted ? <StyledButton type={'add'} onClick={() => setIsRatingStarted(true)}><span></span><span></span>Rate this book<AiFillStar/></StyledButton> :
            <StarRating onSetRating={setRating} setIsRatingStart={setIsRatingStarted} defaultRating={rate} bookID={id}/>}
          { rate !== 0 && <RateSpan>{rate}<AiFillStar/></RateSpan>}
        </SubBtns>
      </BtnContainer>
    </>
  )
}