import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { store } from './app/store'
import { getList } from './app/features/country/countrySlice'
import Newitem from './Newitem'



function App() {
 
  const dispatch = useDispatch()
  const Alllists = useSelector((store) => store.country.list)
  console.log(Alllists)
  useEffect(()=>{
    dispatch(getList())
   
  },[])


  return (
    <div>
 {Alllists && Alllists.map((item)=>(
  <Newitem key={item.id} item ={item}/>
 ))}
    </div>
  )
}

export default App
