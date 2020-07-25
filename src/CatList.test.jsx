import React from 'react';

import { render } from '@testing-library/react';

import CatList from './CatList';

import CATS from '../fixtures/cats';

describe('CatList', () => {
  function renderCatList(cats) {
    return render((
      <CatList cats={cats} />
    ));
  }

  context('with items', () => {
    it('renders item', () => {
      const { getByText } = renderCatList(CATS);

      CATS.forEach(({ url }) => {
        expect(getByText(url)).toBeInTheDocument();
      });
    });
  });

  context('without items', () => {
    it('renders no items message', () => {
      const { getByText } = renderCatList([]);

      expect(getByText('고양이가 없어요!')).toBeInTheDocument();
    });
  });
});
