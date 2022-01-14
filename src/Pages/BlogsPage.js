import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Title from '../Components/Title';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import {NavLink} from 'react-router-dom';
import ContentfulConfig from "../contentfulConfig"
import Button from '../Components/Button';
import { ContactSupportOutlined } from '@material-ui/icons';

function BlogsPage() {
    const [posts, setPosts] = useState();
    const [selectedPosts, setSelectedPosts] = useState();
    const [categoryButtons, setCategoryButtons] = useState([]);
    const [tagButtons, setTagButtons] = useState([]);
    // [Post: [Tag]]
    const [postTagRelations, setPostTagRelations] = useState({})

    useEffect(() => {
        ContentfulConfig.getEntries({content_type: 'post'})
        .then((response)=>{
            const compare = (x, y) => new Date(x.fields.publishDate).getTime() < new Date(y.fields.publishDate).getTime() ? 1 : -1;
            setPosts(response.items.sort(compare))
            return(response.items)
        })
        .then((posts)=>{
            setCategoryButtons(['All', ...new Set(posts.map(post => post.fields.category.fields.category))]);
            // setTagButtons(['All', ...new Set(posts.map(post => post.fields.tag.map(tag => tag.fields.tag)))]);
            // setPostTagRelations(posts.map(post => [post, post.fields.tag.map(tag => tag.fields.tag)]))
            setSelectedPosts(posts);
        })
        .catch(console.error)
    }, [])

    const categoryFilter = (button) => {

        if(button === 'All'){
            setSelectedPosts(posts);
            return;
        }

        const filteredData = posts.filter(post => post.fields.category.fields.category === button);
        setSelectedPosts(filteredData);
    }

    // const tagFilter = (button) => {
    //     if(button === 'All'){
    //         setSelectedPosts(posts);
    //         return;
    //     }

    //     const filteredData = postTagRelations.filter(postTagRelation => postTagRelation[1].includes(button));
    //     postTagRelations.forEach(postTagRelation => (postTagRelation[1][0] !== button) || filteredData.push(postTagRelation));
    //     postTagRelations.forEach(postTagRelation => console.log(postTagRelation[1][0] + button))
    //     console.log(filteredData)
    // }

    return (
        <MainLayout>
            <BlogsStyled>
            <Title title={'Blogs'} span={'Blogs'} />
            <Button filter={categoryFilter} button={categoryButtons} />
            {/* <Button filter={tagFilter} button={tagButtons} /> */}
                <InnerLayout className={'blog'}>
                    { 
                        (selectedPosts !== (null || undefined)) &&
                        selectedPosts.map((post, value) => {
                            return (
                                <div key={post.fields.slug} className={'blog-item'}
                                data-aos={value % 2 === 0 ? "flip-up": "flip-down"}
                                data-aos-offset="-200"
                                data-aos-delay="0"
                                data-aos-duration="300"
                                data-aos-easing="ease-in-out-quart"
                                data-aos-mirror="true"
                                data-aos-once="true"
                                data-aos-anchor-placement="bottom-bottom"
                                >
                                    <NavLink className="level-item button is-small is-link is-outlined"
                                        to={{
                                            pathname: `/blogs/${post.fields.slug}`
                                        }}
                                    >
                                        <div className="image">
                                            <img src={post.fields.image.fields.file.url} alt=""/>
                                        </div>
                                        <div className="date">{post.fields.publishDate}</div>
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
            height: 300px;
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
