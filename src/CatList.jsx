import React from 'react';

import styled from '@emotion/styled';

const breakpoints = [600, 1200];

const mq = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`,
);

const CardList = styled.ul({
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: 'border-box',
  listStyle: 'none',
  [mq[0]]: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -1rem',
  },
});

const CardItem = styled.li({
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '2rem',
  [mq[0]]: {
    width: '50%',
    padding: '0 1rem',
  },
  [mq[1]]: {
    width: '33.33333%',
  },
});

const Figure = styled.figure(({ url }) => ({
  margin: 0,
  padding: 0,
  border: 0,
  height: 0,
  paddingBottom: '60%',
  backgroundColor: 'lightgray',
  backgroundImage: `url(${url})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
}));

const Image = styled.img({
  display: 'none',
});

const CardDescription = styled.div({
  flex: '1 1 auto',
  padding: '1em',
  background: 'white',

});

export default function CatList({ cats }) {
  if (!(cats || []).length) {
    return (
      <p>고양이가 없어요!</p>
    );
  }

  return (
    <CardList>
      {cats.map(({ id, url }) => (
        <CardItem key={id}>
          <Figure url={url}>
            <Image src={url} alt="" />
          </Figure>
          <CardDescription>
            {url}
          </CardDescription>
        </CardItem>
      ))}
    </CardList>
  );
}
