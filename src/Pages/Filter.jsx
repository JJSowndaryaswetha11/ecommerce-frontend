import React, { useState, useEffect } from 'react';
import '../Styles/Filter.css'
function Filter({ onPriceChange, onCategoryChange, onColorChange }) {
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const handleCheckboxChange = (setStateFunction, value) => {
    setStateFunction((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  useEffect(() => {
    if (typeof onPriceChange === 'function') {
      onPriceChange(selectedPrices);
    } else {
      console.error('onPriceChange is not a function');
    }
  }, [selectedPrices, onPriceChange]);

  useEffect(() => {
    if (typeof onCategoryChange === 'function') {
      onCategoryChange(selectedCategories);
    } else {
      console.error('onCategoryChange is not a function');
    }
  }, [selectedCategories, onCategoryChange]);

  useEffect(() => {
    if (typeof onColorChange === 'function') {
      onColorChange(selectedColors);
    } else {
      console.error('onColorChange is not a function');
    }
  }, [selectedColors, onColorChange]);

  return (
    <div className='whole-accordion' style={{ position: 'sticky', top: '0' }}>
      <div className="container-fluid">
        <h6 style={{ textAlign: 'start' }}>Filters</h6>

        {/* Accordion 1: Shop by price */}
        <div className="accordion" id="accordionExample1">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Shop by price
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample1"
            >
              <div className="accordion-body">
                {[ 2000, 4000, 6000, 8000, 10500].map((price, index) => (
                  <div className="form-check" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`checkbox1-${index + 1}`}
                      onChange={() => handleCheckboxChange(setSelectedPrices, `${price}-${price + 2000}`)}
                    />
                    <label className="form-check-label" htmlFor={`checkbox1-${index + 1}`}>
                      {`${price}-${price + 2000}`}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr style={{ width: '95%' }} />

        {/* Accordion 2: Shop by category */}
        <div className="accordion" id="accordionExample2">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                Shop by category
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample2"
            >
              <div className="accordion-body">
                {['Casual', 'Formal', 'Party', 'Festival', 'Function'].map((category, index) => (
                  <div className="form-check" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`checkbox2-${index + 1}`}
                      onChange={() => handleCheckboxChange(setSelectedCategories, category)}
                    />
                    <label className="form-check-label" htmlFor={`checkbox2-${index + 1}`}>
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr style={{ width: '95%' }} />

        {/* Accordion 3: Shop by color */}
        <div className="accordion" id="accordionExample3">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                Shop by color
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample3"
            >
              <div className="accordion-body">
                {['Blue', 'Black', 'Beige', 'White', 'Red', 'Orange', 'Purple', 'Brown', 'Pink', 'Indigo', 'Grey', 'Yellow', 'Sandal'].map((color, index) => (
                  <div className="form-check" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`checkbox3-${index + 1}`}
                      onChange={() => handleCheckboxChange(setSelectedColors, color)}
                    />
                    <label className="form-check-label" htmlFor={`checkbox3-${index + 1}`}>
                      {color}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr style={{ width: '95%' }} />
      </div>
    </div>
  );
}

export default Filter;
