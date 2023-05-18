import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./pages/Product/Product.css"
import Mockman from "mockman-js";
import ProductDetails from "./pages/Product/ProductDetails";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Routes>
        <Route path="/mockman" element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
