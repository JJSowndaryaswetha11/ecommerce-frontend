import React from 'react'

function BoyCrumbs() {
  return (
    <div>
        <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item " aria-current="page">Kids</li>
          <li className="breadcrumb-item active" aria-current="page">Shirts</li>
        </ol>
      </nav>
    </div>
  )
}

export default BoyCrumbs