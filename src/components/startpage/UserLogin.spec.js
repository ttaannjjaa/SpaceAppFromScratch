import { screen, render } from '@testing-library/react';
import UserLogIn from './UserLogIn.js';

describe('UserLogIn', () => {
  it('renders UserLogIn without error', () => {
    render(<UserLogIn />);

    const buttonIsVisible = screen.queryByRole('button');
    const inputField = screen.queryByPlaceholderText('your username');
    const textOfLabel = screen.getByText(/already user?/i);

    expect(buttonIsVisible).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
    expect(textOfLabel).toBeInTheDocument();
  });
});
