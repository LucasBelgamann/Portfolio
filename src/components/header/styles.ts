import styled from "styled-components";

export const Container = styled.div`
   .container-head {
      height: 8vh;
      background-color: ${props => props.theme.colorTheme.main.backgroundSe};
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 30px;
      position: fixed;
      width: 100vw;
      z-index: 1;
   }
    
    // sidebar 

    .navbar {
       background-color: ${props => props.theme.colorTheme.main.backgroundSe};
    }

    .btn-dark-mode {
       font-size: 30px;
       cursor: pointer;
    }
`;