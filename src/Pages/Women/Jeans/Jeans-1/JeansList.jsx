import React, { createContext, useContext, useState,useMemo } from 'react';
import Filter from '../../../Filter';
import JeansCard from './JeansCard'

// Create the context
const JeansContext = createContext();

// Custom hook to use the Jeans context
export const useJeansContext = () => useContext(JeansContext);

function JeansList() {
    const [jeans] = useState([
        {
            image: '/images/jeans-1.webp',
            title: "Anouk Women Jeans",
            price: "$7,000",
            category: "Casual",
            color: "Blue"
        },
        {
            image: '/images/jeans-2.webp',
            title: "Harsukhi Women Jeans",
            price: "$5,000",
            category: "Casual",
            color: "Black"
        },
        {
            image: '/images/jeans-3.webp',
            title: "Stylum Women Jeans",
            price: "$8,000",
            category: "Casual",
            color: "Blue"
        },
        {
            image: '/images/jeans-4.webp',
            title: "AHIKA Women Jeans",
            price: "$9,000",
            category: "Casual",
            color: "Indigo"
        },
        {
            image: '/images/jeans-5.webp',
            title: "Ruvi Women Jeans",
            price: "$8,500",
            category: "Casual",
            color: "Blue"
        },
        {
            image: '/images/jeans-6.webp',
            title: "LIBAS Straight Jeans",
            price: "$7,000",
            category: "Casual",
            color: "Indigo"
        },
        {
            image: '/images/jeans-7.webp',
            title: "AHIKA Motifs Jeans",
            price: "$11,000",
            category: "Casual",
            color: "Beige"
        },
        {
            image: '/images/jeans-8.webp',
            title: "Lamba Creations Jeans",
            price: "$12,000",
            category: "Casual",
            color: "Blue"
        },
        {
            image: '/images/jeans-9.webp',
            title: "Libas Women Jeans",
            price: "$9,000",
            category: "Casual",
            color: "Black"
        },
        {
            image: '/images/jeans-10.webp',
            title: "Libas Women Jeans",
            price: "$7,000",
            category: "Casual",
            color: "Blue"
        },
        {
            image: '/images/jeans-11.webp',
            title: "Indo Era White Jeans",
            price: "$5,000",
            category: "Casual",
            color: "Blue"
        },
        {
            image: '/images/jeans-12.webp',
            title: "Lamba Creations Jeans",
            price: "$7,000",
            category: "Casual",
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
      return jeans.filter((product) => {
        const productPrice = Number(product.price.replace(/[$,]/g, ''));
        const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
          const [min, max] = range.split('-').map(Number);
          return productPrice >= min && productPrice < max;
        });
        const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
        return isPriceMatch && isCategoryMatch && isColorMatch;
      });
    }, [selectedPrices, selectedCategories, selectedColors,jeans]);

    return (
        <JeansContext.Provider value={{ jeans: filteredProducts }}>
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
            <JeansCard jeans={filteredProducts} /> {/* Pass filtered products here */}
          </div>
        </div>
      </div>
        </JeansContext.Provider>
    );
}

export default JeansList;
