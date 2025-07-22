import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../Input';

describe('Input', () => {
  it('renders input with label', () => {
    render(<Input label="Name" id="name" />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
  });

  it('handles user input', async () => {
    render(<Input label="Name" id="name" />);
    const input = screen.getByLabelText('Name');
    
    await userEvent.type(input, 'John Doe');
    expect(input).toHaveValue('John Doe');
  });

  it('applies custom className', () => {
    render(<Input label="Name" id="name" className="custom-class" />);
    expect(screen.getByLabelText('Name')).toHaveClass('custom-class');
  });
});