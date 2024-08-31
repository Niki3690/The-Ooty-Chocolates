import React from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Component/Home"
import Chocolates from "./Component/Chocolates"
import Aboutus from "./Component/Aboutus"
import Login from "./Component/Login"
import Search from "./Component/Search"
import Cart from "./Component/Cart"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='chocolates' element={<Chocolates />} />
          <Route path='aboutus' element={<Aboutus />} />
          <Route path='login' element={<Login />} />
          <Route path='search' element={<Search />} />
          <Route path='cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
