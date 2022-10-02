import styled from 'styled-components'


const Container = styled.main`

    
    max-width: 608px;
    height: 450px;
    margin: 7% auto;
    border: 1px solid black;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;

    .simulacao{
        padding-top: 20px;
        padding-left: 56px;
    }

    .simulacao h3{
        font-size: 14px;
        font-weight: lighter;
    }

    .simulacao input{
        width: 251px;
        height: 37px;
        border: 1px solid #dde6e9;
        border-radius: 4px;
    }

    .simulacao div{
        display: flex;
        flex-direction: column;
    }
    .simulacao span{
        opacity: 0.5;
        font-size: 12px;
        color: grey;
    }

    .recebimento{
        text-align: center;
        padding: 90px 20px;
        background-color: rgba(209, 220, 227, 0.18);
    }

    .recebimento h2{
        font-size: 16px;
        border-bottom: 1px solid blue;
        font-style: italic;
        color: #3d75bb;
    }
    .recebimento p{
        color:#5D9CEC;
        font-style: italic;
        font-size: 14px;
    }


`

export default Container