import React from 'react'
import JeansListCard from './JeansListCard'
function JeansProduct() {
  return (
    <div>
        <nav aria-label="Page navigation ">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
       
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="/jeans-1">1</a></li>
    <li className="page-item"><a className="page-link" href="/jeans-2">2</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        
      </a>
    </li>
  </ul>
</nav>
      <div >
        <div>
          <div>
         <JeansListCard/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default JeansProduct