import styled, {css} from "styled-components";
import {BiSearchAlt} from "react-icons/bi";
import {useRef, useState} from "react";
import getBook from "../services/apiGoogleBooks.js";
import BookCart from "../components/BookCart.jsx";
import PaginationComponent from "../components/Pagination.jsx";
import toast from "react-hot-toast";
import BookLoader from "../components/BookLoader.jsx";
import BeforeSearch from "../components/BeforeSearch.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 50%;
  height: 3.6rem;
  margin-top: 3.2rem;
  position: relative;
  @media (max-width: 1250px) {
    width: 60%;
  }
  @media (max-width: 1000px) {
    width: 80%;
  }
  @media (max-width: 730px) {
    width: 90%;
    flex-direction: column-reverse;
    gap: 3.2rem;
  }

  
`;
const SearchInputContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  z-index: 8;
  @media (max-width: 480px) {
    width: 95%;
  }
`;
const SearchInp = styled.input`
  border: none;
  border-bottom: 1px solid #aaa;
  padding: 0.6rem 0 0.8rem 0.6rem;
  width: 90%;
  transition: all 0.2s;
  background-color: var(--color-white-1);
  color: var(--color-grey-2);
  &::placeholder {
    color: var(--color-grey-4);
  }

  &:focus-within {
    transition: all 0.5s;
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-sm);
    border-bottom: 1px solid var(--color-primary);
  }
`;
const SearchBtn = styled.button`
  width: 10%;
  height: 100%;
  border: none;
  border-radius: var(--border-radius-sm);
  transition: 0.2s;
  box-shadow: var(--shadow-sm);
  background-color: var(--color-white-1);

  & svg {
    border-radius: var(--border-radius-sm);
    font-size: 3.8rem;
    transition: 0.2s;
    color: var(--color-primary);
  }

  &:hover {
    box-shadow: var(--shadow-md);
    background-color: var(--color-primary);

    svg {
      color: var(--color-white-2);
    }
  }

  &:focus {
    box-shadow: var(--shadow-md);
  }
`;
const ResultContainer = styled.div`
  margin-top: 4.8rem;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5.4rem;
  @media (max-width: 730px) {
    gap: 6.4rem;
  }
`;
const StyledSelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  font-size: 1.4rem;
  color: var(--color-grey-4);
`;
const StyledSelect = styled.select`
  width: 4.2rem;
  height: 3.0rem;
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius-sm);
`;
const OverLay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;


export default function SearchBooks() {
  document.title ='Search Books';


  const [bookNum, setBookNum] = useState(0); // all result count
  const [currentBooks, setCurrentBook] = useState([]); // maximum 40
  const [maxResults, setMaxResults] = useState(10); //result per request
  const [query, setQuery] = useState('');
  const [activePage, setActivePage] = useState(1);
  const PagesCount = Math.ceil(bookNum / maxResults);

  const [isLoading, setIsLoading] = useState(false);

  const inputElem = useRef();

  const [overlayActive, setOverlayActive] = useState(false);

  function handleGetBooks(src = 'inp') {


    const bookName = inputElem.current.value;
    if (!bookName) return;

    setOverlayActive(false);
    setQuery(bookName);


    try {
      setIsLoading(true);
      setCurrentBook([]);
      setBookNum(0);

      let fromWitchIndex = src === 'inp' ? 0 : activePage * maxResults;

      getBook(query, fromWitchIndex, maxResults).then(data => {
        if (data?.error?.code === 400) {
          toast.error('Try again. (Error code 400)')
        } else if (data?.error?.code === 503) {
          toast.error('Service temporarily unavailable. (Error code 503');
        } else if (data === 'connection error') {
          setIsLoading(false);
        } else {
          if (src === 'inp') setBookNum(data.totalItems > 600 ? 600 : data.totalItems)
          else setBookNum(bookNum);

          if (data.totalItems === 0) toast.error('No result')
          setCurrentBook(data.items);
        }

        setIsLoading(false);
      });
    } catch (e) {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter')
      handleGetBooks();
  }

  return (
    <Container>
      {overlayActive && <OverLay onClick={() => setOverlayActive(false)}></OverLay>}
      <InputContainer>
        <StyledSelectContainer>
          Result per page:
          <StyledSelect onChange={(e) => setMaxResults(+e.target.value)}>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>40</option>
          </StyledSelect>
        </StyledSelectContainer>
        <SearchInputContainer onClick={() => setOverlayActive(true)}>
          <SearchInp onKeyDown={handleKeyDown} type={'text'} placeholder={'Search Books'} ref={inputElem}/>
          <SearchBtn onClick={handleGetBooks}><BiSearchAlt/></SearchBtn>
        </SearchInputContainer>
      </InputContainer>

      {isLoading && <BookLoader marginTop={'20rem'}/>}
      <ResultContainer>
        {
          currentBooks?.map((item, index) =>
            <BookCart key={index} data={item}/>
          )
        }
        {
          currentBooks.length === 0 ? <BeforeSearch/> : ''
        }
      </ResultContainer>
      {bookNum !== 0 &&
        <PaginationComponent handleGetBooks={handleGetBooks} activePage={activePage} setActivePage={setActivePage}
                             allPage={PagesCount}/>}
    </Container>
  )
}