import styled from "styled-components";
import {useState} from "react";
import {useSelector} from "react-redux";

const P = styled.p`
  font-weight: 400;
  font-size: 1.8rem;
  color: var(--color-grey-2);
  @media (max-width: 450px) {
    font-size: 1.4rem;
  }
`;
const ShowMore = styled.button`
  background-color: transparent;
  border: none;
  color: var(--color-primary-tint-2);
  
  &:hover {
    text-decoration: underline;
  }
`;
const HashtagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  //gap: 3.2rem;
  
  row-gap: 0.8rem;
  column-gap: 3.2rem;

  flex-wrap: wrap;
  margin-top: 3.2rem;
`;
const Hashtag = styled.a`

`;



export default function AboutBookContainer ({description, categories}) {
  const [wordCount, setWordCount] = useState(10);
  const totalWordCount = description?.split(' ').length;
  const showDescription = description?.split(' ').filter((item, index) => index < wordCount).join(' ');

  function removeHtmlTags(inputString) {
    return inputString?.replace(/<\/?[^>]+(>|$)/g, "").replace(/—/g, "");
  }
  function getUniqueWordsFromArray(inputArray) {
    const uniqueWords = new Set();

    inputArray?.forEach((str) => {
      const words = str.split(" / ");
      words.forEach((word) => {
        uniqueWords.add(word);
      });
    });

    return [...uniqueWords];
  }


  function handleShowMore () {
    setWordCount(totalWordCount);
  }
  function handleShowLess () {
    setWordCount(10);
  }

  return (
    <>
      <h2>About this eBook → </h2>
      {description && <P>
        {removeHtmlTags(showDescription)} {wordCount < totalWordCount && '...'}{wordCount < totalWordCount ? <ShowMore onClick={handleShowMore}>Show More</ShowMore> : <ShowMore onClick={handleShowLess}>Show Less</ShowMore>}
      </P>}
      <HashtagContainer>
        {
          getUniqueWordsFromArray(categories).map((item, index) => <Hashtag href={'#'} key={index}>#{item}</Hashtag>)
        }

        <Hashtag href={'#'}></Hashtag>
      </HashtagContainer>
    </>
  )
}