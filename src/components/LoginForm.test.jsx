/**
 * @jest-environment jsdom
 */

/**
 * LoginForm Testing Scenario
 *
 * - should handle username typing correctly
 * - should handle password typing correctly
 * - should call login function when login button is clicked
 */

import { describe, it, expect, vi, afterEach } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import LoginForm from './LoginForm';
import { MemoryRouter } from 'react-router-dom';
import api from '../utils/api';

expect.extend(matchers);

describe('LoginForm Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should handle username typing correctly', async () => {
    render(<LoginForm login={() => {}} />, { wrapper: MemoryRouter });

    const emailInput = await screen.getByLabelText('Email');
    await userEvent.type(emailInput, 'johndoe@mail.com');

    expect(emailInput).toHaveValue('johndoe@mail.com');
  });

  it('should handle password typing correctly', async () => {
    render(<LoginForm login={() => {}} />, { wrapper: MemoryRouter });

    const passwordInput = await screen.getByLabelText('Password');
    await userEvent.type(passwordInput, '123456');

    expect(passwordInput).toHaveValue('123456');
  });

  it('should call login function when login button is clicked', async () => {
    // spy
    const spy = vi.spyOn(api, 'login');

    render(<LoginForm login={api.login} />, { wrapper: MemoryRouter });

    const emailInput = await screen.getByLabelText('Email');
    const passwordInput = await screen.getByLabelText('Password');
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    await userEvent.type(emailInput, 'johndoe@mail.com');
    await userEvent.type(passwordInput, '123456');
    await userEvent.click(loginButton);

    await waitFor(() => {
      expect(spy).toHaveBeenCalledWith({
        email: 'johndoe@mail.com',
        password: '123456',
      });
    });
  });
});
