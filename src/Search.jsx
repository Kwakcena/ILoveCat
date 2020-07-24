import React from 'react';

export default function Search() {
  return (
    <div>
      <label htmlFor="input-breeds">고양이 검색 </label>
      <input
        id="input-breeds"
        type="text"
        placeholder="고양이 종을 검색하세요"
      />
      <button
        type="button"
      >
        search
      </button>
    </div>
  );
}
