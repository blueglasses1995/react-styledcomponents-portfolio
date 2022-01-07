import React from 'react'
import styled from 'styled-components';

function ProgressBar({title, width, text, library, value}) {
    return (
        <ProgressBarStyled
        data-aos={value % 2 === 0 ? "flip-right" : "flip-left"}
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="true"
        data-aos-anchor-placement="bottom-bottom"
        >
            <h6>{title}</h6>
            <div className="progress-bar">
                <p>{text}</p>
                <div className="progress">
                    <span style={{width: width}}></span>
                </div>
            </div>
            <div>{library}</div>
        </ProgressBarStyled>
    )
}

const ProgressBarStyled = styled.div`
    .progress-bar{
        display: flex;
        align-items: center;
        p{
            padding-right: 1.1rem;
        }
        .progress{
            position: relative;
            width: 100%;
            height: .4rem;
            background-color: var(--border-color);
            span{
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
                background-color: var(--primary-color)
            }
        }
    }
`;

export default ProgressBar;
