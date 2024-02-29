import React from 'react'

function CardFilter({filterChange}) {
  return (
    <div className="filter">
        <a href="#" className="icon" data-bs-toggle= "dropdown">
            <i className="bi bi-three-dots"></i>
        </a>
        <ul className="droptdown-menu droptdown-menu-end droptdown-menu-arrow">
            <li className="droptdown-header text-start">
                <h6>Filter</h6>
            </li>
            <li>
                <a href="#" className="droptdown-item" onClick={() => filterChange('Today')}>
                    Today
                </a>
            </li>
            <li>
                <a className="droptdown-item" onClick={() => filterChange("This Month")}>
                    This Month
                </a>
            </li>
            <li>
            <a className="droptdown-item" onClick={() => filterChange("This Year")}>
                    This Year
                </a>
            </li>
        </ul>
    </div>
  )
}

export default CardFilter