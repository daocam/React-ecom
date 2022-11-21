import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  const [products, setProducts ] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts()
      setProducts(productsFromServer)
    }
    getProducts()
  }, [])

  const fetchProducts = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`)
    const data = await res.json()
    return data
  }

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    })
    setProducts(products.filter((product) => product.id !== id))
  }
    
  const addProduct = async (product) => {
    const res = await fetch('http://localhost:5000/products',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    const newProduct = await res.json()
    setProducts([...products, newProduct])
  }

  const [showAddProduct, setShowAddProduct]=useState(false)

  return (
    <BrowserRouter>
      <div className="container">
        <Header onAdd={() => setShowAddProduct(!showAddProduct)} showAdd={showAddProduct}/>
        {showAddProduct && <AddProduct onAdd={addProduct}/>}
        {products.length > 0 ? (
          <Routes>
            <Route path='/' element={<Products products={products} onDelete={deleteProduct} />}/>
          </Routes>
        ):(
            'No Products to show'
        )}
        <Routes>
          <Route path='/home' element={<Home/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;
