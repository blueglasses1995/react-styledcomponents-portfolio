import skills from "./skills"

import crypto_dashboard from '../img/portImages/crypto_dashboard.png';
import landing_page from '../img/portImages/landing_page.png';
import portfolio_with_courses from '../img/portImages/portfolio_with_courses.png';
import portfolio_yinyang from '../img/portImages/portfolio_yinyang.png';
import portfolio from '../img/portImages/portfolio.png';
import shopify_liquor from '../img/portImages/shopify_liquor.png';
import smart_contract from '../img/portImages/smart_contract.png';
import video_chat from '../img/portImages/video_chat.png';
import wordpress_blog from '../img/portImages/wordpress_blog.png';
import wordpress_corporate_site from '../img/portImages/wordpress_corporate_site.png';
import shopify_fashion from '../img/portImages/shopify_fashion.png';

import design from '../img/design.svg';
import webdev from '../img/web-dev.svg';
import intelligence from '../img/intelligence.svg';

const chineseContent = {
    font: "'Inconsolata', 'Noto Serif SC'",
    introduction: {
        greeting: "嗨, 我是 ",
        name: "松熊利树",
        description: "一名来自东京现居曼谷的自由软件工程师。",
        detailedIntroduction: "为了满足客户的需求，我对学习最新的技术、市场渠道和客户业务充满热情。",
        nameTag: "全名",
        ageTag: "年龄",
        nationalityTag: "国籍",
        languageTag: "语言",
        locationTag: "所在地",
        serviceTag: "服务",
        hobbyTag: "爱好",
        cvTag: "下载CV",
        age: "26岁",
        nationality: "日本",
        language: "日语、英语、中文",
        location: "曼谷",
        service: "自由工程师",
        hobby: "吉他弹唱，学习哲学、心理学、政治学，吃辣",
        services: [
            {
                image: design,
                title: '网页设计',
                paragraph: "设计网站结构，追求更佳的客户体验"
            },
            {
                image: webdev,
                title: '前端开发',
                paragraph: "代码结构优美的用户界面"
            },
            {
                image: webdev,
                title: '后端开发',
                paragraph: "专注于云提供的功能的业务逻辑"
            },
            {
                image: intelligence,
                title: '数据工程',
                paragraph: "设计、存储、收集、整理和分析数据"
            },
            {
                image: intelligence,
                title: '区块链开发',
                paragraph: "通过区块链技术添加web应用程序的安全配置"
            },
        ],
        reviews: [
            {
                author: "H. F.",
                text: "非常热衷于学习新事物，专业又负责"
            },
            {
                author: "T. M.",
                text: "重视与客户的互动交流，能与客户建立信任关系"
            },
            {
                author: "T. T.",
                text: "他很清楚作为程序员，了解客户的业务是非常重要的"
            },
            {
                author: "Y. S.",
                text: "熟悉从设计、前端到后端以及数据采掘等各种技术"
            },
        ],
    },
    resume: {
        skills: skills, 
        workExpTag: "工作经历",
        eduTag: "学习经历",
        workExps: [
            {
                year: "2021年-",
                title: "服务器端、前端和数据工程师",
                company: "自由工程师",
                description: "",
            },
            {
                year: "2020年-2021年",
                title: "数据工程师",
                company: "Bitkey Inc.",
                description: "",
            },
            {
                year: "2019年-2020年",
                title: "服务器端工程师",
                company: "Simplex Inc.",
                description: "",
            },
            {
                year: "2018年-2019年",
                title: "数据工程师",
                company: "Gruff, inc.",
                description: "",
            },
        ],
        eduQuals: [
            {
                year: "2016年-2017年",
                title: "政治学系学生",
                school: "多伦多大学",
                description: "",
            },
            {
                year: "2016年",
                title: "国际关系学系学生",
                school: "剑桥大学",
                description: "",
            },
            {
                year: "2014年-2019年",
                title: "亚洲研究学系学生",
                school: "东京大学",
                description: "",
            },
            {
                year: "2011年-2014年",
                title: "",
                school: "麻布高等学校",
                description: "",
            },
            {
                year: "2008年-2011年",
                title: "",
                school: "麻布中学校",
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
            title: '带有在线课程的作品网站',
            text: '您可以购买课程并下载简历。'
        },
        {
            id: 2,
            technologies: ['HTML','CSS', 'React.js'],
            image: portfolio_yinyang,
            link: 'https://react-self-introduction.netlify.app/',
            github: 'https://github.com/blueglasses1995/react-portfolio',
            title: '全动画作品网站',
            text: '您可以移动到站点边缘带有按钮的任何页面。'
        },
        {
            id: 3,
            technologies: ['HTML','CSS', 'React.js', 'styled-components'],
            image: portfolio,
            link: 'https://toshiki-matsukuma.netlify.app/#/',
            github: 'https://github.com/blueglasses1995/react-styledcomponents-portfolio',
            title: '带有博客特性的作品网站',
            text: '您可以检查存储在名为contentful的headless CMS中的帖子。'
        },
        {
            id: 4,
            technologies: ['HTML','CSS', 'Typescript', 'React.js', 'Next.js'],
            image: smart_contract,
            link: 'https://nextjs-smart-contracts.vercel.app/',
            github: 'https://github.com/blueglasses1995/nextjs-smart-contracts',
            title: '具有智能合约认证的电商站点',
            text: '您可以通过智能合约身份验证安全地登录和付款。'
        },
        {
            id: 5,
            technologies: ['HTML','CSS', 'React.js', 'Next.js', "Tailwind CSS"],
            image: crypto_dashboard,
            link: 'https://next-tailwind-crypto-dashboard.vercel.app/',
            github: 'https://github.com/blueglasses1995/next-tailwind-crypto-dashboard',
            title: '加密货币仪表板',
            text: '您可以在一个屏幕上查看加密市场指数。'
        },
        {
            id: 6,
            technologies: ['HTML','CSS'],
            image: landing_page,
            link: 'https://blueglasses1995.github.io/landing-page-for-liquir-firm/',
            github: 'https://github.com/blueglasses1995/landing-page-for-liquir-firm',
            title: '具有简单设计和动画的落地页',
            text: '您可以在一个网页上访问一家公司的所有信息。'
        },
        {
            id: 7,
            technologies: ['HTML','CSS', 'React.js'],
            image: video_chat,
            link: 'https://cky8ztju485549qojnzlqz4pfq-j6gaht0fd-blueglasses1995.vercel.app/create',
            github: 'https://github.com/blueglasses1995/react-chat-room',
            title: '私人视频通话',
            text: '您可以与持有通行密码的用户进行私人通话。'
        },
        {
            id: 8,
            technologies: ['HTML','CSS', 'Typescript', 'React.js', 'Next.js', 'Shopify'],
            image: shopify_liquor,
            link: 'https://next-typescript-shopify-lbfu0h8zt-blueglasses1995.vercel.app/',
            github: 'https://github.com/blueglasses1995/next-typescript-shopify',
            title: 'shopify后端电商网站',
            text: '您可以以多种付款方式选购任意商品。'
        },
        {
            id: 9,
            technologies: ['HTML','CSS', 'javascript', 'PHP', 'Wordpress'],
            image: wordpress_corporate_site,
            link: 'http://globalestateglobalestateglobalestate.com/',
            github: 'https://github.com/blueglasses1995/wordpress-corporate-site',
            title: 'Wordpress附带管理者界面的企业网站',
            text: '日志和企业信息可以在的Wordpress的管理者界面进行管理。'
        },
        {
            id: 10,
            technologies: ['HTML','CSS', 'javascript', 'PHP', 'Wordpress'],
            image: wordpress_blog,
            link: 'http://globalestateglobalestateglobalestate.com/tea-break/',
            github: 'https://github.com/blueglasses1995/wordpress-blog',
            title: 'Wordpress附带管理者界面的博客',
            text: '博客日志可以在Wordpress的管理者界面进行管理。'
        },
        {
            id: 11,
            technologies: ['HTML','CSS', 'javascript', 'Liquid', 'Shopify'],
            image: shopify_fashion,
            link: 'https://vomiting-bird-outdated-fashion.myshopify.com/',
            github: 'https://github.com/blueglasses1995/liquid-javascript-shopify',
            title: 'shopify前端与后端电商网站',
            text: '您可以以多种付款方式选购任意商品。'
        },
    ], 
    contact: {
        title: "与我联系",
        nameTag: "输入您的姓名",
        emailTag: "输入您的邮件名",
        subjectTag: "输入您的主题",
        messageTag: "输入您的正文",
        sendTag: "发送邮件",
        myPhoneTag: "电话",
        myEmailTag: "邮件",
        myAddressTag: "地址",
        address: "Soi Sukhumvit 11, Khlong Toei Nuea, Watthana, Bangkok, Thailand"
    }
}

export default chineseContent