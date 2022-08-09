// __tests__/CheckboxWithLabel-test.js
import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
// import CheckboxWithLabel from '../CheckboxWithLabel';
import SignIn from '../components/sign-in/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('SigIn', () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );

  it('Check if the input value is correct', () => {
    fireEvent.change(screen.getByTestId('userName'), {
      target: { value: 'Juan' },
    });

    expect(screen.getAllByDisplayValue('Juan')).toBeTruthy();
  });
});
