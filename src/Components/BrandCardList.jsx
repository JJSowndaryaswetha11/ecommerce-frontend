import React from 'react';
import { useBrandContext } from './BrandCardImage'; // Adjust the import path if needed
import '../Styles/BrandCard.css'
import { Link } from 'react-router-dom';
function BrandCardList() {
  const { brand } = useBrandContext();

  return (
    <>
      <h1 className='brand-heading'>BRAND PICKS</h1>
      <div className='Brand-list-images'>
        {brand.map((item, index) => (
          <div className="card brand-cards" key={index} >
            <div className="brand-card-img-wrapper">
              <Link to={`/Brand/${item.id}`}>
              <img src={item.image} className="brand-card-img-top" alt={item.title} width={400} height={350} />
              </Link>
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default BrandCardList;
