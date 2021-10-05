import styled from "styled-components";


const Button = styled.button`
    background-color: #2EAFB2;
    width: 150px;
    height: 40px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-family: ${props => props.fontFamily || "'Roboto', sans-serif;"};
    font-size: 14px;
    font-weight: 700;
    transition: ease-in-out 200ms;
    &:hover{
        opacity: 0.6;
    }
    cursor: pointer;

    @media (max-width: 599px) {
        margin-top: 20px;
    }
`;

export default Button;