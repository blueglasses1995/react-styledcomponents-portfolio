import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';

function Sidebar({setLanguageContent, navToggle, setNavToggle}) {
    const removeMenu = () => {
        (document.body.clientWidth > 1200) || setNavToggle(false)
    }

    return (
        <SidebarStyled id="sidebar" className={`${navToggle ? 'nav-toggle' : ''}`}>
            <Navigation setLanguageContent={setLanguageContent} removeMenu={removeMenu} />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
    transition: all .4s ease-in-out;
    @media screen and (max-width:1200px){
        transform: translateX(-100%);
        z-index: 20;
    }
`;

export default Sidebar;
