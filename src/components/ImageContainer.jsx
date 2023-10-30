import styled from "styled-components";

const Img = styled.img`
  width: 60%;
  box-shadow: 10px 10px 10px 2px rgba(0, 0, 0, 0.3);
  @media (max-width: 1350px) {
    width: 70%;
  }
  @media (max-width: 900px) {
    width: 60%;
    box-shadow: 10px 10px 10px 2px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 450px) {
    width: 70%;
  }
`;

export default function ImageContainer({link}) {

  return (
    <>
      {link ? <Img src={link} alt={'book photo'}/> : <h1>No Book Image</h1>}
    </>
  )
}