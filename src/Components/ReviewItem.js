import React from 'react'
import styled from 'styled-components';

function ReviewItem({text, author, value}) {
    return (
        <RevivewItemStyled 
            data-aos={value % 2 === 0 ? "flip-down" : "flip-up"}
            data-aos-offset="-200"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center">
            <p>{text}</p>
            <p>{author}</p>
        </RevivewItemStyled>
    )
}

const RevivewItemStyled = styled.div`
    padding: 2rem 1rem;
    border-left: 6px solid var(--border-color);
    background-color: var(--background-dark-grey);
    position: relative;
    width: 100%;
    &:not(:first-child){
        
    }
    &::after{
        content: "";
        position: absolute;
        left: 2rem;
        border-width: .8rem;
        top: 100%;
        border-style: solid;
        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);
    }
    p{
        padding: 1rem 0;
    }
`;

export default ReviewItem;
