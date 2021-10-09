import styled from 'styled-components';

const Containers=styled.div`
    
    display: flex;
    flex-direction: row;

    width: 100%;
    min-height: 100vh;

    .menu{
        min-height: 100vh;
        min-width: 5em;

        display: flex;
        flex-direction: column;
        align-items: center;
        
        background-color: rgba(15, 14, 21, 0.5);
    }

`

export {Containers}