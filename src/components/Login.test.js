import React from "react"; 
import { render } from '@testing-library/react'; 
import Login from './Login';

test('renders Login component', () => { 
    const { getByText } = render(<Login />); 
    const signInButtons = getAllByText('Sign In');
    expect(signInButton).toBeInTheDocument(); 
}); 