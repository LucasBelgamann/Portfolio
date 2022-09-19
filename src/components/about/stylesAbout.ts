import styled from "styled-components";

export const ContainerAbout = styled.div`
    .container-aboutme {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    };
    
    .title {
        font-size: 30px;
        text-align: center;
        margin: 15px auto 5rem;
        border-bottom: solid 6px ${props => props.theme.colors.text};
        width: 20vw;
    };

    .description {
        text-align: justify;
        line-height: 43px;
        font-size: 23px;
        width: 50vw;
        margin: auto;
    };

    @media screen and (min-width: 300px) and (max-width: 690px) {
        .description {
            width: 90vw;
            margin: 0 auto;
            font-size: 20px;
        };

        .title {
            font-size: 20px;
            margin-top: -5rem;
            width: 60vw;
        };

        .container-aboutme {
            height: 150vh;
        }
    }
`;