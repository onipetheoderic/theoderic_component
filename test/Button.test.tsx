import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from '../src';

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button variant="primary">hello world</Button>);
    expect(screen.queryByText('hello world')).toBeTruthy();
  });

  it('color is gray when it is secondary', () => {
    render(<Button variant="secondary">hello</Button>);
    const element = screen.getByText('hello');
    const styles = getComputedStyle(element);
    expect(styles.backgroundColor).toBe('gray');
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
