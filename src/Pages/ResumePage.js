import React from 'react';
import Skills from '../Components/Skills';
import { MainLayout} from '../styles/Layouts';
import Resume from '../Components/Resume';

function ResumePage(props) {
    return (
        <MainLayout>
            <Skills skills = {props.resume.skills} />
            <Resume resume = {props.resume} />
        </MainLayout>
    )
}

export default ResumePage
