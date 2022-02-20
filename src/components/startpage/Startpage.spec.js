import Startpage from './Startpage.js';
import { render, screen } from '@testing-library/react';

describe('Startpage', () => {
  it('page renders without error with a headline, 2 inputfields and 2 buttons', () => {
    render(<Startpage />);

    const headline = screen.getByText(/spaceTraders/i);
    const loginField = screen.getByPlaceholderText('your username');
    const loginButton = screen.getByText(/login/i);
    const signUpField = screen.getByPlaceholderText('username');
    const signUpButton = screen.getByText(/sign up/i);

    expect(headline).toBeInTheDocument();
    expect(loginField).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(signUpField).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
  });
});
