import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

import { AiFillHeart, AiOutlineLike } from 'react-icons/ai';

import newLike from '../../actionCreators/likeActions';
import { checkUser } from '../../actionCreators/userActions';

const LikeButton = props => {
  const dispatch = useDispatch();
  const { createLike } = newLike;
  const [like, setLike] = useState(false);
  const userLike = useSelector(state => state.users.likes);
  const { id } = props;

  // console.log(Object.values(userLike).filter(el => el.id === id));

  if (!userLike) {
    return '';
  }

  const handleClick = () => {
    setLike(!like);
  };

  const LikeIcon = () => {
    if (Object.values(userLike).filter(el => el.id === id)) {
      return <AiFillHeart />;
    }
    return <AiOutlineLike />;
  };
  return (
    <button
      type="button"
      className="outline-none"
      onClick={() => {
        dispatch(createLike(id));
        dispatch(checkUser());
        handleClick();
      }}
    >
      <LikeIcon />
    </button>
  );
};

LikeButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default LikeButton;
