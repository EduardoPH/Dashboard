import styled from "styled-components"; 

const Container = styled.div`
    width: 284px;
    height: 227px;
    left: 177px;
    top: 251px;

    background: #181621;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    margin-left: auto;
    margin-right: auto;

    padding: 1em;
    
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

    .infos {
        color: white;
        background-color:red;
    }
`

export {Container}