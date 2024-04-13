import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Importe o hook useParams
import api from '../../services/api';
import { Link } from 'react-router-dom';
import '../../styles/Pokemon.css';
import '../../styles/Types.css';

export default function findCards() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { CardsName } = useParams(); // Use o hook useParams para acessar o parâmetro pokemonName

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cards, setCards] = useState(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await api.get(`/cards/${CardsName}`);
        setCards(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching Hearthstone Card details:', error);
      }
    }
    fetchCards();
  }, [CardsName]); // Certifique-se de incluir pokemonName como uma dependência para que o efeito seja reexecutado quando o nome do Pokémon mudar

  if (!cards) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-details">
      <h2>{cards.name}</h2>
      <img src={cards.sprites.front_default} alt="Hearthstone Card" />
      <p>
        Type:
          {cards.types.map((type, index) => (
            <span className={`${type.type.name}`} 
            style={{padding: "5px", margin: "5px", borderRadius: "5px"}}
            key={type.type.name}>
              {type.type.name} 
            </span>
          ))}
      </p>
      <Link to="/" className="back-button">Voltar</Link>
    </div>
  );
}
