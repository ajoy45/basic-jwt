
import './App.css';
import Header from './Component/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import UploadProduct from './Component/UploadProduct/UploadProduct';
import OrderList from './Component/OrderList/OrderList';
import Products from './Component/Products/Products';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login/>} />
        <Route path="uploadpd" element={
          <ProtectedRoute>
            <UploadProduct/>
          </ProtectedRoute>
        } />
        <Route path="orderlist" element={
          <ProtectedRoute>
            <OrderList/>
          </ProtectedRoute>
        } />
        <Route path="products" element={<Products/>} />
      </Routes>

    </div>
  );
}

export default App;
