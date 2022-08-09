/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
// __tests__/CheckboxWithLabel-test.js
import React from 'react';
import { cleanup, render } from '@testing-library/react';
// import CheckboxWithLabel from '../CheckboxWithLabel';

import Button from '../components/buttons/Button';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe('Ship', () => {
  it('Check if the Components are mounted', () => {
    const { rerender, container } = render(<Button active={false} />);

    expect(container.firstChild.classList.contains('active')).toBeFalsy();

    rerender(<Button active={true} />);

    expect(container.firstChild.classList.contains('active')).toBeTruthy();
  });
});
