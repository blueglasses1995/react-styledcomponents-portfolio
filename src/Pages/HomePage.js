import React from 'react'
import styled from 'styled-components';
import Particle from '../Components/Particle';
import SocialIcons from '../Components/SocialIcons';

function HomePage(props) {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>{ props.introduction.greeting }<span>{ props.introduction.name }</span></h1>
                <p>
                    { props.introduction.description }
                </p>
                <SocialIcons />
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
    }
`;

export default HomePage;
