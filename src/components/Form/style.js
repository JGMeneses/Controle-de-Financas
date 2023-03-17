import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    width: 98%;
    margin: 20px auto;
    display: flex;
    gap: 10px;
    justify-content: space-around;
    background-color: #fff;
    box-shandow: 0px 0px 5px #ccc;
    border-radius: 5px;
    padding: 10px;

    @media (max-width: 750px){
        display:grid;
    }

`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
    outline:none;
    border-radius:5px
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
    margin-right: 5px;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input{
        margin-left: 20px;
        accent-color: green;
        margin-top: 0;
    }
`;

export const Button = styled.button`
    padding: 5px 10px;
    border: none:
    border-radius: 5px
    cursor: pointer;
    color: white;
    background-color: teal;
`;

