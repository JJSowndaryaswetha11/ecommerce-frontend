import React from 'react'

function TshirtCrumbs() {
  return (
    <div>
        <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item " aria-current="page">Men</li>
          <li className="breadcrumb-item active" aria-current="page">T-Shirt</li>
        </ol>
      </nav> 
    </div>
  )
}

export default TshirtCrumbs