import React, { createContext, useContext, useState } from 'react';
import StunningCardList from './StunningCardList';

const StunningContext = createContext();
export const useStunningContext = () => useContext(StunningContext);

function StunningCardImage() {
  const [list] = useState([
    { id: 1, image: '/images/stunning-card1.jpeg', title: "Women Kurtis" },
    { id: 2, image: '/images/stunning-card2.jpeg', title: "Men's Tshirt" },
    { id: 3, image: '/images/stunning-card3.jpeg', title: "Western Wear" },
    { id: 4, image: '/images/stunning-card4.jpeg', title: "Sarees" }
  ]);
  

  return (
    <StunningContext.Provider value={{ list}}>
      <StunningCardList />
    </StunningContext.Provider>
  );
}

export default StunningCardImage;
