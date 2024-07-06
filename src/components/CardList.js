// src/components/CardList.js
import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import CardItem from './CardItem';
import data from '../data.json';

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data);
  }, []);

  return (
    <Grid container spacing={2}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CardItem {...card} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardList;
