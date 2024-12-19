import React from 'react';
import AnarkaliListCard from './AnarkaliListCard';
import '../../../../Styles/Anarkali.css'
function AnarkaliProductCard() {
  return (
    <div>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item"><a className="page-link" href="/anarkali-1">1</a></li>
          <li className="page-item"><a className="page-link" href="/anarkali-2">2</a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              
            </a>
          </li>
        </ul>
      </nav>
      <AnarkaliListCard />
    </div>
  );
}

export default AnarkaliProductCard;
