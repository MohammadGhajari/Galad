import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getBookByID} from "../services/apiGoogleBooks.js";
import styled from "styled-components";
import Main from "../components/Main.jsx";
import {BackBtn} from "../components/GeneralComponents.jsx";
import {IoChevronBack} from "react-icons/io5";
import {AiOutlineBook} from "react-icons/ai";
import {NavBtn} from "../styles/general.js";
import InfoCotainer from "../components/InfoCotainer.jsx";
import ImageContainer from "../components/ImageContainer.jsx";
import AboutBookContainer from "../components/AboutBookContainer.jsx";
import TitleContainer from "../components/TitleContainer.jsx";
import BookLoader from "../components/BookLoader.jsx";
import {useSelector} from "react-redux";


const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${props => props.alignitem || 'flex-start'};
  margin-bottom: 5.4rem;
`;
const BookContainer = styled.div`
  margin-top: 3.2rem;
  align-self: center;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  width: 80%;
  @media (max-width: 1150px) {
    width: 90%;
  }
  @media (max-width: 900px) {
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 1fr 2fr 2fr;
  }
`;
const TitleContainerElem = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  @media (max-width: 900px) {
    grid-column: 1/3;
  }
`;
const InfoContainerElem = styled.div`
  grid-row: 2/3;
  grid-column: 1/2;
  margin-top: 4.8rem;

  display: flex;
  flex-direction: column;
  gap: 6.4rem;

  @media (max-width: 900px) {
    grid-column: 1/3;
    grid-row: 3/4;
  }
`;
const ImgContainerElem = styled.div`
  grid-row: 1/3;
  grid-column: 2/3;
  display: flex;
  justify-content: center;
  align-items: center;

  
  border-radius: 50%;
  width: 120%;
  background-color: var(--color-bubble-2);
  box-shadow: var(--shadow-me-md);

  @media (max-width: 1150px) {
    height: 90%;
    align-self: center;
  }
  @media (max-width: 980px) {
    height: 70%;
  }
  @media (max-width: 900px) {
    grid-column: 1/3;
    grid-row: 2/3;
    justify-self: center;
    width: 45%;
    height: 100%;
    margin-top: 4.8rem;
    
  }
  @media (max-width: 450px) {
    width: 60%;
  }

`;
const AboutBookContainerElem = styled.div`
  grid-row: 3/4;
  grid-column: 1/3;
  margin-top: 4.8rem;
  color: var(--color-grey-2);
  
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 900px) {
    grid-column: 1/3;
    grid-row: 4/5;
  }
`;

export default function BookDetails() {
  const {bookID} = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getBookByID(bookID).then(data => {
      setBook(data)
      setIsLoading(false);
      console.log(data)
    }).catch(er => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? <MainContainer alignitem={'center'}><BookLoader marginTop={'6.4rem'}/></MainContainer> :
        <MainContainer>
          <BackBtn onClick={() => navigation(-1)}><IoChevronBack/>Back</BackBtn>
          <BookContainer>
            <TitleContainerElem>
              <TitleContainer title={book.volumeInfo?.title} authors={book.volumeInfo?.authors}
                              publishDate={book.volumeInfo.publishedDate} publisher={book.volumeInfo.publisher}
                              country={book.accessInfo.country}/>
            </TitleContainerElem>
            <InfoContainerElem>
              <InfoCotainer buyLink={book.saleInfo.buyLink} isEbook={book.saleInfo.isEbook}
                            amount={book.saleInfo?.listPrice?.amount} currency={book.saleInfo?.listPrice?.currencyCode}
                            avgRating={book.volumeInfo.averageRating} reviews={book.volumeInfo.ratingCount}
                            pageCount={book.volumeInfo.pageCount} language={book.volumeInfo.language}
                            country={book.accessInfo.country} id={bookID}/>
            </InfoContainerElem>
            <ImgContainerElem>
              <ImageContainer link={book.volumeInfo?.imageLinks?.thumbnail}/>
            </ImgContainerElem>
            <AboutBookContainerElem>
              <AboutBookContainer description={book.volumeInfo.description} categories={book.volumeInfo.categories}/>
            </AboutBookContainerElem>
          </BookContainer>
        </MainContainer>}
    </>
  )
}


// country //book.accessInfo.country  +
// buyLink //book.saleInfo.buyLink  ----------
// Ebook //book.saleInfo.isEbook  -----------
// listPrice{amount, currency} // book.saleInfo.listPrice.amount  -----------
// authors //book.volumeInfo.authors------------
// rating //book.volumeInfo.averageRating  -------
// categories[] //book.volumeInfo.categories-------
// descriptions //book.volumeInfo.description---------
// dimensions{height, width} //book.volumeInfo.dimensions.height-------
// imageLink{med} //book.volumeInfo.imageLink.thumbnail   --------
// language //book.volumeInfo.language   -------
// pageCount //book.volumeInfo/pageCount ---------
// publishDate //book.volumeInfo.publishedDate   ---------
// publisher //book.volumeInfo.publisher   ---------
// ratingCount //book.volumeInfo.ratingCount  ------
// title //book.volumeInfo.title   -----------