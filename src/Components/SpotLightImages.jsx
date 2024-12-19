import React, { createContext, useContext, useState } from 'react';
import SpotLightList from './SpotLightList';

const SpotLightContext = createContext();

export const useSpotLight = () => useContext(SpotLightContext);

function SpotLightImages() {
  const [images] = useState([
    {id:1, image: "/images/spotlight-card1.jpg", title: "the dazzle's best seller" },
    {id:2,image: "/images/spotlight-card6.jpg", title: "Elegant Western Dress" },
    {id:3,image: "/images/spotlight-card7.jpeg", title: "saree picks" },
    {id:4,image: "/images/spotlight-card10.jpeg", title: "Traditional Wedding Sherwani" },
    {id:5, image: "/images/spotlight-card11.jpeg", title: "Stylish Formal Suit" },
    {id:6, image: "/images/spotlight-card12.jpeg", title: "Elegant Pearl jewellery" }
  ]);

  return (
    <SpotLightContext.Provider value={{ images }}>
      <SpotLightList />
    </SpotLightContext.Provider>
  );
}

export default SpotLightImages;
