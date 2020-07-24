import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('App', () => {
  function renderApp() {
    return render((
      <App />
    ));
  }

  it('renders App title', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('고양이 검색기');
  });

  it('renders controls', () => {
    const { getByLabelText, getByText } = renderApp();

    expect(getByLabelText('고양이 검색')).toBeInTheDocument();
    expect(getByText('search')).toBeInTheDocument();
  });

  it('listens change event', () => {
    const { getByLabelText } = renderApp();

    const input = getByLabelText('고양이 검색');
    fireEvent.change(input, {
      target: {
        value: 'bengal',
      },
    });

    expect(input.value).toBe('bengal');
  });

  it('listens click event', () => {
    const { getByText } = renderApp();

    fireEvent.click(getByText('search'));
  });
});
