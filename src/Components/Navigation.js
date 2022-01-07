import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../img/avatar.png';
import SocialIcons from '../Components/SocialIcons';
import SoundBar from "../Components/SoundBar"
import englishContent from "../data/englishContent";
import japaneseContent from "../data/japaneseContent";
import chineseContent from "../data/chineseContent";

function Navigation({setLanguageContent, removeMenu}) {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt=""/>
            </div>
            <ul className="nav-items">
                <li className="nav-item"  onClick={removeMenu}>
                    <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item"  onClick={removeMenu}>
                    <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                </li>
                <li className="nav-item"  onClick={removeMenu}>
                    <NavLink to="/resume" activeClassName="active-class" exact>Resume</NavLink>
                </li>
                <li className="nav-item"  onClick={removeMenu}>
                    <NavLink to="/portfolios" activeClassName="active-class" exact>Portfolios</NavLink>
                </li>
                <li className="nav-item"  onClick={removeMenu}>
                    <NavLink to="/blogs" activeClassName="active-class" exact>Blogs</NavLink>
                </li>
                <li className="nav-item"  onClick={removeMenu}>
                    <NavLink to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                </li>
            </ul>

            <SoundBar />

            <LanguageButtons>
                <li className="button">
                    <button onClick={() => setLanguageContent(japaneseContent)}>JP</button>
                </li>
                <li className="button">
                    <button onClick={() => setLanguageContent(englishContent)}>EN</button>
                </li>
                <li className="button">
                    <button onClick={() => setLanguageContent(chineseContent)}>CN</button>
                </li>
            </LanguageButtons>

            <SocialIconsBar>
                <SocialIcons />
            </SocialIconsBar>

            <footer className="footer">
                <p>@2022 <b>Toshiki Matsukuma</b></p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid var(--border-color);
    .avatar{
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        text-align: center;
        padding: 1rem 0;
        img{
            width: 70%;
            border-radius: 50%;
            border: 8px solid var(--border-color);
        }
    }

    .nav-items{
        width: 100%;
        text-align: center;
        .active-class{
            background-color: var(--primary-color-light);
            color: white;
        }
        li{
            display: block;
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var( --primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                    opacity: 0.21;
                    z-index: -1;
                }
            }
            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
        
    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        p{
            padding: 1.3rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
    }
}
`;

const LanguageButtons = styled.ul`
    display: flex;
    flex-direction: row;
    li {
        height: 50px;
        width: 50px;    
        border: 2px solid var(--border-color);
        position: relative;
        border-radius: 50%;
        z-index: 10;
        text-transform: uppercase;
        transition: all .4s ease-in-out;
        cursor: pointer;

        button {
            color: inherit;
            background-color: inherit;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 20px;
            cursor: pointer;
            border: none;
        }
        &:hover{
            border: 2px solid var(--primary-color);
            color: var(--white-color);
        }
        &:not(:last-child){
            margin-right: 1rem;
        }
        svg{
            margin: .5rem;
        }
    }
`

const SocialIconsBar = styled.div`
.icons {
    .icon {
        &:not(:last-child){
            /* Modify margin when new icons are added */
            /* margin-right: 1rem; */
        }
        svg {
            font-size: 1rem;
        }
    }
}
`

export default Navigation;
