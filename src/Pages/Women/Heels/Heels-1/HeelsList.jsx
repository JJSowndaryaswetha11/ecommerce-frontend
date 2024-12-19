import React, { createContext, useContext, useState,useMemo } from 'react';
import Filter from '../../../Filter';
import HeelsCard from './HeelsCard';

// Create the context
const HeelsContext = createContext();

// Custom hook to use the Heels context
export const useHeelsContext = () => useContext(HeelsContext);

function HeelsList() {
    const [Heels] = useState([
        {
            image: '/images/Heels-1.webp',
            title: "Anouk Women Heels",
            price: "$7,000",
            category: "Party",
            color: "Beige"
        },
        {
            image: '/images/Heels-2.webp',
            title: "Harsukhi Women Heels",
            price: "$5,000",
            category: "Casual",
            color: "Sandal"
        },
        {
            image: '/images/Heels-3.webp',
            title: "Stylum Women Heels",
            price: "$8,000",
             category: "Party",
            color: "Beige"
        },
        {
            image: '/images/Heels-4.webp',
            title: "AHIKA Women Heels",
            price: "$9,000",
             category: "Party",
            color: "Black"
        },
        {
            image: '/images/Heels-5.webp',
            title: "Ruvi Women Heels",
            price: "$8,500",
             category: "Casual",
            color: "Beige"
        },
        {
            image: '/images/Heels-6.webp',
            title: "LIBAS Straight Heels",
            price: "$7,000",
             category: "Party",
            color: "Black"
        },
        {
            image: '/images/Heels-7.webp',
            title: "AHIKA Motifs Heels",
            price: "$11,000",
             category: "Party",
            color: "Black"
        },
        {
            image: '/images/Heels-8.webp',
            title: "Lamba Creations Heels",
            price: "$12,000",
             category: "Party",
            color: "White"
        },
        {
            image: '/images/Heels-9.webp',
            title: "Libas Women Heels",
            price: "$9,000",
             category: "Party",
            color: "Blue"
        },
        {
            image: '/images/Heels-10.webp',
            title: "Libas Women Heels",
            price: "$7,000",
             category: "Party",
            color: "Blue"
        },
        {
            image: '/images/Heels-11.webp',
            title: "Indo Era White Heels",
            price: "$5,000",
             category: "Casual",
            color: "White"
        },
        {
            image: '/images/Heels-12.webp',
            title: "Lamba Creations Heels",
            price: "$7,000",
             category: "Party",
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
        return Heels.filter((product) => {
            const productPrice = Number(product.price.replace(/[$,]/g, ''));
            const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
                const [min, max] = range.split('-').map(Number);
                return productPrice >= min && productPrice < max;
            });
            const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
            const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
            return isPriceMatch && isCategoryMatch && isColorMatch;
        });
    }, [selectedPrices, selectedCategories, selectedColors,Heels]);

    return (
        <HeelsContext.Provider value={{ Heels: filteredProducts }}>
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
                        <HeelsCard Heels={filteredProducts} />
                    </div>
                </div>
            </div>
        </HeelsContext.Provider>
    );
}

export default HeelsList;
