import styled from "styled-components";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {useState} from "react";

const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;
const Star = styled.button`
  background-color: transparent;
  border: none;
  & svg {
    font-size: 2.6rem;
    color: var(--color-primary-shade-2);
  }
  &:hover svg {
    color: red;
  }
`;

export default function Rating () {
  const [rate, setRate] = useState(0);

  return (
    <RatingContainer>
      {
        Array.from({length: 5}).map((_, index) =>
          <Star key={index} onMouseEnter={() => setRate(index)}>
            <AiOutlineStar/>
          </Star>
        )
      }
    </RatingContainer>
  )
}