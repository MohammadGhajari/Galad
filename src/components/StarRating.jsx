import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {setOneRates} from "../StateManagement/UserSlice.js";

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;
const P = styled.p`
  line-height: 1;
  margin: 0;
  color: var(--color-primary);
  font-size: 2rem;
`;
const StarContainer = styled.div`
  display: flex;
`;
const StarElem = styled.span`
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  & svg {
    font-size: 3.2rem;
    color: var(--color-primary);
  }
`;

StarRating.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  messages: PropTypes.array,
  className: PropTypes.string,
  onSetRating: PropTypes.func,
};

export default function StarRating({defaultRating = 0, onSetRating, setIsRatingStart, bookID}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const {rates} = useSelector(state => state.user);

  const dispatch = useDispatch();

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
    setIsRatingStart(false);
    dispatch(setOneRates([bookID, rating]));
  }

  return (
    <RatingContainer>
      <StarContainer >
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
          />
        ))}
      </StarContainer>
    </RatingContainer>
  );
}

function Star({ onRate, full, onHoverIn, onHoverOut }) {
  return (
    <StarElem
      role="button"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <AiFillStar/>
      ) : (
        <AiOutlineStar/>
      )}
    </StarElem>
  );
}
