import React from 'react';
import styled from 'styled-components';
import {fonts} from "../../../styles/variables";

import searchIcon from "../../../assets/images/search.svg";

const Input = styled.input`
  width: 100px;
  font-family: ${fonts.Roboto};
  font-size: 1.2rem;
  background-color: transparent;
  border: none;
  outline: none;
  padding-left: 5px;
`;

const Search = () => {
    const [search, setSearch] = React.useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert()
        }
    }
    const onChange = (event) => {
        setSearch(event.value);
    }

    return (
        <div>
            <img src={searchIcon} alt="Search"/>
            <Input type="text"
                   placeholder="Search for places...."
                   value={search}
                   onChange={onChange}
                   onKeyPress={handleKeyDown}/>
        </div>
    );
};

export default Search;
