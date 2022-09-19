import styled from "styled-components";

export const ContainerNav = styled.div`
    // sidebar 

    * {
        list-style: none;
    }
    .navbar {
        margin-top: 3.5rem;
       background-color: ${props => props.theme.colors.secundary};
       height: 80px;
       display: flex;
       justify-content: start;
       align-items: center;
       position: fixed;
       width: 100vw;
       z-index: 1;
    }

    .menu-bars {
        margin-left: 2rem;
        font-size: 2rem;
        background: none;
        cursor: pointer;
    };

    .nav-menu {
        background-color: ${props => props.theme.colors.secundary};
        width: 250px;
        height: 100vh;
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
        transform: translateX(-1%);
        transition: 850ms;
        z-index: 1;
    }

    .nav-menu.active {
        display: flex;
        justify-content: start;
        padding: 8px 0px 8px 16px;
        list-style: none;
        height: 100vh;
        text-decoration: none;
        transform: translateX(-110%);
    };

    .nav-text a {
        text-decoration: none;
        color:  ${props => props.theme.colors.text};
        font-size: 18px;
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        padding:5px 16px;
        border-radius: 4px;
        margin: 0 0 15px 35px;
    };

    .nav-text a:hover {
        background-color: ${props => props.theme.colorTheme.main.backgroundSe};
        color: white;
    };

    .nav-menu-items {
        width: 100%;
    };

    .navbar-toggle {
        background-color:  ${props => props.theme.colors.secundary};
        width: 100%;
        height: 20vh;
        display: flex;
        justify-content: start;
        align-items: center;
    }
`;
