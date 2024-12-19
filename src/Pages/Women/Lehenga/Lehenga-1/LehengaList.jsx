import React, { createContext, useContext, useState,useMemo } from 'react';
import LehengaCard from './LehengaCard';
import Filter from '../../../Filter';

// Create the context
const LehengaContext = createContext();

// Custom hook to use the Lehenga context
export const useLehengaContext = () => useContext(LehengaContext);

function LehengaList() {
    const [lists] = useState([
        {
            image: '/images/lehenga-1.webp',
            title: "Anouk Women Lehenga",
            price: "$7,000",
            category: "Festival",
            color: "White"
        },
        {
            image: '/images/lehenga-2.webp',
            title: "Harsukhi Women Lehenga",
            price: "$5,000",
            category: "Festival",
            color: "Black"
        },
        {
            image: '/images/lehenga-3.webp',
            title: "Stylum Women Lehenga",
            price: "$8,000",
            category: "Function",
            color: "Pink"
        },
        {
            image: '/images/lehenga-4.webp',
            title: "AHIKA Women Lehenga",
            price: "$9,000",
            category: "Festival",
            color: "Gray"
        },
        {
            image: '/images/lehenga-5.webp',
            title: "Ruvi Women Lehenga",
            price: "$8,500",
            category: "Festival",
            color: "Black"
        },
        {
            image: '/images/lehenga-6.webp',
            title: "LIBAS Straight Lehenga",
            price: "$7,000",
            category: "Festival",
            color: "Brown"
        },
        {
            image: '/images/lehenga-7.webp',
            title: "AHIKA Motifs Lehenga",
            price: "$11,000",
            category: "Festival",
            color: "Peach"
        },
        {
            image: '/images/lehenga-8.webp',
            title: "Lamba Creations Lehenga",
            price: "$12,000",
            category: "Function",
            color: "Yellow"
        },
        {
            image: '/images/lehenga-9.webp',
            title: "Libas Women Lehenga",
            price: "$9,000",
            category: "Function",
            color: "Lavandar"
        },
        {
            image: '/images/lehenga-10.webp',
            title: "Libas Women Lehenga",
            price: "$7,000",
            category: "Festival",
            color: "White"
        },
        {
            image: '/images/lehenga-11.webp',
            title: "Indo Era White Lehenga",
            price: "$5,000",
            category: "Festival",
            color: "Pink"
        },
        {
            image: '/images/lehenga-12.webp',
            title: "Lamba Creations Lehenga",
            price: "$7,000",
            category: "Festival",
            color: "White"
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
      return lists.filter((product) => {
        const productPrice = Number(product.price.replace(/[$,]/g, ''));
        const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
          const [min, max] = range.split('-').map(Number);
          return productPrice >= min && productPrice < max;
        });
        const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
        return isPriceMatch && isCategoryMatch && isColorMatch;
      });
    }, [selectedPrices, selectedCategories, selectedColors, lists]);

    return (
        <LehengaContext.Provider  value={{ lists: filteredProducts }} >
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
            <LehengaCard lists={filteredProducts} /> {/* Pass filtered products here */}
          </div>
        </div>
      </div>
        </LehengaContext.Provider>
    );
}

export default LehengaList;
