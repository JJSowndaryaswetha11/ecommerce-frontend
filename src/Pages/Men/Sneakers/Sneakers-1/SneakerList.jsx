import React from 'react'
import { useContext,createContext,useState,useMemo } from 'react';
import Filter from '../../../Filter';
import SneakerCard from './SneakerCard';
const SneakerContext = createContext();

// Custom hook to use the JeansContext
export const useSneakerContext = () => useContext(SneakerContext);
function SneakerList() {
    const [Sneaker] = useState([
        {
            image: '/images/sneakers-1.webp',
            title: "Anouk Men sneakers",
            price: "$7,000",
            category: "Casual",
            color: "White"
        },
        {
            image: '/images/sneakers-2.webp',
            title: "Harsukhi Straight sneakers",
            price: "$5,000",
            category: "Casual",
            color: "White"
        },
        {
            image: '/images/sneakers-3.webp',
            title: "Stylum Men sneakers",
            price: "$8,000",
            category: "Casual",
            color: "Black"
        },
        {
            image: '/images/sneakers-4.webp',
            title: "AHIKA Men sneakers",
            price: "$9,000",
            category: "Casual",
            color: "Black"
        },
        {
            image: '/images/sneakers-5.webp',
            title: "Ruvi Men sneakers",
            price: "$8,500",
            category: "Casual",
            color: "Grey"
        },
        {
            image: '/images/sneakers-6.webp',
            title: "LIBAS sneakers",
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
        return Sneaker.filter((product) => {
            const productPrice = Number(product.price.replace(/[$,]/g, ''));
            const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
                const [min, max] = range.split('-').map(Number);
                return productPrice >= min && productPrice < max;
            });
            const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
            const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
            return isPriceMatch && isCategoryMatch && isColorMatch;
        });
    }, [selectedPrices, selectedCategories, selectedColors,Sneaker]);


  return (
    <SneakerContext.Provider value={{Sneaker:filteredProducts }}>
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
                        <SneakerCard Sneaker={filteredProducts} />
                    </div>
                </div>
            </div>
        </div>
    </SneakerContext.Provider>

  )
}

export default SneakerList