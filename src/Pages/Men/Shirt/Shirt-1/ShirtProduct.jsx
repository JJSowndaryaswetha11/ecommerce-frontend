import React from 'react'
import ShirtListCard from './ShirtListCard'

function ShirtProduct() {
  return (
    <div>
         <div>
        <nav aria-label="Page navigation ">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span className="sr-only">Previous</span>
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="/Shirt">1</a></li>
    <li className="page-item"><a className="page-link" href="/Shirt-2">2</a></li>
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
         <ShirtListCard/>
          </div>
        </div>
      </div>
      
        </div>
        </div>
  )
}

export default ShirtProduct