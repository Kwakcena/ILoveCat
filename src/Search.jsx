import React from 'react';

export default function Search({ value, onChange, onSubmit }) {
  return (
    <div>
      <label htmlFor="input-breeds">고양이 검색 </label>
      <input
        id="input-breeds"
        name="breeds"
        value={value}
        type="text"
        placeholder="고양이 종을 검색하세요"
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        search
      </button>
    </div>
  );
}
