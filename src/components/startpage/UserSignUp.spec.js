import { screen, render } from '@testing-library/react';
import UserSignUp from './UserSignUp.js';

describe('UserSignUp', () => {
  it('renders UserSignUp without error', () => {
    render(<UserSignUp />);

    const buttonIsVisible = screen.queryByRole('button');
    const inputField = screen.queryByPlaceholderText('username');
    const textOfLabel = screen.getByText(/Choose a username/i);
    const buttonText = screen.getByText(/sign up/i);

    expect(buttonIsVisible).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
    expect(textOfLabel).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });
});
