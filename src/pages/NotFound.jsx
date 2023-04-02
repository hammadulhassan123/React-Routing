import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate =useNavigate()

  useEffect(()=>{
    setTimeout(()=>{
        navigate(-1)
    },1000)
  },[])
  
  
  return (
   <h1>Error: 404 - Not Found</h1>
     )
}

export default NotFound