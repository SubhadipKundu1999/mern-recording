import React from 'react'
import { Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import Home from "./Home"


const AllRouter = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}> </Route>/
        <Route path="/Auth" element={<Auth />}/>
    </Routes>
  )
}

export default AllRouter
