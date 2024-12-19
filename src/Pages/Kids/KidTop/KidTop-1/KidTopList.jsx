import React, { createContext, useContext, useState,useMemo} from 'react';
import Filter from '../../../Filter';
import KidTopCard from './KidTopCard';

const TopsContext = createContext();

export const useTopsContext = () => useContext(TopsContext);

function KidTopList() {
  const [Tops] = useState([
    {
      image: '/images/KidsT-1.webp',
      title: "Anouk Kids dress",
      price: "$7,000",
      category: "Casual",
      color: "Green"
    },
    {
      image: '/images/KidsT-2.webp',
      title: "Harsukhi dress",
      price: "$5,000",
      category: "Casual",
      color: "Pink"
    },
    {
      image: '/images/KidsT-3.webp',
      title: "Stylum Kids dress",
      price: "$8,000",
      category:"Casual",
      color: "Blue"
    },
    {
      image: '/images/KidsT-4.webp',
      title: "AHIKA Kids dress",
      price: "$9,000",
      category: "Casual",
      color: "Blue"
    },
    {
      image: '/images/KidsT-5.webp',
      title: "Ruvi Kids dress",
      price: "$8,500",
      category: "Casual",
      color: "Beige"
    },
    {
      image: '/images/KidsT-6.webp',
      title: "LIBAS dress",
      price: "$7,000",
      category:"Casual",
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
        return Tops.filter((product) => {
            const productPrice = Number(product.price.replace(/[$,]/g, ''));
            const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
                const [min, max] = range.split('-').map(Number);
                return productPrice >= min && productPrice < max;
            });
            const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
            const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
            return isPriceMatch && isCategoryMatch && isColorMatch;
        });
    }, [selectedPrices, selectedCategories, selectedColors,Tops]);

  return (
    <TopsContext.Provider value={{Tops:filteredProducts }}>
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
                        <KidTopCard Tops={filteredProducts} />
                    </div>
                </div>
            </div>
        </div>
    </TopsContext.Provider>
  );
}

export default KidTopList;
