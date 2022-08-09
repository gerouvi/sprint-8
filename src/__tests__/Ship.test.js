// __tests__/CheckboxWithLabel-test.js
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
// import CheckboxWithLabel from '../CheckboxWithLabel';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ship from '../components/ship/Ship';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Ship', () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ship />} />
      </Routes>
    </BrowserRouter>
  );
  it('Check if the Components are mounted', () => {
    expect(screen.getByTestId('pilots')).toBeTruthy();
    expect(screen.getByTestId('films')).toBeTruthy();
  });
});
