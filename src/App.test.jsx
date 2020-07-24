import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App title and input controls', () => {
    const { container } = render((
      <App />
    ));

    expect(container).toHaveTextContent('고양이 검색기');
  });
});
