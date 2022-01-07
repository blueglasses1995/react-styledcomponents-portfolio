import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume(props) {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={ props.resume.workExpTag } />
                </div>
                <div className="resume-content">
                    { props.resume.workExps.map(workExp => {
                        return (
                            <ResumeItem 
                                year={workExp.year} 
                                title={workExp.title}
                                subTitle={workExp.company}
                                text={workExp.description} 
                            />
                        )
                    })}
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={ props.resume.eduTag} />
                </div>
                <div className="resume-content ">
                { props.resume.eduQuals.map(eduQual => {
                        return (
                            <ResumeItem 
                                year={eduQual.year} 
                                title={eduQual.title}
                                subTitle={eduQual.school}
                                text={eduQual.description} 
                            />
                        )
                    })}
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
