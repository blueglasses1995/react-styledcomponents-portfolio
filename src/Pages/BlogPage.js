import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import ContentfulConfig from "../contentfulConfig"
import Title from '../Components/Title';
import {MainLayout, InnerLayout} from '../styles/Layouts';

function BlogPage() {
    const [post, setPost] = useState();
    const { slug } = useParams();
    const bodyRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            await ContentfulConfig.getEntries({content_type: 'post'})
            .then((response)=>{
                const selectedPost = response.items.filter(post => post.fields.slug === slug);
                setPost(selectedPost[0].fields)
            })
            .catch(console.error)
        }
        setPost(null)
        fetchData()
    }, [slug])

    useLayoutEffect(() => {
        if (!bodyRef.current) {
            return;
        }
        
        if (!(post === null || post === undefined)) {
            const fragment = document
            .createRange()
            .createContextualFragment(post.body);
            
            bodyRef.current.appendChild(fragment);
        }
    }, [post]);

    if (!(post === null || post === undefined)) {
        const {title, publishDate, author, importance, body, link, category, tag, technology} = post
        const image = post.image.fields.file.url;

        let textarea = document.createElement('div');
        textarea.innerHTML = body;
        return (
            <MainLayout>
                <BlogStyled
                    data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                <Title title={'Blog'} span={'Blog'} />
                    <InnerLayout className={'blog'}>
                        <div className="blog-box">
                            <div className="header">
                                <div className="row row-top">
                                    <div className="date">{publishDate}</div>
                                    <div className="category">{category.fields.category}</div>
                                </div>
                                <div className="row row-tags">
                                    {
                                        (tag !== (null || undefined)) &&
                                        tag.map((t,id) => {
                                            return <span key={id}>#{t.fields.tag}</span>
                                        })
                                    }
                                </div>
                                <div className="row row-tags row-techtags">                                
                                    {
                                        (technology !== (null || undefined)) &&
                                        technology.map((t,id) => {
                                            return <span key={id}>#{t.fields.technology}</span>
                                        })
                                    }
                                </div>
                                <div className="row row-title">{title}</div>  
                            </div>
                            <div className="image">
                                <img src={image} alt=""/>
                            </div>
                            <div className="body" ref={bodyRef}></div>
                            {/* <a href={link}>Link</a> */}
                        </div>
                    </InnerLayout>
                </BlogStyled>
            </MainLayout>
        )
    } else {
        console.log("No posts matched");
        return "";
    }
}

const BlogStyled = styled.div`
    .blog-box {
        background-color: var(--background-dark-grey);
        padding: 4rem 4rem;
        @media screen and (max-width:920px){
            padding: 2rem 2rem;
        }
        @media screen and (max-width:670px){
            padding: 1rem 1rem;
        }
        .header {
            .row {
                padding-bottom: 5%;
            }
            .row-top {
                display: flex;
                .date {

                }
                .category {
                    margin: 0 auto;
                }
            }
            .row-tags {
                display: flex;
                justify-content: safe center;
                flex-wrap: wrap;
                padding-bottom: 3%;
                span {
                    font-size: 80%;
                    color: inherit;
                    &:not(:last-child){
                        margin-right: 1rem;
                    }
                }
            }
            .row-title {
                text-align: center;
                font-size: 3vw;
                color: var(--white-color);
                @media screen and (max-width:670px){
                    font-size: 5vw;
            }
            }
        }
        .image {
            text-align: center;
            padding-bottom: 10%;
            img {
                height: 70%;
                width: 70%;

                @media screen and (max-width:670px){
                    height: 100%;
                    width: 100%;
                }
            }
        }
        .body, .body * {
            font-size: 100%;
            @media screen and (max-width:920px){
                font-size: 90%;
            }
            @media screen and (max-width:670px){
                font-size: 80%;
            }
        }
    }
`

export default BlogPage
