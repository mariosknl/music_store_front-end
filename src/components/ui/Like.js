import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { AiFillHeart, AiOutlineLike } from 'react-icons/ai';

import newLike from '../../actionCreators/likeActions';

const LikeButton = props => {
  const dispatch = useDispatch();
  const { createLike } = newLike;
  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike(!like);
  };
  return (
    <button
      type="button"
      className="outline-none"
      onClick={() => {
        dispatch(createLike(props.id));
        handleClick();
      }}
    >
      {like ? <AiFillHeart /> : <AiOutlineLike />}
    </button>
  );
};

LikeButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default LikeButton;
