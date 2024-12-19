import React from 'react'
import BoyListCard from './BoyListCard'

function BoyProduct() {
  return (
    <div>
      <nav aria-label="Page navigation ">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="/boy-1">1</a></li>
    <li className="page-item"><a className="page-link" href="/boy-2">2</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
       
      </a>
    </li>
  </ul>
</nav>
      <div>
        <div>
          <div>
           <BoyListCard/>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default BoyProduct