import React from 'react';
import styled from 'styled-components';
import {fonts} from "../../../styles/variables";

import searchIcon from "../../../assets/images/search.svg";
import {setCurrentWeatherByCity} from "../../../redux/reducers/currentWeatherReducer";
import {useDispatch} from "react-redux";

const Input = styled.input`
  width: 110px;
  font-family: ${fonts.Roboto};
  font-size: 1.2rem;
  background-color: transparent;
  border: none;
  outline: none;
  padding-left: 5px;
`;

const Search = () => {
    const [search, setSearch] = React.useState('');
    const dispatch = useDispatch();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            dispatch(setCurrentWeatherByCity(search));
        }
    }
    const onChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div>
            <img src={searchIcon} alt="Search"/>
            <Input type="text"
                   autofocus
                   placeholder="Search for places...."
                   value={search}
                   onChange={onChange}
                   onKeyPress={handleKeyDown}/>
        </div>
    );
};

export default Search;
