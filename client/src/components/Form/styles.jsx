import styled from 'styled-components';

export const FormContainer = styled.div`
    width: 55%;
    background: var(--containers-bg);
    padding: 25px;
    border-radius: 1rem;
    background-color: #40b852;
  box-shadow: 3px 1px 1px 2px black;  
    position: relative;
    margin-bottom: 3rem;
     @media only screen and (max-width: 400px) {padding: 0; padding: 2}
`;
export const Form = styled.form`
padding: 2px;
 width: 100%;
 background-color:#179b17;
 border-radius: 5px;
 height: 100%;
 display: flex;
 flex-wrap: wrap;
`
export const InputArea = styled.div`
display: flex;
flex-direction: column;;
padding: 10px;
  label {
    font-size: 20px;
    font-family : Verdana, Geneva, Tahoma, sans-serif ;
    color: #000000;
  }

  input {   /*caixa de texto*/
    padding: 11px;
    border-radius: 10px;
    border: 2px solid;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    position: relative;
    color: black;

    :focus {
      outline: 0.1rem solid var(--outline-color);
    }
    
    ::placeholder{
        color: #b03232;
    }
  }
`;

export const Button = styled.button` /* botão*/
  padding: 8px;
  cursor:pointer  ; 
  font-weight:bolder;
  position: absolute;
  background-color: #02641b;
  bottom: 4.5rem;
  border-radius: 10px solid;
  right: 1rem;
  transition: all ease 0.7s;

  :hover {
    background-color: #02641b;
  }
`;