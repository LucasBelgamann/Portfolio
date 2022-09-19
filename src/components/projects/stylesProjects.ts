import styled from "styled-components";

export const ContainerProject = styled.div`
    .container-project {
        height: 100vh;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: ${props => props.theme.colorTheme.main.backgroundSe};
    };

    .container-project h1 {
        margin-bottom: 7rem;
        color: ${props => props.theme.colorTheme.cards.colorTitle};
        font-size: 60px;
    }

    .cards {
        display: flex;
    };
    
    .card-project img {
        width: 20vw;
    };

    .card-project {
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 60vh;
        width: 20vw;
        margin-right: 3rem;
        background-color: ${props => props.theme.colors.secundary};
        background-size: cover;

        transition: box-shadow, transform, translate;
        transition-duration: 1s;
    };

    .card-project button {
        background-color: #029daf;
        color: white;
        border-radius: 10px;
        cursor: pointer;
        border: none;
        width: 8vw;
        height: 5vh;
        font-size: 15px;

        transition-property: background-color, transform;
        transition-duration: 0.9s;
    };

    .card-project:hover {
        transform: translateY(-1px);
        box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    };

    .card-project button:hover {
        border: #029daf solid 4px;
        background-color: transparent;
    };

    @media screen and (min-width: 300px) and (max-width: 690px) {
        .container-project {
            width: 100vw;
            height: 135vh;
        };

        .card-project {
            width: 70vw;
            height: 45vh;
            margin-bottom: 2.5rem;
            margin-right: 0;
            flex-direction: column;
        }

        .cards {
            flex-direction: column;
        };

        .card-project img {
            width: 70vw;
        }

        .card-project button {
            width: 40vw;
            height: 5vh;
        }
    }

`;