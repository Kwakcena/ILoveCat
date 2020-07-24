import React from 'react';

export default function CatList({ cats }) {
  if (!(cats || []).length) {
    return (
      <p>고양이가 없어요!</p>
    );
  }

  return (
    <ul>
      {cats.map(({ id, url }) => (
        <li key={id}>
          <figure>
            <img src={url} alt="" />
          </figure>
          <div>
            {url}
          </div>
        </li>
      ))}
    </ul>
  );
}
