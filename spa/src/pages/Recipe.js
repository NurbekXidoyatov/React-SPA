import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import {getMealById} from "../api"

export default function Recipe() {
  const {id}=useParams()
  console.log(id);
  const [recipe, setrecipe] = useState([]);
  const {goBack}=useHistory()
  useEffect(()=>{
    getMealById(id).then(data=>setrecipe(data.meals[0]))
  }, [id])
  return (
    <div>
      <button onClick={goBack} className='btn btn-recipe'>Go Back</button>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h4>Category: {recipe.strCategory}</h4>
      <h4>Area: {recipe.strArea}</h4>
      <p>{recipe.strInstructions}</p>
      <table>
        <thead>
          <tr>
              <th>Ingredients</th>
              <th>Measure</th>
          </tr>
        </thead>

        <tbody>
            {Object.keys(recipe).map(key=>{
              if(key.includes("Ingredient") && recipe[key]){
                return (
                  <tr>
                    <td>
                      {recipe[key]}
                    </td>
                    <td>
                      {recipe[`strMeasure${key.slice(13)}`]}
                    </td>
                  </tr>
                )
              }
          })}
        </tbody>
      </table>
    </div>
  )
}
