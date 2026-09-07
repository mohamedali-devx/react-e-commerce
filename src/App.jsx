import Home from './pages/home/Home'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/cart/Cart'
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/products/:id' element={<ProductDetails />}></Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App
