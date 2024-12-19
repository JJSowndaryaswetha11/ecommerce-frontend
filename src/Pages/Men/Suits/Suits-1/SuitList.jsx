import React, { createContext, useContext, useState,useMemo } from 'react';
import Filter from '../../../Filter';
import SuitsCard from './SuitsCard';


// Create a context
const SuitContext = createContext();

// Custom hook to use the SuitContext
export const useSuitContext = () => useContext(SuitContext);

// SuitList component that includes the SuitProvider
function SuitList() {
  // Define the suits data
  const [Suits] = useState([
    {
      image: '/images/Suit-1.webp',
      title: "Anouk Men Suits",
      price: "$7,000",
      category: "Formal",
      color: "Black"
    },
    {
      image: '/images/Suit-2.webp',
      title: "Harsukhi Straight Suits",
      price: "$5,000",
      category: "Formal",
      color: "Green"
    },
    {
      image: '/images/Suit-3.webp',
      title: "Stylum Men Suits",
      price: "$8,000",
      category: "Formal",
      color: "Black"
    },
    {
      image: '/images/Suit-4.webp',
      title: "AHIKA Men Suits",
      price: "$9,000",
      category: "Formal",
      color: "Black"
    },
    {
      image: '/images/Suit-5.webp',
      title: "Ruvi Men Suits",
      price: "$8,500",
      category: "Formal",
      color: "Black"
    },
    {
      image: '/images/Suit-6.webp',
      title: "LIBAS Straight Suits",
      price: "$7,000",
      category: "Formal",
      color: "Grey"
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
        return Suits.filter((product) => {
            const productPrice = Number(product.price.replace(/[$,]/g, ''));
            const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
                const [min, max] = range.split('-').map(Number);
                return productPrice >= min && productPrice < max;
            });
            const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
            const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
            return isPriceMatch && isCategoryMatch && isColorMatch;
        });
    }, [selectedPrices, selectedCategories, selectedColors,Suits]);

  return (
    <SuitContext.Provider value={{Suits: filteredProducts }}>
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
                        <SuitsCard Suits={filteredProducts} />
                    </div>
                </div>
            </div>
      </div>
    </SuitContext.Provider>
  );
}

export default SuitList;

