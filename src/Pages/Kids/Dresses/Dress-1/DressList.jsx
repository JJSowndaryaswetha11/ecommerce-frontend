import React from 'react'
import { useContext,createContext,useState,useMemo } from 'react';
import Filter from '../../../Filter';
import DressCard from './DressCard';
const DressContext = createContext();

// Custom hook to use the JeansContext
export const useDressContext = () => useContext(DressContext)
function DressList() {
    const [Dress] = useState([
        {
            image: '/images/dress-1.webp',
            title: "Anouk kids dress",
            price: "$7,000",
            category: "Casual",
            color: "Pink"
        },
        {
            image: '/images/dress-2.webp',
            title: "Harsukhi dress",
            price: "$5,000",
            category: "Casual",
            color: "Brown"
        },
        {
            image: '/images/dress-3.webp',
            title: "Stylum kids dress",
            price: "$8,000",
             category: "Casual",
            color: "Pink"
        },
        {
            image: '/images/dress-4.webp',
            title: "AHIKA Kids dress",
            price: "$9,000",
            category: "Casual",
            color: "Black"
        },
        {
            image: '/images/dress-5.webp',
            title: "Ruvi Kids dress",
            price: "$8,500",
             category: "Casual",
            color: "Pink"
        },
        {
            image: '/images/dress-6.webp',
            title: "LIBAS dress",
            price: "$7,000",
             category: "Casual",
            color: "Lavendar"
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
        return Dress.filter((product) => {
            const productPrice = Number(product.price.replace(/[$,]/g, ''));
            const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
                const [min, max] = range.split('-').map(Number);
                return productPrice >= min && productPrice < max;
            });
            const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
            const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
            return isPriceMatch && isCategoryMatch && isColorMatch;
        });
    }, [selectedPrices, selectedCategories, selectedColors,Dress]);
  return (
    <DressContext.Provider value={{Dress:filteredProducts }}>
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
                        <DressCard Dress={filteredProducts} />
                    </div>
                </div>
            </div>
        </div>
    </DressContext.Provider>
  )
}

export default DressList