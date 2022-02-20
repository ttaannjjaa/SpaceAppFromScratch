import styled from 'styled-components';
import PropTypes from 'prop-types';

StatusOfGame.propTypes = {
  //Objekt //
  isAvailable: PropTypes.bool, //propTypes hier richtig, oder nur dort, wo zugehöriger state ist, oder an beiden Stellen?//
};

// span: ohne Text - Accessibility klären, andere Möglichkeit als Scr only in GlobalStyle? //
export default function StatusOfGame({ isAvailable }) {
  return (
    <StatusOfGameStyle>
      <ShowStatus isAvailable={isAvailable}>Status of Game</ShowStatus>
      <span></span>
    </StatusOfGameStyle>
  );
}

const StatusOfGameStyle = styled.div`
  border: 1px dotted black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

const ShowStatus = styled.div`
  display: inline-block;

  .span {
    border: 1px solid black;
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;
