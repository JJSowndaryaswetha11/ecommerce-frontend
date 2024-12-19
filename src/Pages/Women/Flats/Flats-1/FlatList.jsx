import React, { createContext, useContext, useState,useMemo } from 'react';
import Filter from '../../../Filter';
import FlatCard from './FlatCard';

// Create the context
const FlatContext = createContext();

// Custom hook to use the Flat context
export const useFlatContext = () => useContext(FlatContext);

function FlatList() {
    const [Flats] = useState([
        {
            image: '/images/Flats-1.webp',
            title: "Anouk Women Anarkali",
            price: "$7,000",
            category: "Casual",
            color: "White"
        },
        {
            image: '/images/Flats-2.webp',
            title: "Harsukhi Straight Anarkali",
            price: "$5,000",
            category: "Casual",
            color: "White"
        },
        {
            image: '/images/Flats-3.webp',
            title: "Stylum Women Anarkali",
            price: "$8,000",
            category: "Casual",
            color: "White"
        },
        {
            image: '/images/Flats-4.webp',
            title: "AHIKA Women Anarkali",
            price: "$9,000",
            category: "Casual",
            color: "Sandal"
        },
        {
            image: '/images/Flats-5.webp',
            title: "Ruvi Women Anarkali",
            price: "$8,500",
            category: "Casual",
            color: "Sandal"
        },
        {
            image: '/images/Flats-6.webp',
            title: "LIBAS Straight Anarkali",
            price: "$7,000",
            category: "Casual",
            color: "Black"
        },
        {
            image: '/images/Flats-3.webp',
            title: "AHIKA Motifs Anarkali",
            price: "$11,000",
            category: "Casual",
            color: "White"
        },
        {
            image: '/images/Flats-1.webp',
            title: "Lamba Creations Anarkali",
            price: "$12,000",
            category: "Casual",
            color: "White"
        },
        {
            image: '/images/Flats-4.webp',
            title: "Libas Women Anarkali",
            price: "$9,000",
            category: "Casual",
            color: "Sandal"
        },
        {
            image: '/images/flats-5.webp',
            title: "Libas Lavendar Anarkali",
            price: "$7,000",
            category: "Casual",
            color: "Sandal"
        },
        {
            image: '/images/flats-6.webp',
            title: "Indo Era white Anarkali",
            price: "$5,000",
            category: "Casual",
            color: "Black"
        },
        {
            image: '/images/flats-2.webp',
            title: "Lamba Creations Anarkali",
            price: "$7,000",
            category: "Casual",
            color: "Beige"
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
        return Flats.filter((product) => {
            const productPrice = Number(product.price.replace(/[$,]/g, ''));
            const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
                const [min, max] = range.split('-').map(Number);
                return productPrice >= min && productPrice < max;
            });
            const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
            const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
            return isPriceMatch && isCategoryMatch && isColorMatch;
        });
    }, [selectedPrices, selectedCategories, selectedColors,Flats]);

    return (
        <FlatContext.Provider  value={{Flats: filteredProducts }}>
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
                        <FlatCard Flats={filteredProducts} />
                    </div>
                </div>
            </div>
        </FlatContext.Provider>
    );
}

export default FlatList;
