import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { AiFillHeart, AiOutlineLike } from 'react-icons/ai';

import newLike from '../../actionCreators/likeActions';

const LikeButton = () => {
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
        dispatch(createLike());
        handleClick();
      }}
    >
      {like ? <AiFillHeart /> : <AiOutlineLike />}
    </button>
  );
};

export default LikeButton;
