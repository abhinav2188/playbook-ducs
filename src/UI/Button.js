import styled from 'styled-components';

const Button = styled.button`
    padding : 0.5 1.5rem;
    border : 1px solid #8b005d;
    background : #8b005d;
    color : while;

    &:hover, &:active{
        background : #ac0077;
    }
    &:focus{
        outline:none;
    }
`

export default Button;