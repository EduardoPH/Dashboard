import styled from 'styled-components'

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    background-image: url('/assets/img/bgHome.png');
    background-size: 100%;
    color: white;

    display: flex;
    flex-direction: row;

    .left-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(15, 14, 21, 0.5);
        padding: 0px 1rem;
    }

    .left-menu img {
        fill: white;
        width: 80%;
        height: auto;

        :first-child {
            margin-bottom: 2rem;
        }
    }

    .right-container {
        width: 100%;
    }

    .tittle-refresh {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .tittle-refresh h1 {
        margin-left: 5rem;
    }

    .tittle-refresh button {
        background: rgba(74, 65, 111, 0.5);
        border-radius: 50px;
        height: 50%;
        outline: none;
        border: 1px solid transparent;
        padding: 10px
    }

    .tittle-refresh button > img {
        width: 80%;
        height: auto;
    }

    .principal-box {
        background: rgba(15, 14, 21, 0.5);
        border-radius: 30px;
        padding: 1rem 2rem 2rem 2rem;
        margin: 2rem;
        height: 80%;
    }

    .agp-box-top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 5rem;
    }

    .agp-box-low {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }
`   

export { Container }