import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Search from './Search';

describe('Search', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderSearch({ value } = {}) {
    return render((
      <Search
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    ));
  }

  it('renders input control', () => {
    const value = 'bengal';
    const { getByLabelText } = renderSearch({ value });

    const input = getByLabelText('고양이 검색');
    expect(input.value).toBe(value);
  });

  it('renders "search" button', () => {
    const { getByText } = renderSearch();

    expect(getByText('search')).toBeInTheDocument();
  });

  it('listens change event', () => {
    const { getByLabelText } = renderSearch();

    const input = getByLabelText('고양이 검색');
    fireEvent.change(input, {
      target: {
        value: 'bengal',
      },
    });

    expect(handleChange).toBeCalled();
  });

  it('listens click event', () => {
    const { getByText } = renderSearch();

    fireEvent.click(getByText('search'));

    expect(handleSubmit).toBeCalled();
  });
});
