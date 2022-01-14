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
                <BlogStyled>
                <Title title={'Blog'} span={'Blog'} />
                    <InnerLayout className={'blog'}>
                        <div className="blog-box">
                            <div className="header">
                                <div className="row row-top">
                                    <div className="date">{publishDate}</div>
                                    <div className="category">{category.fields.category}</div>
                                    <div className="tags">
                                        <span>
                                            {
                                                (tag !== (null || undefined)) &&
                                                tag.map((t,id) => {
                                                    return <span key={id}>#{t.fields.tag}</span>
                                                })
                                            }
                                        </span>                                
                                        <span>
                                            {
                                                (technology !== (null || undefined)) &&
                                                technology.map((t,id) => {
                                                    return <span key={id}>#{t.fields.technology}</span>
                                                })
                                            }
                                        </span>
                                    </div>
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
                justify-content: space-between;
                .date {

                }
                .category {

                }
                .tags {
                    span {
                        font-size: 75%;
                        color: inherit;
                        &:not(:last-child){
                            margin-right: 1rem;
                        }
                    }
                }
            }
            .row-title {
                text-align: center;
                font-size: 3vw;
                color: var(--white-color);
            }
        }
        .image {
            text-align: center;
            padding-bottom: 10%;
            img {
                
                height: 50%;
                width: 50%;
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
