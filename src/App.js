import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./pages/Product/Product.css";
import Mockman from "mockman-js";
import Product from "./pages/Product/Product";
import ProductDetails from "./pages/Product/ProductDetails";
import Home from "./pages/Home/Home";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Auth/Login";
import Profile from "./pages/UserProfile/Profile";
import Footer from "./pages/Home/components/Footer";
import Signup from "./pages/Auth/Signup";
import UserProfile from "./pages/UserProfile/UserProfile";
import AddressForm from "./pages/UserProfile/AddressForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<Mockman />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:prodId" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
        <Route path="/addressform" element={<AddressForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
