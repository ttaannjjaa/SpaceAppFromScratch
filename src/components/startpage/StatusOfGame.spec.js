import StatusOfGame from './StatusOfGame.js';
import { screen, render } from '@testing-library/react';

describe('StatusOfGame', () => {
  it('renders without error', () => {
    render(<StatusOfGame />);

    const textStatus = screen.getByText('Status of Game');

    expect(textStatus).toBeInTheDocument();
  });
});
