import React, { createContext, useContext, useState,useMemo } from 'react';
import Filter from '../../../Filter';
import TshirtCard from './TshirtCard';

// Create a context
const TshirtContext = createContext();

// Custom hook to use the TshirtContext
export const useTshirtContext = () => useContext(TshirtContext);

function TshirtList() {
    const [Tshirt] = useState([
        {
            image: '/images/T-shirt1.webp',
            title: "Anouk Men Shirt",
            price: "$7,000",
            category: "Casual",
            color: "Green"

        },
        {
            image: '/images/T-shirt2.webp',
            title: "Harsukhi Straight Shirt",
            price: "$5,000",
            category: "Casual",
            color: "Beige"
        },
        {
            image: '/images/T-shirt3.webp',
            title: "Stylum Men Shirt",
            price: "$8,000",
            category: "Casual",
            color: "Brown"
        },
        {
            image: '/images/T-shirt4.webp',
            title: "AHIKA Men Shirt",
            price: "$9,000",
            category: "Casual",
            color: "White"
        },
        {
            image: '/images/T-shirt-5.webp',
            title: "Ruvi Men Shirt",
            price: "$8,500",
            category: "Casual",
            color: "Indigo"
        },
        {
            image: '/images/T-shirt6.webp',
            title: "LIBAS Straight Shirt",
            price: "$7,000",
             category: "Casual",
            color: "Brown"
        }
    ]);
    const [selectedPrices, setSelectedPrices] = useState([]);
      const [selectedCategories, setSelectedCategories] = useState([]);
      const [selectedColors, setSelectedColors] = useState([]);
  
      const handlePriceChange = (prices) => {
          setSelectedPrices(prices);
      };
  
      const handleCategoryChange = (categories) => {
          setSelectedCategories(categories);
      };
  
      const handleColorChange = (colors) => {
          setSelectedColors(colors);
      };
  
      const filteredProducts = useMemo(() => {
          return Tshirt.filter((product) => {
              const productPrice = Number(product.price.replace(/[$,]/g, ''));
              const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
                  const [min, max] = range.split('-').map(Number);
                  return productPrice >= min && productPrice < max;
              });
              const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
              const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
              return isPriceMatch && isCategoryMatch && isColorMatch;
          });
      }, [selectedPrices, selectedCategories, selectedColors,Tshirt]);

    return (
        <TshirtContext.Provider value={{Tshirt: filteredProducts }}>
        <div>
        <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-3 col-md-3">
                        <Filter
                            onPriceChange={handlePriceChange}
                            onCategoryChange={handleCategoryChange}
                            onColorChange={handleColorChange}
                        />
                    </div>
                    <div className="col-12 col-xl-9 col-md-9">
                        <TshirtCard Tshirt={filteredProducts} />
                    </div>
                </div>
            </div>
        </div>
        </TshirtContext.Provider>
    );
}

export default TshirtList;
