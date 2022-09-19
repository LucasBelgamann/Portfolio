import styled from "styled-components";

export const ContainerFooter = styled.div`
    .container-footer {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 60vh;
        background-color: ${props => props.theme.colorTheme.main.backgroundSe};
        color: ${props => props.theme.colorTheme.main.textColor};
    };

    .inputs {
        display: flex;
        flex-direction: column;
    };

    .inputs input {
        height: 40px;
        margin-bottom: 2rem;
        border-radius: 15px;
        width: 15vw;
        padding: 0 10px;
    }

    .inputs textarea {
        height: 80px;
        width: 15vw;
        border-radius: 15px;
        padding: 15px;
        resize: none;
    }

    .btns {
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
        margin-top: 4rem;
    };

    .inputs h2 {
        text-align: center;
        font-size: 25px;
        margin-bottom: 2rem;
        color: ${props => props.theme.colorTheme.cards.tcolor};
    }

    .btns button {
        border: none;
        margin-bottom: 1rem;
        border-radius: 7px;
        background-color: ${props => props.theme.colorTheme.cards.btn};
        color: black;
        height: 6vh;
        width: 7vw;
        font-weight: 900;
        cursor: pointer;

        transition: background-color;
        transition-duration: 1s;
    };

    .btns button:hover {
        background-color: transparent;
        border: solid 5px ${props => props.theme.colorTheme.cards.btn};
        color: ${props => props.theme.colorTheme.cards.tcolor};
    }

    .container-footer img {
        width: 5vw;
        margin-left: 50px;
    };

    .btns-form {
        display: flex;
        flex-direction: column;
        align-items: center;
    };

    .container-form {
        display: flex;
        align-items: center;
    };

    @media screen and (min-width: 300px) and (max-width: 690px) {
        .container-footer {
            flex-direction: column;
            height: 90vh;
        };

        .inputs input {
            width: 65vw;
            height: 7vh;
        };

        .inputs textarea {
            width: 65vw;
            height: 12vh;
        };

        .container-form {
            flex-direction: column;
        };

        .btns button {
            width: 40vw;
            margin-left: -2.1rem;
        }

        .container-footer img {
            width: 15vw;
            margin-right: 3rem;
            margin-left: none;
        }
    }
`;