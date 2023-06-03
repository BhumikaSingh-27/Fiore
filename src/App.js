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
import Signup from "./pages/Auth/Signup";
import UserProfile from "./pages/UserProfile/UserProfile";
import AddressForm from "./pages/UserProfile/AddressForm";
import Checkout from "./pages/Checkout/Checkout";
import { AuthWrapper } from "./components/Authenticate/AuthWrapper";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./pages/Home/components/Footer";
import { ToastContainer } from "react-toastify";
import OrderSummary from "./pages/Checkout/OrderSummary";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/mockman" element={<Mockman />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:prodId" element={<ProductDetails />}></Route>
        <Route
          path="/cart"
          element={
            <AuthWrapper>
              <Cart />
            </AuthWrapper>
          }
        ></Route>
        <Route
          path="/wishlist"
          element={
            <AuthWrapper>
              <Wishlist />
            </AuthWrapper>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/profile"
          element={
            <AuthWrapper>
              {" "}
              <UserProfile />
            </AuthWrapper>
          }
        ></Route>
        <Route path="/addressform" element={<AddressForm />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/ordersummary" element={<OrderSummary />}></Route>
      </Routes>

      <footer>
        <Footer />
      </footer>
      <ToastContainer />
    </div>
  );
}

export default App;
