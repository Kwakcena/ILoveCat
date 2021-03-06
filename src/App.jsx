import React, { useState } from 'react';
import Search from './Search';
import CatList from './CatList';

import CATS from '../fixtures/cats';

export default function App() {
  const [state, setState] = useState({
    breeds: '',
  });

  const { breeds } = state;

  function handleSubmit() {
    // TODO ...
  }

  function handleChange(event) {
    setState({
      ...state,
      breeds: event.target.value,
    });
  }

  return (
    <div>
      <h1>고양이 검색기</h1>
      <Search
        value={breeds}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <CatList cats={CATS} />
    </div>
  );
}
