import styled from "styled-components"; 

const Container = styled.div`
    width: 100%;
    height: 100%;

    background: #181621;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    transition: .5s;
    padding: 1em;

    color: white;

    :hover {
        box-shadow: 5px 10px 12px rgba(255, 255, 255, 0.16);
    }
    
    .barra {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        width: 88%;
        height: 1.5px;
        background-color: #EDD3D3
    }

    .tittle {
        color: white;
        font-size: 1.5em;
        text-align: center;
        padding: 0.5em 0em;
    }


    .pt2-components {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .grafico {
        width: 50%;
        height: 50%;
        margin-right: 1rem;
    }

    .infos {
        margin: auto;
        display: flex;
        vertical-align: middle;
        align-items: center;
        justify-content: center;
    }

    .noGraphic-Info {
        font-size: 3em;
        text-align: center;
        width: 100%;
        height: 100%;   

        margin-top: 2rem;
    }
`

const LargeContainer = styled.div`
    width: 100%;
    height: auto;

    background: #181621;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    transition: .5s;
    padding: 1em;

    color: white;

    :hover {
        box-shadow: 5px 10px 12px rgba(255, 255, 255, 0.16);
    }
    
    .barra {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        width: 88%;
        height: 1.5px;
        background-color: #EDD3D3
    }

    .pt1 {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .fullscreen{
        display: flex;
        height: 30px;
        transition: all 0.3s;
        transform: scale(0.8);

        &:hover{
            transform: scale(1);
        }
    }

    .tittle {
        color: white;
        font-size: 1.5em;
        text-align: center;
        padding: 0.5em 0em;
    }


    .pt2-components {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .grafico {
        width: 100%;
        height: 50%;
        margin-right: 1rem;
    }
`

const Fullbox = styled.div`
    width: 100%;
    height: 100%;


    background: #181621;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    transition: .5s;
    padding: 1em;

    color: white;

    :hover {
        box-shadow: 5px 10px 12px rgba(255, 255, 255, 0.16);
    }
    
    .barra {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        width: 88%;
        height: 1.5px;
        background-color: #EDD3D3
    }

    .tittle {
        color: white;
        font-size: 1.5em;
        text-align: center;
        padding: 0.5em 0em;
    }


    .pt2-components {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .grafico {
        width: 50%;
        height: 50%;
        margin-right: 1rem;
    }

    .infos {
        margin: auto;
        display: flex;
        vertical-align: middle;
        align-items: center;
        justify-content: center;
    }

    .noGraphic-Info {
        font-size: 3em;
        text-align: center;
        width: 100%;
        height: 100%;   

        margin-top: 2rem;
    }
`


export {Container, LargeContainer, Fullbox}