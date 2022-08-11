import React from 'react'
import { Link } from 'react-router-dom'

export default function MealItem({strMeal, strMealThumb, idMeal}) {
  return (
    <div className='card'>
      <div className="card-image">
          <img src={strMealThumb} alt={strMeal} />
      </div>
      <span className="card-title"><b><h5>{strMeal}</h5></b></span>
      <div className="card-action">
        <button className='btn'>
          <Link to={`/recipe/${idMeal}`}>Watch This Recipe</Link>
        </button>
      </div>
    </div>
  )
}
