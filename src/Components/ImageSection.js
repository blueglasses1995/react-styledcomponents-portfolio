import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.png';
import PrimaryButton from './PrimaryButton';

function ImageSection(props) {
    return (
        <ImageSectionStyled>
            {/* console.log(props) */}
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>{ props.introduction.greeting }<span>{ props.introduction.name }</span></h4>
                <p className="paragraph">
                    { props.introduction.detailedDescription }
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>{ props.introduction.nameTag }</p>
                        <p>{ props.introduction.ageTag }</p>
                        <p>{ props.introduction.nationalityTag } </p>
                        <p>{ props.introduction.languageTag }</p>
                        <p>{ props.introduction.locationTag }</p>
                        <p>{ props.introduction.serviceTag }</p>
                        <p>{ props.introduction.hobbyTag }</p>
                    </div>
                    <div className="info">
                        <p>: { props.introduction.name }</p>
                        <p>: { props.introduction.age }</p>
                        <p>: { props.introduction.nationality } </p>
                        <p>: { props.introduction.language } </p>
                        <p>: { props.introduction.location }</p>
                        <p>: { props.introduction.service }</p>
                        <p>{ props.introduction.hobby }</p>
                    </div>
                </div>
                <PrimaryButton title={props.introduction.cvTag} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
