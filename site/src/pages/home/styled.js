import styled from 'styled-components'

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    background-image: url('/assets/img/bgHome.png');
    background-size: 100%;
    color: white;

    display: flex;
    flex-direction: row;
     padding: 1em 2em 0em 2em;
   
    .left-menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(15, 14, 21, 0.5);
        padding: 0px 1rem;
    }
    .insc {
        width: 43%;
        display: flex;
        flex-direction: row;
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
        padding: 10px;
        display:flex;
    }

    .tittle-refresh button > img {
        width: 2em;
        height: 2em;
    }

    .principal-box {
        background: rgba(15, 14, 21, 0.5);
        border-radius: 30px;
        padding: 1rem 2rem 2rem 2rem;
        height: 91%;
    }

    .agp-box-top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 5rem;
    }

    .full-box{
        width: 30%;

        :first-child {
            input {
                height: 32px;
            }
        }
    }

    .agp-input {
        display: flex;
        flex-direction: row;
        button{ 
            background: #181621;
            border-radius: 13px;
            border: solid 1px;
            border-color: white;
            color: white;
            cursor: pointer;
            outline: none; 
            &:hover{
                opacity: 0.3;

            }
        }
        .dts{
            color: white;
            font-size: 1em;
            font-family: 'Courier New', Courier, monospace;
            font-weight: 700;
            input {
                margin-right: 1rem;
                cursor: pointer;
                outline: none;
                &:hover{opacity: 0.3;}
            }
        }
    }

    .agp-input div {
        font-size: .8em;
    }

    .full-box:last-child {
        .agp-input {
            height: 32px;
        }
    }

    .agp-box-low {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }

`   

export { Container }