import React, {useState, useEffect} from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import {getAllCategories} from "../api"
import CategoryList from '../components/CategoryList';
import Loader from '../components/Loader';
import Search from '../components/Search';



// export default function Home() {
//   const [catalog, setcatalog] = useState([]);
//   const [filteredCatalog, setfilteredCatalog] = useState([]);

//   const { search}=useLocation()
//   const {push}= useHistory()

//   const handleearch=(str)=>{
//     setfilteredCatalog(catalog.filter(item=> item.strCategory.toLowerCase().includes(str.toLowerCase())));push({
//       search:`?search=${str}`
//     })
//   }
//   useEffect(() => {
//     getAllCategories().then(data=>{
//       setcatalog(data.categories)
//       setfilteredCatalog(search ? data.categories.filter(item=>item.strCategory.toLowerCase().includes(search.split("=")[1].toLocaleLowerCase())): data.categories)
//   })
//   }, [search]);


//   return (
//     <div>
//       <Search handleearch={handleearch}/>
//       {!catalog.length ?
//       <Loader/> :
//       <CategoryList
//       catalog={filteredCatalog}/>}
//     </div>
//   )
// }
export default function Home() {
  //const [catalog, setcatalog] = useState([]);
  const [filteredCatalog, setfilteredCatalog] = useState([]);

  const { search}=useLocation()
  const {push}= useHistory()

  const handleearch=(str)=>{
    setfilteredCatalog(filteredCatalog.filter(item=> item.strCategory.toLowerCase().includes(str.toLowerCase())));push({
      search:`?search=${str}`
    })
  }
  useEffect(() => {
    getAllCategories().then(data=>{
      //setcatalog(data.categories)
      setfilteredCatalog(search ? data.categories.filter(item=>item.strCategory.toLowerCase().includes(search.split("=")[1].toLocaleLowerCase())): data.categories)
  })
  }, [search]);


  return (
    <div>
      <Search handleearch={handleearch}/>
      {!filteredCatalog.length ?
      <Loader/> :
      <CategoryList
      catalog={filteredCatalog}/>}
    </div>
  )
}