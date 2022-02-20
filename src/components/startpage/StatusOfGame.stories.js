import StatusOfGame from './StatusOfGame.js';

// exportiert wird ein Objekt! //
export default {
  title: 'components/startpage/StatusOfGame',
  component: 'StatusOfGame',
};

//named export
export const statusOfGameAvailable = () => <StatusOfGame isAvailable={true} />; //Name der js.Datei mit Attribut
export const statusOfGameNotAvailable = () => (
  <StatusOfGame isAvailable={false} />
); //Name der js.Datei mit Attribut
