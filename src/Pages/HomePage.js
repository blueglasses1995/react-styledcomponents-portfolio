import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import Particle from '../Components/Particle';
import SocialIcons from '../Components/SocialIcons';
import { init } from 'ityped'

function HomePage(props) {
    const [animatedStrings, setAnimatedString] = useState([ props.introduction.name, props.introduction.description ])
    const [isFirstRendering, setIsFirstRendering] = useState(true)

    useEffect(() => {
        const nameElement = document.querySelector('#name')
        if (isFirstRendering === true) {
            init(nameElement, { showCursor: false, strings: animatedStrings })
            setIsFirstRendering(false);
        }
    }, [isFirstRendering, animatedStrings])

    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>{ props.introduction.greeting }<span id="name"></span></h1>
                <p>
                    { props.introduction.detailedIntroduction }
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
