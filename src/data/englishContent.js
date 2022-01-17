import skills from "./skills"

import crypto_dashboard from '../img/portImages/crypto_dashboard.png';
import landing_page from '../img/portImages/landing_page.png';
import portfolio_with_courses from '../img/portImages/portfolio_with_courses.png';
import portfolio_yinyang from '../img/portImages/portfolio_yinyang.png';
import portfolio from '../img/portImages/portfolio.png';
import shopify from '../img/portImages/shopify.png';
import smart_contract from '../img/portImages/smart_contract.png';
import video_chat from '../img/portImages/video_chat.png';
import wordpress_blog from '../img/portImages/wordpress_blog.png';
import wordpress_corporate_site from '../img/portImages/wordpress_corporate_site.png';

import design from '../img/design.svg';
import webdev from '../img/web-dev.svg';
import intelligence from '../img/intelligence.svg';

const englishContent = {
    font: 'Inconsolata',
    introduction: {
        greeting: "Hi, I'm ",
        name: "Toshiki Matsukuma",
        description: "A freelance software engineer from Tokyo based in Bangkok.",
        detailedIntroduction: "Be quite passionate about learning new technologies, market channels and clients' business in order to commit my duties.",
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
                paragraph: "Design the structure of websites in pursuit of better customer experience"
            },
            {
                image: webdev,
                title: 'Frontend Development',
                paragraph: "Code beautifullly structured user interfaces"
            },
            {
                image: webdev,
                title: 'Backend Engineering',
                paragraph: "Concentrate on business logic with functions offered by clouds"
            },
            {
                image: intelligence,
                title: 'Data Engineering',
                paragraph: "Design, store, collect, polish and analyze data"
            },
            {
                image: intelligence,
                title: 'Blockchain Engineering',
                paragraph: "Add secure configuration of web applications by blockchain technology"
            },
        ],
        reviews: [
            {
                author: "H. F.",
                text: "Quite passionate about learning new things and commiting his duty"
            },
            {
                author: "T. M.",
                text: "Put great importance on interactive communication and good relations"
            },
            {
                author: "T. T.",
                text: "Understand the fact that it is quite important for programmers to know clients' business"
            },
            {
                author: "Y. S.",
                text: "Knowledgable about wide range of technologies from design, frontend to backend and data mining"
            },
        ],
    },
    resume: {
        skills: skills, 
        workExpTag: "Working Experience",
        eduTag: "Educational Qualifications",
        workExps: [
            {
                year: "2021-",
                title: "Serverside, Frontend & Data Engineer",
                company: "Freelance",
                description: "",
            },
            {
                year: "2020-2021",
                title: "Data Engineer",
                company: "Bitkey Inc.",
                description: "",
            },
            {
                year: "2019-2020",
                title: "Server Side Engineer",
                company: "Simplex Inc.",
                description: "",
            },
            {
                year: "2018-2019",
                title: "Data Engineer",
                company: "Gruff, inc.",
                description: "",
            },
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
                year: "2008-2011",
                title: "",
                school: "Azabu Junior High School",
                description: "",
            },
        ]
    },
    portfolios: [
        {
            id: 1,
            technologies: ['HTML','CSS', 'Vue.js', 'Nuxt.js'],
            image: portfolio_with_courses,
            link: 'https://nuxt-promotion-app.herokuapp.com/',
            github: 'https://github.com/blueglasses1995/nuxt-promotion-app',
            title: 'Portfolio site with online courses',
            text: 'You can purchase courses and download a CV.'
        },
        {
            id: 2,
            technologies: ['HTML','CSS', 'React.js'],
            image: portfolio_yinyang,
            link: 'https://react-self-introduction.netlify.app/',
            github: 'https://github.com/blueglasses1995/react-portfolio',
            title: 'Fully animated portfolio site',
            text: 'You can move to any pages with buttons on the edges of the site.'
        },
        {
            id: 3,
            technologies: ['HTML','CSS', 'React.js', 'styled-components'],
            image: portfolio,
            link: 'https://toshiki-matsukuma.netlify.app/#/',
            github: 'https://github.com/blueglasses1995/react-styledcomponents-portfolio',
            title: 'Portfolio with blog features',
            text: 'You can check posts stored in a headless CMS called contentful.'
        },
        {
            id: 4,
            technologies: ['HTML','CSS', 'Typescript', 'React.js', 'Next.js'],
            image: smart_contract,
            link: 'https://nextjs-smart-contracts.vercel.app/',
            github: 'https://github.com/blueglasses1995/nextjs-smart-contracts',
            title: 'EC site with smart contract authentification',
            text: 'You can securely log in and make payment with smart contract authentification.'
        },
        {
            id: 5,
            technologies: ['HTML','CSS', 'React.js', 'Next.js', "Tailwind CSS"],
            image: crypto_dashboard,
            link: 'https://next-tailwind-crypto-dashboard.vercel.app/',
            github: 'https://github.com/blueglasses1995/next-tailwind-crypto-dashboard',
            title: 'Crypto Dashboard',
            text: 'You can check crypto market indexes on one screen.'
        },
        {
            id: 6,
            technologies: ['HTML','CSS'],
            image: landing_page,
            link: 'https://blueglasses1995.github.io/landing-page-for-liquir-firm/',
            github: 'https://github.com/blueglasses1995/landing-page-for-liquir-firm',
            title: 'Landing page with simple design and animation',
            text: 'You can reach all the information of one company on one web page.'
        },
        {
            id: 7,
            technologies: ['HTML','CSS', 'React.js'],
            image: video_chat,
            link: 'https://cky8ztju485549qojnzlqz4pfq-j6gaht0fd-blueglasses1995.vercel.app/create',
            github: 'https://github.com/blueglasses1995/react-chat-room',
            title: 'Private video chat',
            text: 'You can make a video call privately only with those with the enter key'
        },
        {
            id: 8,
            technologies: ['HTML','CSS', 'Typescript', 'React.js', 'Next.js'],
            image: shopify,
            link: 'https://next-typescript-shopify-lbfu0h8zt-blueglasses1995.vercel.app/',
            github: 'https://github.com/blueglasses1995/next-typescript-shopify',
            title: 'EC site with shopify backend',
            text: 'You can select and purchase any items with variety types of payment methods.'
        },
        {
            id: 9,
            technologies: ['HTML','CSS', 'javascript', 'PHP', 'Wordpress'],
            image: wordpress_corporate_site,
            link: 'http://globalestateglobalestateglobalestate.com/',
            github: 'https://github.com/blueglasses1995/wordpress-corporate-site',
            title: 'Corporate site with wordpress dashboard',
            text: 'You can manage posts and corporate infos on wordpress dashboard.'
        },
        {
            id: 10,
            technologies: ['HTML','CSS', 'javascript', 'PHP', 'Wordpress'],
            image: wordpress_blog,
            link: 'http://globalestateglobalestateglobalestate.com/tea-break/',
            github: 'https://github.com/blueglasses1995/wordpress-blog',
            title: 'blog site with wordpress dashboard',
            text: 'You can manage blog posts on wordpress dashboard.'
        },
    ], 
    contact: {
        title: "Get In Touch",
        nameTag: "Enter your name",
        emailTag: "Enter your email",
        subjectTag: "Enter your subject",
        messageTag: "Enter your message",
        sendTag: "Send Email",
        myPhoneTag: "Phone",
        myEmailTag: "Email",
        myAddressTag: "Address",
        address: "Soi Sukhumvit 11, Khlong Toei Nuea, Watthana, Bangkok, Thailand"
    }
}

export default englishContent