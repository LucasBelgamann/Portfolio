import styled from "styled-components";

export const ContainerMain = styled.div`
    .main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 98.9vw;
        background-color: ${props => props.theme.colorTheme.main.backgroundSe};
    };

    .prof {
        text-align: right;
    };

    span {
        color: ${props => props.theme.colorTheme.main.background};
    }

    .name {
        font-size: 50px;
        color: white;
    };

    @media screen and (min-width: 300px) and (max-width: 690px) {
        .name {
            font-size: 27px;
        };

        .main {
            width: 100vw;
            height: 80vh;
            text-align: center;
        };

        .prof {
            text-align: center;
        }
    }
`;
