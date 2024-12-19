import React from 'react'
import { useState,useContext,createContext,useMemo } from 'react';
import Filter from '../../../Filter';
import ShirtCard from './ShirtCard';
// Create a context
const ShirtContext = createContext();

// Custom hook to use the SuitContext
export const useShirtContext = () => useContext(ShirtContext);
function ShirtList() {
    const [Shirts] = useState([
        {
          image: '/images/Shirt-1.webp',
          title: "Anouk Men Shirt",
          price: "$7,000",
          category: "Casual",
          color: "Purple"
        },
        {
          image: '/images/Shirt-2.webp',
          title: "Harsukhi Straight Shirt",
          price: "$5,000",
          category: "Formal",
          color: "White"
        },
        {
          image: '/images/Shirt-3.webp',
          title: "Stylum Men Shirt",
          price: "$8,000",
          category: "Formal",
          color: "Grey"
        },
        {
          image: '/images/Shirt-4.webp',
          title: "AHIKA Men Shirt",
          price: "$9,000",
          category: "Casual",
          color: "Green"
        },
        {
          image: '/images/Shirt-5.webp',
          title: "Ruvi Men Shirt",
          price: "$8,500",
          category: "Casual",
          color: "Black"
        },
        {
          image: '/images/Shirt-6.webp',
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
          return Shirts.filter((product) => {
              const productPrice = Number(product.price.replace(/[$,]/g, ''));
              const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
                  const [min, max] = range.split('-').map(Number);
                  return productPrice >= min && productPrice < max;
              });
              const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
              const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
              return isPriceMatch && isCategoryMatch && isColorMatch;
          });
      }, [selectedPrices, selectedCategories, selectedColors,Shirts]);
  return (
    <ShirtContext.Provider value={{Shirts: filteredProducts }}>
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
                        <ShirtCard Shirts={filteredProducts} />
                    </div>
                </div>
            </div>
    </div>
  </ShirtContext.Provider>
  )
}

export default ShirtList