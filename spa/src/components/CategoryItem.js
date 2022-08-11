import React from 'react'
import {Link, useParams} from "react-router-dom"

export default function CategoryItem(props) {
  const {idCategory, strCategory, strCategoryDescription,strCategoryThumb}=props
  const name=useParams()
  console.log(name)
  return (
    <div className='card'>
      <div className="card-image">
          <img src={strCategoryThumb} alt={strCategory} />
        </div>
        <span className="card-title"><b><h3>{strCategory}</h3></b></span>
        <div className="card-content">
          <p>{strCategoryDescription.slice(0, 60)}...</p>
        </div>
        <div className="card-action">
          <button className='btn'>
            <Link to={`/category/${strCategory}`}>Watch This Category</Link>
          </button>
      </div>
    </div>
  )
}
