import React from 'react'

function TopsCrumbs() {
  return (
    <div>
    <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item " aria-current="page">Women</li>
          <li className="breadcrumb-item active" aria-current="page">Tops</li>
        </ol>
      </nav>
    </div>
  )
}

export default TopsCrumbs