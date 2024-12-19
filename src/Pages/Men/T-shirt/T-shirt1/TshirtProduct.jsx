import React from 'react'
import TshirtListCard from './TshirtListCard'

function TshirtProduct() {
  return (
    <div>
         <nav aria-label="Page navigation ">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span className="sr-only">Previous</span>
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="/T-Shirt-1">1</a></li>
    <li className="page-item"><a className="page-link" href="/T-Shirt-2">2</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span className="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
      <div >
        <div >
          <div>
      <TshirtListCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TshirtProduct