import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {getFilterCategories} from "../api"
import Loader from '../components/Loader'
import MealList from '../components/MealList'


export default function Category() {
  const {name}=useParams()
  const [meals, setmeals] = useState([]);
  useEffect(()=>{
    getFilterCategories(name).then(data=>
      setmeals(data.meals))
  }, [name])
  return (
    <div>
      {!meals.length ? <Loader/> : <MealList meals={meals}/>}
    </div>
  )
}
