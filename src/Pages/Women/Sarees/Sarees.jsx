import React from 'react';
import SareeCarousel from './SareeCarousel';
import SareeProduct from './Sarees-1/SareeProduct';
import Breadcrumbs from './BreadCrumbs';
// import { FilterProvider } from '../../../Context/FilterContext'; // Import FilterProvider
function Sarees() {
  return (
    
      <div className ="whole-products-lists">
       
        <SareeCarousel />
        <Breadcrumbs />
        <SareeProduct />
      </div>
   
  );
}

export default Sarees;
