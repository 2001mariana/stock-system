import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import ProductsView from '../../views/ProductsView/ProductsView'
import LoginView from '../../views/LoginView/LoginView'
import NotFoundView from '../../views/NotFoundView/NotFoundView'
import ProfileView from '../../views/ProfileView/ProfileView'

import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsView />} />
          <Route path="/products/:id?" element={<ProductsView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
