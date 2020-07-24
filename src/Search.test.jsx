import React from 'react';

import { render } from '@testing-library/react';

import Search from './Search';

describe('Search', () => {
  function renderSearch() {
    return render((
      <Search />
    ));
  }

  it('renders input control', () => {
    const { getByLabelText } = renderSearch();

    expect(getByLabelText('고양이 검색')).toBeInTheDocument();
  });

  it('renders "search" button', () => {
    const { getByText } = renderSearch();

    expect(getByText('search')).toBeInTheDocument();
  });
});
