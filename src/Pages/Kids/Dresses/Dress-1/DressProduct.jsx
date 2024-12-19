import React from 'react'
import DressListCard from './DressListCard'
function DressProduct() {
  return (
    <div>
        <nav aria-label="Page navigation ">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="/dress-1">1</a></li>
    <li className="page-item"><a className="page-link" href="/dress-2">2</a></li>
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
      <DressListCard/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default DressProduct