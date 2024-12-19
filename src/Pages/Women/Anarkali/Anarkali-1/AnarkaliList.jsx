import React, { createContext, useContext, useState, useMemo } from 'react';
import AnarkaliCard from './AnarKaliCard';
import Filter from '../../../Filter';
import '../../../../Styles/Anarkali.css'

// Create a context
const AnarkaliContext = createContext();

// Custom hook to use the AnarkaliContext
export const useAnarkaliContext = () => useContext(AnarkaliContext);

function AnarkaliList() {
  const [anarkalis] = useState([
    {
      image: '/images/anarkali-1.webp',
      title: "Anouk Women Anarkali",
      price: "$7,000",
      category: "Festival",
      color: "Lavendar"
    },
    {
      image: '/images/anarkali-2.webp',
      title: "Harsukhi Straight Anarkali",
      price: "$5,000",
      category: "Festival",
      color: "Blue"
    },
    {
      image: '/images/anarkali-3.webp',
      title: "Stylum Women Anarkali",
      price: "$8,000",
      category: "Festival",
      color: "White"
    },
    {
      image: '/images/anarkali-4.webp',
      title: "AHIKA Women Anarkali",
      price: "$9,000",
      category: "Casual",
      color: "Green"
    },
    {
      image: '/images/anarkali-5.webp',
      title: "Ruvi Women Anarkali",
      price: "$8,500",
      category: "Function",
      color: "Green"
    },
    {
      image: '/images/anarkali-6.webp',
      title: "LIBAS Straight Anarkali",
      price: "$7,000",
      category: "Function",
      color: "Red"
    },
    {
      image: '/images/anarkali-7.webp',
      title: "AHIKA Motifs Anarkali",
      price: "$11,000",
      category: "Casual",
      color: "Blue"
    },
    {
      image: '/images/anarkali-8.webp',
      title: "Lamba Creations Anarkali",
      price: "$12,000",
      category: "Function",
      color: "Brown"
    },
    {
      image: '/images/anarkali-9.webp',
      title: "Libas Women Anarkali",
      price: "$9,000",
      category: "Function",
      color: "Indigo"
    },
    {
      image: '/images/anarkali-10.webp',
      title: "Libas Lavendar Anarkali",
      price: "$7,000",
      category: "Casual",
      color: "Black"
    },
    {
      image: '/images/anarkali-11.webp',
      title: "Indo Era Black Anarkali",
      price: "$5,000",
      category: "Function",
      color: "Black"
    },
    {
      image: '/images/anarkali-12.webp',
      title: "Lamba Creations Anarkali",
      price: "$7,000",
      category: "Festival",
      color: "Blue"
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
    return anarkalis.filter((product) => {
      const productPrice = Number(product.price.replace(/[$,]/g, ''));
      const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
        const [min, max] = range.split('-').map(Number);
        return productPrice >= min && productPrice < max;
      });
      const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
      return isPriceMatch && isCategoryMatch && isColorMatch;
    });
  }, [selectedPrices, selectedCategories, selectedColors, anarkalis]);

  return (
    <AnarkaliContext.Provider value={{ anarkalis: filteredProducts }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-3 col-md-3"> {/* Adjusted for responsiveness */}
            <Filter
              onPriceChange={handlePriceChange}
              onCategoryChange={handleCategoryChange}
              onColorChange={handleColorChange}
            />
          </div>
          <div className="col-12 col-xl-9 col-md-9"> {/* Responsive card layout */}
            <AnarkaliCard anarkalis={filteredProducts} /> {/* Pass filtered products here */}
          </div>
        </div>
      </div>
    </AnarkaliContext.Provider>
  );
}

export default AnarkaliList;
