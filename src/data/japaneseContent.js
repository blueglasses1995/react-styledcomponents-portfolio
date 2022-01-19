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

const japaneseContent = {
    font: "'Inconsolata', 'Shippori Mincho B1'",
    introduction: {
        greeting: "どうも、私は",
        name: "松熊 利樹",
        description: "東京出身バンコク在住のフリーランスエンジニアです。",
        detailedIntroduction: "責務をまっとうするために新しい技術、マーケティングチャネル、クライアントのビジネスを理解することに情熱をささげています。",
        nameTag: "フルネーム",
        ageTag: "年齢",
        nationalityTag: "国籍",
        languageTag: "言語",
        locationTag: "居住地",
        serviceTag: "サービス",
        hobbyTag: "趣味",
        cvTag: "CVダウンロード",
        age: "26歳",
        nationality: "日本",
        language: "日本語、英語、中国語",
        location: "バンコク",
        service: "フリーランス",
        hobby: "ギター弾き語り、哲学・心理学・政治学を学ぶこと、辛い物を食べること",
        services: [
            {
                image: design,
                title: 'ウェブデザイン',
                paragraph: "よりよい顧客体験を求めてウェブサイトの構成をデザインする。"
            },
            {
                image: webdev,
                title: 'フロントエンド開発',
                paragraph: "美しく構成されたユーザー・インターフェースを実装する。"
            },
            {
                image: webdev,
                title: 'バックエンド開発',
                paragraph: "クラウドの機能を活用し、ビジネスロジックの実装に専念する。"
            },
            {
                image: intelligence,
                title: 'データエンジニアリング',
                paragraph: "データを設計し、貯蓄し、収集し、整形し、分析する。"
            },
            {
                image: intelligence,
                title: 'ブロックチェーン開発',
                paragraph: "ブロックチェーン技術により、Webアプリのセキュアな設定を可能にする。"
            },
        ],
        reviews: [
            {
                author: "H. F.",
                text: "新しいことを学ぶことと任務を全うすることに非常に情熱的である。"
            },
            {
                author: "T. M.",
                text: "双方向コミュニケーションと良い人間関係を重視しています。"
            },
            {
                author: "T. T.",
                text: "プログラマーにとってクライアントのビジネスを理解することが非常に重要であることを理解している。"
            },
            {
                author: "Y. S.",
                text: "デザイン、フロントエンドからバックエンド、データマイニングまで幅広い知識を持っている。"
            },
        ],
    },
    resume: {
        skills: skills, 
        workExpTag: "職歴",
        eduTag: "学歴",
        workExps: [
            {
                year: "2021年-",
                title: "サーバーサイト・フロントサイド・データエンジニア",
                company: "フリーランス",
                description: "Webサイトの構築、ECサイトの構築と運用、Webアプリのサーバー側APIの実装を担当。",
            },
            {
                year: "2020年-2021年",
                title: "データエンジニア",
                company: "株式会社ビットキー",
                description: "社内データ統合基盤の設計・構築、社内データ収集、社内外KPIの具体化、データのマスキング、ダッシュボードの作成を担当。",
            },
            {
                year: "2019年-2020年",
                title: "サーバーサイドエンジニア",
                company: "シンプレクス株式会社",
                description: "大手銀行向けのリスク管理システムのバックエンド開発およびそのテスト・リリース作業、そのエンハンスプロジェクトの基本設計を担当。",
            },
            {
                year: "2018年-2019年",
                title: "データエンジニア",
                company: "株式会社グラフ",
                description: "クライアントの社内ダッシュボード、チャットボット、ECサイト用レコメンドエンジンの開発、エンドユーザーの購入行動やステータスによるクラスタリングを担当。",
            },
        ],
        eduQuals: [
            {
                year: "2016年-2017年",
                title: "政治学専攻",
                school: "トロント大学",
                description: "政治哲学およびカナダ・アフリカ・南アメリカ・ロシア・東南アジア・EUの地域政治を研究。",
            },
            {
                year: "2016年",
                title: "国際関係学専攻",
                school: "ケンブリッジ大学",
                description: "国際関係学および英国法について研究。",
            },
            {
                year: "2014年-2019年",
                title: "アジア研究専攻",
                school: "東京大学",
                description: "中国・朝鮮半島・東南アジア・インド・中東の近現代史および文化・宗教・法律・政治について幅広く研究。卒業論文は『現代中国SNSの投稿からみる「法治」意識』について中国語で執筆。GPAは3.7台。",
            },
            {
                year: "2011年-2014年",
                title: "",
                school: "麻布高等学校",
                description: "修業論文は『東アジアの自由貿易』についてであり、優秀作品に選出される。",
            },
            {
                year: "2008年-2011年",
                title: "",
                school: "麻布中学",
                description: "卒業論文はガルシア・マルケスの『予告された殺人の記録』について。",
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
            title: 'オンライン授業付きポートフォリオサイト',
            text: '授業を購入したり、CVをダウンロードしたりできる。シングルページアプリケーションとして実装。'
        },
        {
            id: 2,
            technologies: ['HTML','CSS', 'React.js'],
            image: portfolio_yinyang,
            link: 'https://react-self-introduction.netlify.app/',
            github: 'https://github.com/blueglasses1995/react-portfolio',
            title: 'アニメーション付きポートフォリオサイト',
            text: 'ページの端のボタンから各ページに移動することができる。シングルページアプリケーションとして実装。'
        },
        {
            id: 3,
            technologies: ['HTML','CSS', 'React.js', 'styled-components'],
            image: portfolio,
            link: 'https://toshiki-matsukuma.netlify.app/#/',
            github: 'https://github.com/blueglasses1995/react-styledcomponents-portfolio',
            title: 'ブログ機能付きポートフォリオサイト',
            text: 'contentfulというheadless CMSに保管されている投稿を読むことができる。シングルページアプリケーションとして実装。'
        },
        {
            id: 4,
            technologies: ['HTML','CSS', 'Typescript', 'React.js', 'Next.js'],
            image: smart_contract,
            link: 'https://nextjs-smart-contracts.vercel.app/',
            github: 'https://github.com/blueglasses1995/nextjs-smart-contracts',
            title: 'スマートコントラクト認証付きECサイト',
            text: 'スマートコントラクト認証により、セキュアにログインや購買ができる。シングルページアプリケーションとして実装。'
        },
        {
            id: 5,
            technologies: ['HTML','CSS', 'React.js', 'Next.js', "Tailwind CSS"],
            image: crypto_dashboard,
            link: 'https://next-tailwind-crypto-dashboard.vercel.app/',
            github: 'https://github.com/blueglasses1995/next-tailwind-crypto-dashboard',
            title: '仮想通貨ダッシュボード',
            text: '複数の仮想通貨指標を一画面で確認できる。'
        },
        {
            id: 6,
            technologies: ['HTML','CSS'],
            image: landing_page,
            link: 'https://blueglasses1995.github.io/landing-page-for-liquir-firm/',
            github: 'https://github.com/blueglasses1995/landing-page-for-liquir-firm',
            title: 'シンプルなデザインとアニメーションのLP',
            text: '1Webページで会社の全情報を知ることができる。'
        },
        {
            id: 7,
            technologies: ['HTML','CSS', 'React.js'],
            image: video_chat,
            link: 'https://cky8ztju485549qojnzlqz4pfq-j6gaht0fd-blueglasses1995.vercel.app/create',
            github: 'https://github.com/blueglasses1995/react-chat-room',
            title: 'プライベートビデオチャット',
            text: 'エンターキーを持つ人のみとビデオ通話ができる。'
        },
        {
            id: 8,
            technologies: ['HTML','CSS', 'Typescript', 'React.js', 'Next.js', 'Shopify'],
            image: shopify_liquor,
            link: 'https://next-typescript-shopify.vercel.app/',
            github: 'https://github.com/blueglasses1995/next-typescript-shopify',
            title: 'Shopifyをバックエンドに置いたECサイト',
            text: '多種多様な決済方法で商品を選択し購入することができる。'
        },
        {
            id: 9,
            technologies: ['HTML','CSS', 'javascript', 'PHP', 'Wordpress'],
            image: wordpress_corporate_site,
            link: 'http://globalestateglobalestateglobalestate.com/',
            github: 'https://github.com/blueglasses1995/wordpress-corporate-site',
            title: 'Wordpress管理画面付きのコーポレートサイト',
            text: '投稿と企業情報をWordpress管理画面で管理できる。'
        },
        {
            id: 10,
            technologies: ['HTML','CSS', 'javascript', 'PHP', 'Wordpress'],
            image: wordpress_blog,
            link: 'http://globalestateglobalestateglobalestate.com/tea-break/',
            github: 'https://github.com/blueglasses1995/wordpress-blog',
            title: 'Wordpress管理画面付きのブログサイト',
            text: 'ブログ投稿をWordpress管理画面で管理できる。'
        },
        {
            id: 11,
            technologies: ['HTML','CSS', 'javascript', 'Liquid', 'Shopify'],
            image: shopify_fashion,
            link: 'https://vomiting-bird-outdated-fashion.myshopify.com/',
            github: 'https://github.com/blueglasses1995/liquid-javascript-shopify',
            title: 'Shopifyをフロントエンドとバックエンドに置いたECサイト',
            text: '多種多様な決済方法で商品を選択し購入することができる。'
        },
    ], 
    contact: {
        title: "お問い合わせ",
        nameTag: "お名前",
        emailTag: "メールアドレス",
        subjectTag: "件名",
        messageTag: "メッセージ",
        sendTag: "送信",
        myPhoneTag: "電話",
        myEmailTag: "メールアドレス",
        myAddressTag: "住所",
        address: "Soi Sukhumvit 11, Khlong Toei Nuea, Watthana, バンコク, タイ"
    }
}

export default japaneseContent