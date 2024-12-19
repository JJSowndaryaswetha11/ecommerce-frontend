import React from 'react'
import { useContext,createContext,useState,useMemo } from 'react';
import Filter from '../../../Filter';
import ShortCard from './ShortCard';
const ShortContext = createContext();

// Custom hook to use the JeansContext
export const useShortContext = () => useContext(ShortContext)
function ShortList() {
    const [Short] = useState([
        {
            image: '/images/short-1.webp',
            title: "Anouk kids Shorts",
            price: "$7,000",
            category: "Casual",
            color: "Brown"
        },
        {
            image: '/images/short-2.webp',
            title: "Harsukhi Shorts",
            price: "$5,000",
            category: "Casual",
            color: "Blue"
        },
        {
            image: '/images/short-3.webp',
            title: "Stylum kids Shorts",
            price: "$8,000",
            category: "Casual",
            color: "Blue"
        },
        {
            image: '/images/short-4.webp',
            title: "AHIKA Kids Shorts",
            price: "$9,000",
             category: "Casual",
            color: "Blue"

        },
        {
            image: '/images/short-5.webp',
            title: "Ruvi Kids Shorts",
            price: "$8,500",
             category: "Casual",
            color: "Beige"
        },
        {
            image: '/images/short-6.webp',
            title: "LIBAS Shorts",
            price: "$7,000",
             category: "Casual",
            color: "Orange"
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
        return Short.filter((product) => {
            const productPrice = Number(product.price.replace(/[$,]/g, ''));
            const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
                const [min, max] = range.split('-').map(Number);
                return productPrice >= min && productPrice < max;
            });
            const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
            const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
            return isPriceMatch && isCategoryMatch && isColorMatch;
        });
    }, [selectedPrices, selectedCategories, selectedColors,Short]);
  return (
   <ShortContext.Provider value={{Short:filteredProducts }}>
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
                        <ShortCard Short={filteredProducts} />
                    </div>
                </div>
            </div>
        </div>
   </ShortContext.Provider>
  )
}

export default ShortList