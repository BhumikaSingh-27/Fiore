import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import Navbar from "./components/Navbar/Navbar";
import AddressForm from "./pages/UserProfile/AddressForm";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AddressForm />
      <Routes>
        <Route path="/mockman" element={<Mockman />}></Route>
      </Routes>
    </div>
  );
}

export default App;
