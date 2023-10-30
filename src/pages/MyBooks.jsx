import {useSelector} from "react-redux";
import {getBookByID} from "../services/apiGoogleBooks.js";
import BookCart from "../components/BookCart.jsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import BookLoader from "../components/BookLoader.jsx";
import toast from "react-hot-toast";
import {NavLink} from "react-router-dom";
import {SlBasket} from "react-icons/sl";
import {MdOutlineAddShoppingCart} from "react-icons/md";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
`;
const ResultContainer = styled.div`
  margin-top: 5.4rem;
  margin-bottom: 3.2rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5.4rem;
  @media (max-width: 400px) {
    color: red;
  }
`;
const P = styled.p`
  font-size: ${props => props.size ? props.size : '2.4rem'};
  color: ${props => props.color};
  @media (max-width: 400px) {
    &:first-child {
      font-size: 2.2rem;
    }
    &:nth-child(2) {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 350px) {
    &:first-child {
      font-size: 2rem;
    }
    &:nth-child(2) {
      font-size: 1.4rem;
    }
  }
`;
const NoBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  
`;
const StyledNavLink = styled(NavLink)`
  margin-top: 6.4rem;
  & svg {
    font-size: 15rem;
    color: var(--color-grey-3);
  }
`;


export default function MyBooks() {
  document.title ='My Books';


  const {books} = useSelector(state => state.user);
  const [booksData, setBooksData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const filteredBooks = books.filter(item => item !== 'firstBook');



  useEffect(() => {
    setIsLoading(true);

    const fetchPromises = filteredBooks.map(book => getBookByID(book));

    Promise.all(fetchPromises)
      .then(dataArray => {
        if(dataArray.length >= 1) {
          console.log(dataArray)
          setBooksData(dataArray);
        }

        setIsLoading(false);
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false);
        toast.error(error.message)
      });
  }, []);


  return (
    <Container>
      {isLoading && <BookLoader marginTop={'20rem'}/>}
      <ResultContainer>
        {!isLoading && filteredBooks.length > 0 && <P color={'var(--color-grey-2)'}>You have {filteredBooks.length} books in your list😉</P>}
        {!isLoading && filteredBooks.length === 0 && 
          <NoBookContainer>
            <P color={'var(--color-grey-2)'}>You don't have any book in your list ☹️</P>
            <P color={'var(--color-grey-4)'} size={'1.8rem'}>Go to search books and add some books to your list👇</P>
            <StyledNavLink to={'/searchBooks'}><MdOutlineAddShoppingCart/></StyledNavLink>
          </NoBookContainer>
        }
        {
          booksData?.map((item, index) =>
            <BookCart key={index} data={item}/>
          )
        }
      </ResultContainer>
    </Container>
  )
}