import "./App.css";
import Header from "./shared/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./shared/Footer";
import Shop from "./pages/Shop/Shop";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Checkout from "./pages/Checkout/Checkout";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProductDetails from "./pages/Shop/ProductDetails";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route
          path="/shop/:id"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route
          path="/shopping-cart"
          element={<ShoppingCart></ShoppingCart>}
        ></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="/contact-us" element={<Contact></Contact>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
