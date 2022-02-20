import styled from 'styled-components';
import { Button } from '../Button/ButtonBasicStyle.js';

export default function UserSignUp() {
  return (
    <SignUpWrapper>
      <form name="signUpForm">
        <label name="signUpForm" id="signUpUsername">
          Choose a username
        </label>
        <input
          name="signUpForm"
          type="text"
          id="signUpUsername"
          placeholder="username"
        ></input>
        <Button name="signUpForm" type="button">
          SIGN UP
        </Button>
      </form>
    </SignUpWrapper>
  );
}

const SignUpWrapper = styled.div`
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
