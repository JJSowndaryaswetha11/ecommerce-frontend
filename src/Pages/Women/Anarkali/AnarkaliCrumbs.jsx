import React from 'react'

function AnarKaliCrumbs() {
  return (
    <div>
      <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item " aria-current="page">Women</li>
          <li className="breadcrumb-item active" aria-current="page">Anarkalis</li>
        </ol>
      </nav>
    </div>
  )
}

export default AnarKaliCrumbs