import React from 'react';
import styled from 'styled-components';
import preloaderSvg from '../../assets/preloader.svg';

const Image = styled.img`
  width: 30px;
  height: 30px;
`;

const Preloader = () => {
    return (
        <div>
            <Image src={preloaderSvg} alt="Loading..."/>
        </div>
    );
};

export default Preloader;
