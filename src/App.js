import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import styled from 'styled-components';
import HomePage from "./Pages/HomePage";
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import PortfoliosPage from './Pages/PortfoliosPage';
import BlogsPage from './Pages/BlogsPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';
import { Route, Switch as Switching } from "react-router";
import Switch from '@material-ui/core/Switch'
import { IconButton } from "@material-ui/core";
import englishContent from "./data/englishContent";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const [languageContent, setLanguageContent] = useState(englishContent);

  useEffect(()=>{
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(()=>{
    document.getElementsByClassName("App")[0].style.fontFamily = languageContent.font;
  }, [languageContent]);

  const themeToggler = () =>{
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false)
    }else{
      setTheme('light-theme');
      setChecked(true)
    }
  }

  return (
    <div className="App">
      <Sidebar setLanguageContent={setLanguageContent} navToggle={navToggle} setNavToggle={setNavToggle} />

      <div className="theme">
        <div className="light-dark-mode">
            <div className="left-content">
              <Brightness4Icon />
            </div>
            <div className="right-content">
              <Switch
                value=""
                checked={checked}
                inputProps={{ 'aria-label': '' }}
                size="medium"
                onClick={themeToggler}
              />
            </div>
          </div>
      </div>

      <HumbergerMenuIcon className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
            <MenuIcon />
        </IconButton>
      </HumbergerMenuIcon>



      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Switching>
          <Route path="/" exact>
            <HomePage introduction={languageContent.introduction} />
          </Route>
          <Route path="/about" exact>
            <AboutPage introduction={languageContent.introduction} />
          </Route>
          <Route path="/resume" exact>
            <ResumePage resume={languageContent.resume} />
          </Route>
          <Route path="/portfolios" exact>
            <PortfoliosPage portfolios={languageContent.portfolios} />
          </Route>
          <Route path="/blogs" exact>
            <BlogsPage />
          </Route>
          <Route path='/blogs/:slug'>
            <BlogPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage contact={languageContent.contact} />
          </Route>
        </Switching>

      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

const HumbergerMenuIcon = styled.div`
svg {
  display: block;
  position: fixed;
  top: 10%;
  left: 85%;
  z-index: 9999;
  @media screen and (max-width:920px){
    font-size: 2.5rem;
  }
  @media screen and (max-width:670px){
    font-size: 2rem;
  }
}
`

export default App;