// src/components/CardItem.js
import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[10],
  },
}));

const CardItem = ({ title, description, image, url }) => {
  return (
    <StyledCard>
      <CardActionArea href={url} target="_blank">
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={'black'}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}

export default CardItem;
