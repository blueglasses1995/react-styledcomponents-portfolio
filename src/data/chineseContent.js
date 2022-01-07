import skills from "./skills"

import css1 from '../img/portImages/cv_css.png';
import css2 from '../img/portImages/ms.png';
import react1 from '../img/portImages/react_styled.png';
import img2 from '../img/portImages/maya-4.jpg';
import img3 from '../img/portImages/maya-3.jpg';

import blog1 from  '../img/blogs/blog1.svg';
import blog2 from  '../img/blogs/blog2.svg';
import blog3 from  '../img/blogs/blog3.svg';
import blog4 from  '../img/blogs/blog4.svg';

import design from '../img/design.svg';
import webdev from '../img/web-dev.svg';
import intelligence from '../img/intelligence.svg';

const englishContent = {
    font: "'Inconsolata', 'Ma Shan Zheng'",
    introduction: {
        greeting: "Hi, I'm ",
        name: "松熊 利树",
        description: "A freelance software engineer from Tokyo based in Bangkok. \n Fond of spicy Chinese cuisines and coding.",
        detailedDescription: "A freelance software engineer from Tokyo based in Bangkok. \n fond of spicy Chinese cuisines and coding.",
        nameTag: "Full Name",
        ageTag: "Age",
        nationalityTag: "Nationality",
        languageTag: "Language",
        locationTag: "Location",
        serviceTag: "Service",
        hobbyTag: "Hobby",
        cvTag: "Download CV",
        age: "26",
        nationality: "Japan",
        language: "Japanese, English, Chinese",
        location: "Bangkok",
        service: "Freelance",
        hobby: "Singing on the guitar, Learning philosophy & phychology & politics, Having spicy food",
        services: [
            {
                image: design,
                title: 'Web Design',
                paragraph: "Design the structure of websites"
            },
            {
                image: webdev,
                title: 'Frontend Development',
                paragraph: "Create applications"
            },
            {
                image: webdev,
                title: 'Backend Engineering',
                paragraph: "Create applications"
            },
            {
                image: intelligence,
                title: 'Data Engineering',
                paragraph: "design, store, collect, polish and analyze data"
            },
            {
                image: intelligence,
                title: 'Blockchain Engineering',
                paragraph: "Add secure configuration of web applications by blockchain technology"
            },
        ],
        reviews: [
            {
                author: "Guan Yiting",
                text: "Quite passionate about learning new things and commiting his duty"
            },
            {
                author: "Guan Qun",
                text: "Quite passionate about learning new things and commiting his duty"
            },
            {
                author: "Lin Yang",
                text: "Quite passionate about learning new things and commiting his duty"
            },
            {
                author: "Bai Jin",
                text: "Quite passionate about learning new things and commiting his duty"
            },
        ],
    },
    resume: {
        skills: skills, 
        workExpTag: "Working Experience",
        eduTag: "Educational Qualifications",
        workExps: [
            {
                year: "2018-2019",
                title: "Data Engineer",
                company: "Gruff, inc.",
                description: "",
            },
            {
                year: "2019-2020",
                title: "Server Side Engineer",
                company: "Simplex Inc.",
                description: "",
            },
            {
                year: "2020-2021",
                title: "Data Engineer",
                company: "Bitkey Inc.",
                description: "",
            },
            {
                year: "2021-",
                title: "Serverside, Frontend & Data Engineer",
                company: "Freelance",
                description: "",
            }
        ],
        eduQuals: [
            {
                year: "2016-2017",
                title: "Political Science student",
                school: "University of Toronto",
                description: "",
            },
            {
                year: "2016",
                title: "International Relations student",
                school: "Cambridge university",
                description: "",
            },
            {
                year: "2014-2019",
                title: "Asian Studies student",
                school: "The University of Tokyo",
                description: "",
            },
            {
                year: "2011-2014",
                title: "",
                school: "Azabu High School",
                description: "",
            },
            {
                year: "2008",
                title: "",
                school: "Azabu Junior High School",
                description: "",
            },
        ]
    },
    portfolios: [
        {
            id: 1,
            category: 'CSS',
            image: css1,
            link1: 'https://www.google.com',
            link2: 'https://www.google.com',
            title: 'Responsive Resume',
            text: 'Created with only HTML and CSS.'
        },
        {
            id: 2,
            category: 'Python',
            image: img3,
            link1: 'https://www.google.com',
            link2: 'https://www.google.com',
            title: 'How To Animate In Maya',
            text: 'Number one Animation Application'
        },
        {
            id: 3,
            category: 'Javascript',
            image: img3,
            link1: 'https://www.google.com',
            link2: 'https://www.google.com',
            title: 'How To Animate In Maya',
            text: 'Number one Animation Application'
        },
        {
            id: 4,
            category: 'Animation',
            image: img2,
            link1: 'https://www.google.com',
            link2: 'https://www.google.com',
            title: 'How To Use Blender',
            text: 'Free Animation Software'
        },
        {
            id: 5,
            category: 'Animation',
            image: img2,
            link1: 'https://www.google.com',
            link2: 'https://www.google.com',
            title: 'How To Use Blender',
            text: 'Free Animation Software'
        },
        {
            id: 6,
            category: 'React JS',
            image: react1,
            link1: 'https://www.google.com',
            link2: 'https://www.google.com',
            title: 'Responsive Portfolio Website',
            text: 'Created using different technologies such as Material UI, Styled-Components and more...'
        },
        {
            id: 7,
            category: 'CSS',
            image: css2,
            link1: 'https://www.google.com',
            link2: 'https://www.google.com',
            title: 'Microsoft Website Clone',
            text: 'Created using HTML and CSS'
        }
    ], 
}

export default englishContent