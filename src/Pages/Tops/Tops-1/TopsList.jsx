import React, { createContext, useContext, useState,useMemo } from 'react';
import Filter from '../../Filter';
import TopsCard from '../Tops-1/TopsCard';

// Create the context
const TopsContext = createContext();

// Custom hook to use the Tops context
export const useTopsContext = () => useContext(TopsContext);

function TopsList() {
    const [tops] = useState([
        {
            image: '/images/tops-1.webp',
            title: "Anouk Women Tops",
            price: "$7,000",
             category: "Casual",
            color: "White"
        },
        {
            image: '/images/tops-2.webp',
            title: "Harsukhi Women tops",
            price: "$5,000",
             category: "Party",
            color: "Black"
        },
        {
            image: '/images/tops-3.webp',
            title: "Stylum Women tops",
            price: "$8,000",
            category: "Casual",
            color: "Brown"
        },
        {
            image: '/images/tops-4.webp',
            title: "AHIKA Women tops",
            price: "$9,000",
            category: "Formal",
            color: "White"
        },
        {
            image: '/images/tops-5.webp',
            title: "Ruvi Women tops",
            price: "$8,500",
            category: "Formal",
            color: "Red"
        },
        {
            image: '/images/tops-6.webp',
            title: "LIBAS women tops",
            price: "$7,000",
            category: "Casual",
            color: "Black"
        },
        {
            image: '/images/tops-7.webp',
            title: "AHIKA Motifs tops",
            price: "$11,000",
            category: "Casual",
            color: "Brown"
        },
        {
            image: '/images/tops-8.webp',
            title: "Lamba Creations tops",
            price: "$12,000",
             category: "Casual",
            color: "Brown"
        },
        {
            image: '/images/tops-9.webp',
            title: "Libas Women tops",
            price: "$9,000",
             category: "Casual",
            color: "Brown"
        },
        {
            image: '/images/tops-10.webp',
            title: "Libas Women tops",
            price: "$7,000",
             category: "Casual",
            color: "Black"
        },
        {
            image: '/images/tops-11.webp',
            title: "Indo Era white tops",
            price: "$5,000",
             category: "Casual",
            color: "Brown"
        },
        {
            image: '/images/tops-12.webp',
            title: "Lamba Creations tops",
            price: "$7,000",
             category: "Casual",
            color: "Black"
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
      return tops.filter((product) => {
        const productPrice = Number(product.price.replace(/[$,]/g, ''));
        const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
          const [min, max] = range.split('-').map(Number);
          return productPrice >= min && productPrice < max;
        });
        const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
        return isPriceMatch && isCategoryMatch && isColorMatch;
      });
    }, [selectedPrices, selectedCategories, selectedColors, tops]);


    return (
        <TopsContext.Provider value={{ tops: filteredProducts }}>
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
            <TopsCard lists={filteredProducts} /> {/* Pass filtered products here */}
          </div>
        </div>
      </div>
        </TopsContext.Provider>
    );
}

export default TopsList;
