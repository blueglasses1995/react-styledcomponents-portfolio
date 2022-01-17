import { MoveToInbox } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.png';
import CvButton from './CvButton';

function ImageSection(props) {
    return (
        <ImageSectionStyled>
            <div className='left-content'
                data-aos="fade-left"
                data-aos-offset="0"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <img src={resume} alt=""/>
            </div>
            <div className="right-content"
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <h4>{ props.introduction.greeting }<span>{ props.introduction.name }</span></h4>
                <p className="paragraph">
                    { props.introduction.detailedDescription }
                </p>
                <div className="about-info">
                    <div class="row">
                        <div className="info-title">
                            <p>{ props.introduction.nameTag }</p>
                        </div>
                        <div className="info">
                            <p>: { props.introduction.name }</p>
                        </div>
                    </div>
                    <div class="row">
                        <div className="info-title">
                            <p>{ props.introduction.ageTag }</p>
                        </div>
                        <div className="info">
                            <p>: { props.introduction.age }</p>
                        </div>
                    </div>
                    <div class="row">
                        <div className="info-title">
                            <p>{ props.introduction.nationalityTag } </p>
                        </div>
                        <div className="info">
                            <p>: { props.introduction.nationality } </p>
                        </div>
                    </div>
                    <div class="row">
                        <div className="info-title">
                            <p>{ props.introduction.languageTag }</p>
                        </div>
                        <div className="info">
                            <p>: { props.introduction.language } </p>
                        </div>
                    </div>
                    <div class="row">
                        <div className="info-title">
                            <p>{ props.introduction.locationTag }</p>
                        </div>
                        <div className="info">
                            <p>: { props.introduction.location }</p>
                        </div>
                    </div>
                    <div class="row">
                        <div className="info-title">
                            <p>{ props.introduction.serviceTag }</p>
                        </div>
                        <div className="info">
                            <p>: { props.introduction.service }</p>
                        </div>
                    </div>
                    <div class="row">
                        <div className="info-title">
                            <p>{ props.introduction.hobbyTag }</p>
                        </div>
                        <div className="info">
                            <p>: { props.introduction.hobby }</p>
                        </div>
                    </div>                    
                </div>
                <CvButton title={props.introduction.cvTag} />
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
            padding-bottom: 1.4rem;
            .row {
                display: flex;
                .info-title{
                    padding-right: 1rem;
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
    }
`;
export default ImageSection;
