import React, { createContext, useContext, useState } from 'react';
import BrandCardList from './BrandCardList';

const BrandContext = createContext();

// Custom hook to use the BrandContext
export const useBrandContext = () => useContext(BrandContext);

function BrandCardImage() {
  const [brand] = useState([
    { id:1, image: '/images/Brand-seller1.jpeg', title: "Georgette Anarkali" },
    {  id:2,image: '/images/Brand-seller2.jpeg', title: "Flowy maxi" },
    { id:3,image: '/images/Brand-seller3.jpeg', title: "sweatshirts" },
    {id:4, image: '/images/Brand-seller4.jpeg', title: "slip dress" }
  ]);

  return (
    <BrandContext.Provider value={{ brand }}>
      <div>
        <BrandCardList />
      </div>
    </BrandContext.Provider>
  );
}

export default BrandCardImage;
