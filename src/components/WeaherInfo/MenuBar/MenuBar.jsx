import React from 'react';
import styled from 'styled-components';

import BarIcon from '../../../assets/images/menu-bar.svg'

const Bar = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

const MenuBar = ({className, setMustShowFavorite, mustShowFavorite}) => {
    return (
        <Bar className={className} onClick={() => setMustShowFavorite(!mustShowFavorite)}>
            <img src={BarIcon} alt="Open favorites"/>
        </Bar>
    );
};

export default MenuBar;
