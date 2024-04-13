import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import '../../styles/Home.css';
import '../../styles/Types.css';

export default function Home() {
  const [hearthstoneCards, setHearthstoneCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await api.get('/cards');
        const results = response.data.results;

        if (results && results.length > 0) {
          const hearthstoneCardsData = await Promise.all(
            results.map(async (card) => {
              const cardResponse = await api.get(card.url);
              return cardResponse.data;
            })
          );

          setHearthstoneCards(hearthstoneCardsData);
          setLoading(false);
        } else if (results === undefined) {
          console.error('Results are undefined.');
          setLoading(false);
        } else {
          console.error('Results are empty.');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching Hearthstone cards:', error);
        setLoading(false);
      }
    }
    fetchCards();
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {loading && (
        <div className="loading-overlay">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'row',
          flexWrap: 'wrap',
          opacity: loading ? 0.5 : 1,
          pointerEvents: loading ? 'none' : 'auto',
        }}
      >
        {hearthstoneCards.map((card, index) => (
          <Link
            key={index}
            to={`/cards/${card.name}`}
            className={`cards-pkm ${card.types[0].type.name}`}
          >
            <div>
              <img src={card.sprites.front_default} alt="Hearthstone Sprite" />
              <p className='nameHearthstone'>{card.name.toUpperCase()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
