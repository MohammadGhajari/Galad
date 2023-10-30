import styled from "styled-components";

const Title = styled.h1`
  font-size: 4.8rem;
  color: var(--color-dark);
  @media (max-width: 500px) {
    font-size: 3.6rem;
  }
`;
const AuthDateContainer = styled.div`
  & h4 {
    color: var(--color-primary-tint-1);
    font-weight: 400;
  }
  & h5 {
    font-size: 1.2rem;
    color: var(--color-grey-4);
    font-weight: 400;

  }
`;


export default function TitleContainer({title, publisher, publishDate, authors, country}) {

  let titleWordCount = 15;

  if(window.innerWidth < 660)
    titleWordCount = 3
  title = title?.split(' ')?.filter((item, i) => i < titleWordCount)?.join(' ');

  return (
    <>
      <Title>{title}</Title>
      <AuthDateContainer>
        <h4>
          {authors?.join(', ')}
        </h4>
        <h5>{publishDate || ''} · {publisher || ''} {country || ''}</h5>
      </AuthDateContainer>
    </>
  )
}