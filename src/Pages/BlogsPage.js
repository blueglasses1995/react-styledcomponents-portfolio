import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import {NavLink} from 'react-router-dom';
import ContentfulConfig from "../contentfulConfig"

function BlogsPage() {
    const [posts, setPosts] = useState();

    useEffect(() => {
        ContentfulConfig.getEntries({content_type: 'post'})
        .then((response)=>{
            setPosts(response.items)
          })
          .catch(console.error)
    }, [])

    return (
        <MainLayout>
            <BlogsStyled>
            <Title title={'Blogs'} span={'Blogs'} />
                <InnerLayout className={'blog'}>
                    { 
                        (posts !== (null || undefined)) &&
                        posts.map(post => {
                            return (
                                <div key={post.fields.slug} className={'blog-item'}>
                                    <NavLink className="level-item button is-small is-link is-outlined"
                                        to={{
                                            pathname: `/blogs/${post.fields.slug}`
                                        }}
                                    >
                                        <div className="image">
                                            <img src={post.fields.image.fields.file.url} alt=""/>
                                        </div>
                                        <div className="title">{post.fields.title}</div>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </InnerLayout>
            </BlogsStyled>

        </MainLayout>
    )
}

const BlogsStyled = styled.div`
    .blog{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        grid-row-gap: 3rem;
        @media screen and (max-width: 770px){
            grid-template-columns: repeat(1, 1fr);
        }
        .blog-item{
            background-color: var(--background-dark-grey);
            padding: 1rem 1rem;
        }
        .image{
            width: 100%;
            overflow: hidden;
            padding-bottom: .5rem;
            img{
                width: 100%;
                height: 90%;
                object-fit: cover;
                transition: all .4s ease-in-out;
                &:hover{
                    cursor: pointer;
                    transform: rotate(3deg) scale(1.1);
                }
            }
        }

        .title{
            a{
                font-size: 1.8rem;
                padding: 2rem 0;
                color: var(--white-color);
                cursor: pointer;
                transition: all .4s ease-in-out;
                &:hover{
                    color: var(--primary-color);
                }
            }
        }
    }
`;

export default BlogsPage
