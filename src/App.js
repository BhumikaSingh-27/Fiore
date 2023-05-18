import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./pages/Product/Product.css"
import Mockman from "mockman-js";
import Product from "./pages/Product/Product";
import ProductDetails from "./pages/Product/ProductDetails";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Product />
      <Routes>
        <Route path="/mockman" element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
