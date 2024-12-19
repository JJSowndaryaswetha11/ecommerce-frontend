import React from 'react'
import { useContext,createContext,useState,useMemo } from 'react';
import Filter from '../../../Filter';
import ShortsCard from './ShortsCard';
const ShortsContext = createContext();

// Custom hook to use the JeansContext
export const useShortsContext = () => useContext(ShortsContext);
function ShortsList() {
    const [Shorts] = useState([
        {
            image: '/images/shorts-1.webp',
            title: "Anouk Men Shorts",
            price: "$7,000",
            category: "Casual",
            color: "Blue"
        },
        {
            image: '/images/shorts-2.webp',
            title: "Harsukhi Straight Shorts",
            price: "$5,000",
            category: "Casual",
            color: "Brown"
        },
        {
            image: '/images/shorts-3.webp',
            title: "Stylum Men Shorts",
            price: "$8,000",
            category: "Casual",
            color: "Purple"
        },
        {
            image: '/images/shorts-4.webp',
            title: "AHIKA Men Shorts",
            price: "$9,000",
            category: "Casual",
            color: "Green"
        },
        {
            image: '/images/Shorts-5.webp',
            title: "Ruvi Men Shorts",
            price: "$8,500",
             category: "Casual",
            color: "Black"
        },
        {
            image: '/images/shorts-6.webp',
            title: "LIBAS Shorts",
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
        return Shorts.filter((product) => {
            const productPrice = Number(product.price.replace(/[$,]/g, ''));
            const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
                const [min, max] = range.split('-').map(Number);
                return productPrice >= min && productPrice < max;
            });
            const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
            const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
            return isPriceMatch && isCategoryMatch && isColorMatch;
        });
    }, [selectedPrices, selectedCategories, selectedColors,Shorts]);


  return (
    <ShortsContext.Provider value={{Shorts:filteredProducts }}>
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
                        <ShortsCard Shorts={filteredProducts} />
                    </div>
                </div>
            </div>
        </div>
       </ShortsContext.Provider>
  )
}

export default ShortsList