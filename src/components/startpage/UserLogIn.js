import styled from 'styled-components';
import { Button } from '../Button/ButtonBasicStyle.js';

export default function UserLogIn() {
  return (
    <LoginWrapper>
      <form name="logInForm">
        <label name="logInForm" id="logInUsername">
          already user?
        </label>
        <input
          name="logInForm"
          type="text"
          id="logInUsername"
          placeholder="your username"
        ></input>
        <Button name="logInForm" type="button">
          LOGIN
        </Button>
      </form>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  border: 1px dotted black;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 8px;
  }

  input {
    max-width: 200px;
    margin: 0.5rem;
    padding: 5px;
    text-align: center;
  }

  label {
    font-family: sans-serif;
  }
`;
