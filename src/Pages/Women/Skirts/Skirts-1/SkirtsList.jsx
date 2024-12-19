import React, { createContext, useContext, useState,useMemo} from 'react';
import Filter from '../../../Filter';
import SkirtsCard from './SkirtsCard';

// Create the context
const SkirtsContext = createContext();

// Custom hook to use the Skirts context
export const useSkirtsContext = () => useContext(SkirtsContext);

function SkirtsList() {
    const [skirts] = useState([
        {
            image: '/images/skirts-1.webp',
            title: "Anouk Women Skirts",
            price: "$7,000",
            category: "Casual",
            color: "Brown"
        },
        {
            image: '/images/Skirts-2.webp',
            title: "Harsukhi Women Skirts",
            price: "$5,000",
            category: "Casual",
            color: "Blue"
        },
        {
            image: '/images/Skirts-3.webp',
            title: "Stylum Women Skirts",
            price: "$8,000",
            category: "Casual",
            color: "Black"
        },
        {
            image: '/images/Skirts-4.webp',
            title: "AHIKA Women Skirts",
            price: "$9,000",
            category: "Casual",
            color: "White"
        },
        {
            image: '/images/Skirts-5.webp',
            title: "Ruvi Women Skirts",
            price: "$8,500",
            category: "Casual",
            color: "Yellow"
        },
        {
            image: '/images/Skirts-6.webp',
            title: "LIBAS Women Skirts",
            price: "$7,000",
            category: "Casual",
            color: "Grey"
        },
        {
            image: '/images/Skirts-7.webp',
            title: "AHIKA Motifs Skirts",
            price: "$11,000",
            category: "Casual",
            color: "Blue"
        },
        {
            image: '/images/Skirts-8.webp',
            title: "Lamba Creations tops",
            price: "$12,000",
            category: "Function",
            color: "Pink"
        },
        {
            image: '/images/Skirts-9.webp',
            title: "Libas Women Skirts",
            price: "$9,000",
             category: "Function",
            color: "Red"
        },
        {
            image: '/images/Skirts-10.webp',
            title: "Libas Women Skirts",
            price: "$7,000",
             category: "Casual",
            color: "Blue"
        },
        {
            image: '/images/Skirts-11.webp',
            title: "Indo Era white Skirts",
            price: "$5,000",
             category: "Casual",
            color: "Black"
        },
        {
            image: '/images/Skirts-12.webp',
            title: "Lamba Creations Skirts",
            price: "$7,000",
            category: "Casual",
            color: "Pink"
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
        return skirts.filter((product) => {
            const productPrice = Number(product.price.replace(/[$,]/g, ''));
            const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
                const [min, max] = range.split('-').map(Number);
                return productPrice >= min && productPrice < max;
            });
            const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
            const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
            return isPriceMatch && isCategoryMatch && isColorMatch;
        });
    }, [selectedPrices, selectedCategories, selectedColors,skirts]);


    return (
        <SkirtsContext.Provider value={{ skirts: filteredProducts }}>
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
                        <SkirtsCard skirts={filteredProducts} />
                    </div>
                </div>
            </div>
        </SkirtsContext.Provider>
    );
}

export default SkirtsList;
