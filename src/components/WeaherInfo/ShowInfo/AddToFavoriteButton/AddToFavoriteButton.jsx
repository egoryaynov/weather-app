import React from 'react';
import styled from 'styled-components';

import star from '../../../../assets/images/star.svg';
import filledStar from '../../../../assets/images/filled-star.svg';

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;
const Button = styled.button`
  width: 18px;
  height: 17px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

const AddToFavoriteButton = ({isFavorite, cityID, toggleFavorite}) => {
    return (
        <>
            <Button onClick={() => toggleFavorite(cityID)}>
                {isFavorite
                    ? <Icon src={filledStar} alt='Is favorite'/>
                    : <Icon src={star} alt='Not is favorite'/>}
            </Button>
        </>
    );
};

export default AddToFavoriteButton;
