import React from 'react'
import MealItem from './MealItem'

export default function MealList(props) {
  const {meals}=props
  return (
    <div className='list'>
      {meals.map(el=>(
        <MealItem key={el.idMeal} {...el}/>
      ))}
    </div>
  )
}
