import React from 'react'
import { useContext,createContext,useState ,useMemo} from 'react';
import Filter from '../../../Filter';
import BoyCard from './BoyCard';
const BoyContext = createContext();

// Custom hook to use the JeansContext
export const useBoyContext = () => useContext(BoyContext)
function BoyList() {
    const [Boys] = useState([
        {
            image: '/images/boy-1.webp',
            title: "Anouk kids shirt",
            price: "$7,000",
            category: "Casual",
            color: "White"
        },
        {
            image: '/images/boy-2.webp',
            title: "Harsukhi shirt",
            price: "$5,000",
            category: "Casual",
            color: "Indigo"
        },
        {
            image: '/images/boy-3.webp',
            title: "Stylum kids shirt",
            price: "$8,000",
            category: "Casual",
            color: "Green"
        },
        {
            image: '/images/boy-4.webp',
            title: "AHIKA Kids shirt",
            price: "$9,000",
            category: "Casual",
            color: "Indigo"
        },
        {
            image: '/images/boy-5.webp',
            title: "Ruvi Kids shirt",
            price: "$8,500",
            category: "Casual",
            color: "Green"
        },
        {
            image: '/images/boy-6.webp',
            title: "LIBAS shirt",
            price: "$7,000",
            category: "Casual",
            color: "Grey"
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
        return Boys.filter((product) => {
            const productPrice = Number(product.price.replace(/[$,]/g, ''));
            const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
                const [min, max] = range.split('-').map(Number);
                return productPrice >= min && productPrice < max;
            });
            const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
            const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
            return isPriceMatch && isCategoryMatch && isColorMatch;
        });
    }, [selectedPrices, selectedCategories, selectedColors,Boys]);
  return (
    <BoyContext.Provider  value={{Boys:filteredProducts }}>
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
                        <BoyCard Boys={filteredProducts} />
                    </div>
                </div>
            </div>
        </div>
    </BoyContext.Provider>
  )
}

export default BoyList