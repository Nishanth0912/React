import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menus from './pages/Menus'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

const Products = lazy(() => import('./pages/Products'))

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1>Loading.........</h1>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menus />} />
          <Route path='/product' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Suspense>
    </>

  )
}

export default App