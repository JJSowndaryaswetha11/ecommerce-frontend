import React, { createContext, useContext, useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import Filter from '../../../Filter';

const ProductContext = createContext();
export const useProductContext = () => useContext(ProductContext);

function ProductList() {
  const [products] = useState([
    {
      image: '/images/shopping.jpeg',
      title: "Red Hand Printed Saree",
      price: "$2,000",
      alt: "$7,000",
      category: "Saree",
      color: "Brown"
     
    },
    {
      image: '/images/shopping2.jpeg',
      title: "Orange Chiffon Saree",
      price: "$1,000",
      alt: "$5,000",
      category: "Formal",
      color: "Orange"
    },
    {
      image: '/images/shopping3.jpg',
      title: "White-Pink Chiffon Saree",
      price: "$3,000",
      alt: "$8,000",
      category: "Party",
            color: "Pink"
    },
    {
      image: '/images/shopping4.jpg',
      title: "Light Pink Organza Silk Saree",
      price: "$9,000",
      alt: "$9,000",
      category: "Festival",
            color: "Beige"
    },
    {
      image: '/images/shopping5.jpg',
      title: "Grey Golden Zari Linen Saree",
      price: "$8,500",
      alt: "$8,500",
      category: "Function",
      color: "Grey"

    },
    {
      image: '/images/shopping6.jpg',
      title: "Green Zari Cotton Tissue Saree",
      price: "$7,000",
      alt: "$7,000",
      category: "Casual",
            color: "Green"
    },
    {
      image: '/images/shopping7.jpg',
      title: "Zari Linen Saree",
      price: "$11,000",
      alt: "$11,000",
      category: "Casual",
            color: "Beige"
    },
    {
      image: '/images/shopping8.jpg',
      title: "Fuchsia Hand Embroidered Saree",
      price: "$12,000",
      category: "Casual",
            color: "Pink"
    },
    {
      image: '/images/shopping9.jpg',
      title: "Beige Organza Silk Saree",
      price: "$9,000",
      category: "Casual",
            color: "Beige"
    },
    {
      image: '/images/shopping10.jpg',
      title: "Magenta Chiffon Saree",
      price: "$7,000",
      category: "Casual",
            color: "Pink"
    },
    {
      image: '/images/shopping11.jpg',
      title: "Indigo Cotton Mul Saree",
      price: "$5,000",
      category: "Formal",
            color: "Indigo"
    },
    {
      image: '/images/shopping12.jpg',
      title: "Yellow Hand Painted Chiffon Saree",
      price: "$7,000",
      category: "Formal",
            color: "Yellow"
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
    return products.filter((product) => {
      const productPrice = Number(product.price.replace(/[$,]/g, ''));
      const isPriceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
        const [min, max] = range.split('-').map(Number);
        return productPrice >= min && productPrice < max;
      });
      const isCategoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const isColorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
      return isPriceMatch && isCategoryMatch && isColorMatch;
    });
  }, [selectedPrices, selectedCategories, selectedColors, products]);

  return (
    <ProductContext.Provider value={{ products: filteredProducts }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-3 col-md-3"> {/* Adjusted for responsiveness */}
            <Filter  onPriceChange={handlePriceChange} onCategoryChange={handleCategoryChange} onColorChange={handleColorChange} />
          </div>
          <div className="col-12 col-xl-9 col-md-9"> {/* Responsive card layout */}
            <ProductCard products={filteredProducts} /> {/* Pass filtered products here */}
          </div>
        </div>
      </div>
    </ProductContext.Provider>
  );
}

export default ProductList;
