import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Inventory from "./Components/Inventory/Inventory";
import Login from "./Components/Login/Login";
import OrderReview from "./Components/OrderReview/OrderReview";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Shipping from "./Components/Shipping/Shipping";
import Shop from "./Components/Shop/Shop";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="review" element={<OrderReview />} />
        <Route path="/*" element={<PrivateRoute/>}>
          <Route path="inventory" element={<Inventory />} />
          <Route path="shipping" element={<Shipping/>}/>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
