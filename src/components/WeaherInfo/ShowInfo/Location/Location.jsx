import React from 'react';
import styled from "styled-components";

import AddToFavoriteButton from "./AddToFavoriteButton/AddToFavoriteButton";

import {fonts} from "../../../../styles/variables";

const LocationWrapper = styled.div`
  font-family: ${fonts.Roboto};
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-top: 30px;
  position: absolute;
  bottom: 20px;

  span.country {
    text-transform: uppercase;
    margin-right: 10px;
    margin-left: 3px;
  }
`;

const Location = ({cityInfo, isFavorite, toggleFavorite}) => {
    return (
        <LocationWrapper>
            <span>{cityInfo.name + ','}</span>
            <span className="country">{cityInfo.country}</span>
            <AddToFavoriteButton isFavorite={isFavorite} cityID={cityInfo.id}
                                 toggleFavorite={toggleFavorite}/>
        </LocationWrapper>
    );
};

export default Location;
