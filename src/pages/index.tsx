import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import { useState } from 'react';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import Header from '../components/header/Index';
import NavBar from '../components/header/NavBar';
import Main from '../components/main/Main';
import AboutMe from '../components/about/AboutMe';
import Projects from '../components/projects/Projects';
import Hards from '../components/hards/Hards';
import Footer from '../components/footer/Footer';
import Global from '../styles/global';

function MyApp() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
      setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Global />
        <Header toggleTheme={toggleTheme} theme={theme} />
        <NavBar />
        <Main />
        <AboutMe />
        <Projects />
        <Hards />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp
