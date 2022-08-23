import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from '../src';

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button variant="primary">Click me</Button>);
    expect(screen.queryByText('Click me')).toBeTruthy();
  });

  it('renders a clickable button', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <Button variant="primary" onClick={onClick}>
        Click me
      </Button>
    );
    const button = getByRole('button', { name: 'Click me' });
    expect(button).toBeDefined();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
