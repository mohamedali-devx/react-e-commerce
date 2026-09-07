import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products/:id' element={<ProductDetails />}></Route>
      </Routes>
    </>
  )
}

export default App
