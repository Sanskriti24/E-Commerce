import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import bannermens from "./assets/bannermens.png";
import bannerwomens from "./assets/bannerwomens.png";
import bannerkids from "./assets/bannerkids.png"

export default function App() {
  return (
    <main className="bg-slate-100 text-tertiary">
      <BrowserRouter>
      <Header/> 
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/mens" element={<Category category="men" banner={bannermens}/>}></Route>
        <Route path="/womens" element={<Category category="women" banner={bannerwomens}/>}></Route>
        <Route path="/kids" element={<Category category="kid" banner={bannerkids}/>}></Route>
        <Route path="/mens/product/:productId" element={<Product />} />
        <Route path="/womens/product/:productId" element={<Product />} />
        <Route path="/kids/product/:productId" element={<Product />} />
        <Route path="/cart-page" element={<Cart/>}></Route>
        <Route path="/login" element={<Login/>}></Route>

      </Routes>
      <Footer/>
      </BrowserRouter>
      </main>
  )
}