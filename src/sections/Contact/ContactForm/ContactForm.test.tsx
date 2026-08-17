import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import ContactForm from './index';
import { ContactSchema } from './schema';

describe('ContactSchema email validation', () => {
  beforeEach(() => {
    render(<ContactForm />);
  });
  it('accepts a valid email', () => {
    const result = ContactSchema.safeParse({ name: 'Maya', email: 'maya@example.com', message: 'This is a message' });
    expect(result.success).toBe(true);
  });

  it('rejects an email missing an @', () => {
    const result = ContactSchema.safeParse({ name: 'Maya', email: 'invalid', message: 'This is a message' });
    expect(result.success).toBe(false);
  });

  it('rejects an empty email', () => {
    const result = ContactSchema.safeParse({ name: 'Maya', email: '', message: 'This is a message' });
    expect(result.success).toBe(false);
  });
});

describe('ContactForm email validation', () => {
  beforeEach(() => {
    render(<ContactForm />);
  });
  it('shows an error when the email is invalid', () => {
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'not-an-email' } });
    fireEvent.click(screen.getByText('Send message'));

    expect(screen.getByText('Email is required')).toBeInTheDocument();
  });

  it('does not show an error for a valid email', () => {
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'example@email.com' } });
    fireEvent.click(screen.getByText('Send message'));

    expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
  });
});

describe('ContactForm name validation', () => {
  beforeEach(() => {
    render(<ContactForm />);
  });
  it('shows an error when name is not provided', () => {
    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: '' } });
    fireEvent.click(screen.getByText('Send message'));

    expect(screen.getByText('Name is required')).toBeInTheDocument();
  });

  it('does not show an error when name is provided', () => {
    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'Maya' } });
    fireEvent.click(screen.getByText('Send message'));

    expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
  });
});

describe('ContactForm message validation', () => {
  beforeEach(() => {
    render(<ContactForm />);
  });
  it('shows an error message when a message less than 10 characters is provided', () => {
    fireEvent.change(screen.getByLabelText('Message:'), { target: { value: '' } });
    fireEvent.click(screen.getByText('Send message'));

    expect(screen.queryByText('Message too short')).toBeInTheDocument();
  });

  it('does not show an error when a valid message is given', () => {
    fireEvent.change(screen.getByLabelText('Message:'), { target: { value: 'This is a message that is long enough' } });
    fireEvent.click(screen.getByText('Send message'));

    expect(screen.queryByText('Message too short')).not.toBeInTheDocument();
  });
});
