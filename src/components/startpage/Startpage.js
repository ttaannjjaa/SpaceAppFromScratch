import styled from 'styled-components';
import StatusOfGame from './StatusOfGame.js';
import UserLogIn from './UserLogIn.js';
import UserSignUp from './UserSignUp.js';

export default function startpage() {
  return (
    <StartpageLayout>
      <h1>SPaCeTRaDeRS</h1>
      <StatusOfGame />
      <UserLogIn />
      <UserSignUp />
    </StartpageLayout>
  );
}

const StartpageLayout = styled.main`
  height: 100vh;
  background-color: rgb(55, 77, 222);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 50px 1fr 1fr;
  row-gap: 10px;
  place-items: center;

  h1 {
    line-height: 112, 5%;
    font-size: 2rem;
  }
`;
