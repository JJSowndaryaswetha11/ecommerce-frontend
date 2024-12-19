import React from 'react'
import LehngaListCard from './LehengaListCard'


function LehengaProductCard() {
  return (
    <div>
      <nav aria-label="Page navigation ">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
     
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="/lehenga-1">1</a></li>
    <li className="page-item"><a className="page-link" href="/lehenga-2">2</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        
      </a>
    </li>
  </ul>
</nav>
      <div >
        <div >
          <div>
          <LehngaListCard/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default LehengaProductCard