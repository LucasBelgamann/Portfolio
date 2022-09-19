import styled from "styled-components";

export const ContainerHards = styled.div`
    .container-hards {
        width: 90vw;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        flex-direction: column;
        margin-bottom: 6rem;
    };

    .hards-title {
        margin-bottom: 70px;
        font-size: 60px;
    }

    .container {
        max-width: 75vw;
    };

    .carousel {
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
        width: 80vw;
        margin-left: 29rem;
    };

    .carousel::-webkit-scrollbar {
        display: none;
    };

    .item {
        background-color: ${props => props.theme.colorTheme.main.backgroundSe};
        height: 55vh;
        width: 17vw;
        color: ${props => props.theme.colorTheme.main.textColor};
        border-radius: 15px;
        flex: none;
        margin-left: 20px;

        transition: box-shadow, transform, translate;
        transition-duration: 1s;
    };

    .item a {
        text-decoration: none;
    };

    .item:hover {
        transform: translateY(-1px);
        box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    };

    .item img {
        width: 10vw;
        margin: 3.5rem;
    };

    .title {
        background-color: ${props => props.theme.colors.secundary};
        height: 15vh;
        border-radius: 15px 15px 0 0;
        padding: 30px;
    };

    .arrow-left, .arrow-right {
        position: absolute;
        font-size: 90px;
        cursor: pointer;
        margin-top: 10rem;
        z-index: 2;
        opacity: 0.5;
        transition: opacity;
        transition-duration: 1s;
    };

    .arrow-left:hover, .arrow-right:hover {
        opacity: 0.9;
    }

    .arrow-right {
        left: 0;
        right: auto;
    };

    .arrow-right {
        left: auto;
        right: -7rem;
    };

    @media screen and (min-width: 300px) and (max-width: 690px) {
        .carousel {
            margin-left: 3.5rem;
            width: 90vw;
        };

        .item {
            width: 70vw;
        };

        .item img {
            width: 40vw;
        };

        .arrow-right {
            right: 0;
        };

        .hards-title {
            font-size: 45px;
        }
    }
`;