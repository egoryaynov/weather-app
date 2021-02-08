import React from 'react';
import styled from 'styled-components';

import star from '../../assets/star.svg';
import filledStar from '../../assets/filled-star.svg';

const Icon = styled.img`
  width: 18px;
  height: 17px;
`;

const Star = ({isFavorite}) => {
    return (
        <>
            {isFavorite
                ? <Icon src={filledStar} alt='Is favorite'/>
                : <Icon src={star} alt='Not favorite'/>}
        </>
    );
};

export default Star;
