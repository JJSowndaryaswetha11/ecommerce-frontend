import React, { createContext, useContext, useState, useMemo } from 'react';
import KurtiCardOne from './KurtiCard';
import Filter from '../../../Filter';

// Create the context
const KurtiContext = createContext();

// Custom hook to use the Kurti context
export const useKurtiContext = () => useContext(KurtiContext);

function KurtiListOne() {
  const [list] = useState([
    {
      image: '/images/kurti-1.webp',
      title: "Anouk Women Kurta",
      price: "$7,000",
      category: "Casual",
      color: "Pink"
    },
    {
      image: '/images/kurti2.webp',
      title: "Harsukhi Straight Kurta",
      price: "$5,000",
      category: "Casual",
      color: "Black"
    },
    {
      image: '/images/kurti3.webp',
      title: "Stylum Women Kurta",
      price: "$8,000",
      category: "Festival",
      color: "White"
    },
    {
      image: '/images/kurti4.webp',
      title: "AHIKA Women Kurti",
      price: "$9,000",
      category: "Festival",
      color: "White"
    },
    {
      image: '/images/kurti5.webp',
      title: "Ruvi Women Anarkali Kurta",
      price: "$8,500",
      category: "Casual",
      color: "White"
    },
    {
      image: '/images/kurti6.webp',
      title: "LIBAS Straight Kurta",
      price: "$7,000",
      category: "Festival",
      color: "Pink"
    },
    {
      image: '/images/kurti7.webp',
      title: "AHIKA Motifs Yoke Kurta",
      price: "$11,000",
      category: "Casual",
      color: "Red"
    },
    {
      image: '/images/kurti8.webp',
      title: "Lamba Creations Women Kurta",
      price: "$12,000",
      category: "Casual",
      color: "Pink"
    },
    {
      image: '/images/kurti9.webp',
      title: "Libas Women Straight Kurta",
      price: "$9,000",
      category: "Function",
      color: "Green"
    },
    {
      image: '/images/kurti10.webp',
      title: "Libas Lavendar Straight Kurta",
      price: "$7,000",
      category: "Function",
      color: "Lavender"
    },
    {
      image: '/images/kurti11.webp',
      title: "Indo Era White Kurta",
      price: "$5,000",
      category: "Function",
      color: "White"
    },
    {
      image: '/images/kurti12.webp',
      title: "Lamba Creations Women Kurta",
      price: "$7,000",
      category: "Casual",
      color: "Red"
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
    return list.filter((product) => {
      const productPrice = Number(product.price.replace(/[$,]/g, ''));
      const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
        const [min, max] = range.split('-').map(Number);
        return productPrice >= min && productPrice < max;
      });
      const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
      return isPriceMatch && isCategoryMatch && isColorMatch;
    });
  }, [selectedPrices, selectedCategories, selectedColors, list]);

  return (
    <KurtiContext.Provider value={{ list: filteredProducts }}>
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
            <KurtiCardOne list={filteredProducts} /> {/* Pass filtered products here */}
          </div>
        </div>
      </div>
    </KurtiContext.Provider>
  );
}

export default KurtiListOne;

