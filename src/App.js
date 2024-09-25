// src/App.js

import React, { useState } from 'react';
import TileCard from './components/TileCard';
import Modal from './components/Modal';
import InfoSection from './components/InfoSection'; // Importing InfoSection
import './App.css';
import { FaInstagram } from 'react-icons/fa'; // Still needed if InfoSection uses it internally

// Importing images from assets
import LiamVan from './assets/LiamVan.png';
import Image2 from './assets/LiamVan.png';
import Image3 from './assets/LiamVan.png';
import Image4 from './assets/LiamVan.png';
import Image5 from './assets/LiamVan.png';
import Image6 from './assets/LiamVan.png';
import Image7 from './assets/LiamVan.png';
import Image8 from './assets/LiamVan.png';
import Image9 from './assets/LiamVan.png';
import Image10 from './assets/LiamVan.png';
import Image11 from './assets/LiamVan.png';
import Image12 from './assets/LiamVan.png';

// Sample data for tiles
const tileData = [
  {
    id: 1,
    title: 'Liam Van',
    description: 'Description for Liam Van.',
    content: 'Detailed information about Liam Van.',
    image: LiamVan,
  },
  {
    id: 2,
    title: 'Image 2',
    description: 'Description for Image 2.',
    content: 'Detailed information about Image 2.',
    image: Image2,
  },
  {
    id: 3,
    title: 'Image 3',
    description: 'Description for Image 3.',
    content: 'Detailed information about Image 3.',
    image: Image3,
  },
  {
    id: 4,
    title: 'Image 4',
    description: 'Description for Image 4.',
    content: 'Detailed information about Image 4.',
    image: Image4,
  },
  {
    id: 5,
    title: 'Image 5',
    description: 'Description for Image 5.',
    content: 'Detailed information about Image 5.',
    image: Image5,
  },
  {
    id: 6,
    title: 'Image 6',
    description: 'Description for Image 6.',
    content: 'Detailed information about Image 6.',
    image: Image6,
  },
  {
    id: 7,
    title: 'Image 7',
    description: 'Description for Image 7.',
    content: 'Detailed information about Image 7.',
    image: Image7,
  },
  {
    id: 8,
    title: 'Image 8',
    description: 'Description for Image 8.',
    content: 'Detailed information about Image 8.',
    image: Image8,
  },
  {
    id: 9,
    title: 'Image 9',
    description: 'Description for Image 9.',
    content: 'Detailed information about Image 9.',
    image: Image9,
  },
  {
    id: 10,
    title: 'Image 10',
    description: 'Description for Image 10.',
    content: 'Detailed information about Image 10.',
    image: Image10,
  },
  {
    id: 11,
    title: 'Image 11',
    description: 'Description for Image 11.',
    content: 'Detailed information about Image 11.',
    image: Image11,
  },
  {
    id: 12,
    title: 'Image 12',
    description: 'Description for Image 12.',
    content: 'Detailed information about Image 12.',
    image: Image12,
  },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to open the modal with selected card details
  const handleOpenModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
    document.body.classList.add('modal-open'); // Prevent background scrolling
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedCard(null);
    setIsModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  // Function to handle search input changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter tiles based on search term
  const filteredTiles = tileData.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      {/* Header Section */}
      <header className="app-header">
        <h1>SheerIce Gallery</h1>
        <input
          type="text"
          placeholder="Search tiles..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </header>

      {/* InfoSection Component */}
      <InfoSection /> {/* <-- InfoSection is used here */}

      {/* Main Content: TileCards Grid */}
      <main>
        <div className="grid-container">
          {filteredTiles.map((card) => (
            <TileCard
              key={card.id}
              image={card.image}
              onClick={() => handleOpenModal(card)}
            />
          ))}
        </div>
      </main>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedCard ? selectedCard.title : ''}
        content={selectedCard ? selectedCard.content : ''}
      />
    </div>
  );
}

export default App;
