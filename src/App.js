import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import OrderReview from './Components/OrderReview/OrderReview';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>

      <Header/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/review' element={<OrderReview/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
      </Routes>
    </div>
  );
}

export default App;
