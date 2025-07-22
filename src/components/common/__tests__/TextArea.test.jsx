import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextArea from '../TextArea';

describe('TextArea', () => {
  it('renders textarea with label', () => {
    render(<TextArea label="Message" id="message" />);
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('handles user input', async () => {
    render(<TextArea label="Message" id="message" />);
    const textarea = screen.getByLabelText('Message');
    
    await userEvent.type(textarea, 'Hello, world!');
    expect(textarea).toHaveValue('Hello, world!');
  });

  it('applies custom rows', () => {
    render(<TextArea label="Message" id="message" rows={6} />);
    expect(screen.getByLabelText('Message')).toHaveAttribute('rows', '6');
  });
});