// src/App.jsx
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TileCard from './components/TileCard';
import DetailModal from './components/Modal';
import { tileData } from './data';

const App = () => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpen = (card) => {
    setSelectedCard(card);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCard(null);
  };

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {tileData.map((card) => (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <TileCard
              title={card.title}
              description={card.description}
              onClick={() => handleOpen(card)}
            />
          </Grid>
        ))}
      </Grid>

      {selectedCard && (
        <DetailModal
          open={open}
          handleClose={handleClose}
          title={selectedCard.title}
          content={selectedCard.content}
        />
      )}
    </Container>
  );
};

export default App;
