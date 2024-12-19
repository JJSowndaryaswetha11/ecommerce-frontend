import React from 'react'
import ShortListCard from './ShortListCard'

function ShortProduct() {
  return (
    <div>
      <nav aria-label="Page navigation ">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
       
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="/short-1">1</a></li>
    <li className="page-item"><a className="page-link" href="/short-2">2</a></li>
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
          <ShortListCard/>
          </div>
        </div>
      </div>
         
    </div>
  )
}

export default ShortProduct