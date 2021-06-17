import React from 'react';
import NavBar from '../NavBar';
import CenterContainer from '../CenterContainer';
import FooterContainer from '../FooterContainer';
import ContentContainer from '../ContentContainer';


function HomePage() {
    return (
        <>
            <NavBar />
            <CenterContainer />
            <ContentContainer />
            <FooterContainer />
        </>
    )
}

export default HomePage;
