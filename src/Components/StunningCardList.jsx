import React from 'react';
import '../Styles/Stunningcard.css';
import { useStunningContext } from './StunningCardImage';
import { Link } from 'react-router-dom';

function StunningCardList() {
  const { list } = useStunningContext();

  return (
    <>
      <h3 className='stunning-heading'>STUNNING PICKS</h3>
      <div className='image-list'>
        {list.map((card) => (
          <div className="card stunning-card" key={card.id}>
            <div className="card-img-wrapper">
              <Link to={`/kurtiproduct/${card.id}`}>
                <img src={card.image} className="card-img-top" alt={card.title} width="400px" height="350px" />
              </Link>
            </div>
            <p>{card.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default StunningCardList;
