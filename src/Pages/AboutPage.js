import React from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';
import ServicesSection from '../Components/ServicesSection';
import ReviewsSection from '../Components/ReviewsSetion';

function AboutPage(props) {
    return (
        <MainLayout>
            <AboutStyled >
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection introduction={props.introduction}  />
                <ServicesSection services={props.introduction.services}  />
                <ReviewsSection reviews={props.introduction.reviews}  />
            </AboutStyled >
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage
