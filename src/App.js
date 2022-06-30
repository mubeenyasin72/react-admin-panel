import React, { useContext } from 'react'
import './style/dark.scss'
import Home from './page/home/Home'
import Login from './page/login/Login'
import List from './page/list/List'
import SinglePage from './page/single/Single'
import NewPage from './page/new/New'
import { productInputs, userInputs } from "./formSource";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DarkModeContext } from "./context/darkModeContext";
const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" index element={<Login />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<SinglePage />} />
              <Route path='new' element={<NewPage inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path='products'>
              <Route index element={<List />} />
              <Route path=':productId' element={<SinglePage />} />
              <Route path='new' element={<NewPage inputs={productInputs} title="Add New Product" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App