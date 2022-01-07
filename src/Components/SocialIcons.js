import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function SocialIcons() {
    return (
        <SocialIconsStyled>
            <div className="icons">
                <a href="https://www.facebook.com/toshiki.matsukuma" className="icon i-facebook">
                    <FacebookIcon />
                </a>
                <a href="https://www.linkedin.com/in/toshiki-matsukuma-6bb7251b6/" className="icon i-linkedin">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/blueglasses1995" className="icon i-github">
                    <GithubIcon />
                </a>
                <a href="https://codepen.io/pen/" className="icon i-youtube">
                    <YoutubeIcon />
                </a>
                <a href="https://twitter.com/BlueglssesKuma" className="icon i-twitter">
                    <TwitterIcon />
                </a>
            </div>
        </SocialIconsStyled>
    )
}

const SocialIconsStyled = styled.div`
.icons{
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    .icon{
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all .4s ease-in-out;
        cursor: pointer;
        &:hover{
            border: 2px solid var(--primary-color);
            color: var(--primary-color);
        }
        &:not(:last-child){
            margin-right: 1rem;
        }
        svg{
            margin: .5rem;
        }
    }

    .i-youtube{
        &:hover{
            border: 2px solid red;
            color: red;
        }
    }
    .i-github{
        &:hover{
            border: 2px solid #5F4687;
            color: #5F4687;
        }
    }
}

`

export default SocialIcons;