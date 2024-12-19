import React, { createContext, useContext, useState,useMemo } from 'react';
import Filter from '../../../Filter';
import JeansCard from './JeansCard';


const JeansContext = createContext();


export const useJeansContext = () => useContext(JeansContext);

function JeansList() {
    const [Jeans] = useState([
        {
            image: '/images/Jean-1.webp',
            title: "Anouk Men Jeans",
            price: "$7,000",
            category: "Casual",
            color: "Blue"
        },
        {
            image: '/images/Jean-2.webp',
            title: "Harsukhi Straight Jeans",
            price: "$5,000",
            category: "Casual",
            color: "Black"
        },
        {
            image: '/images/Jean-3.webp',
            title: "Stylum Men Jeans",
            price: "$8,000",
            category: "Casual",
            color: "Blue"
        },
        {
            image: '/images/Jean-4.webp',
            title: "AHIKA Men Jeans",
            price: "$9,000",
            category: "Casual",
            color: "Black"
        },
        {
            image: '/images/Jean-5.webp',
            title: "Ruvi Men Jeans",
            price: "$8,500",
            category: "Casual",
            color: "Black"
        },
        {
            image: '/images/Jean-6.webp',
            title: "LIBAS Straight Jeans",
            price: "$7,000",
            category: "Casual",
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
        return Jeans.filter((product) => {
            const productPrice = Number(product.price.replace(/[$,]/g, ''));
            const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
                const [min, max] = range.split('-').map(Number);
                return productPrice >= min && productPrice < max;
            });
            const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
            const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
            return isPriceMatch && isCategoryMatch && isColorMatch;
        });
    }, [selectedPrices, selectedCategories, selectedColors,Jeans]);
    return (
        <JeansContext.Provider  value={{Jeans:filteredProducts }}>
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
                        <JeansCard Tshirt={filteredProducts} />
                    </div>
                </div>
            </div>
        </div>
        </JeansContext.Provider>
    );
}

export default JeansList;