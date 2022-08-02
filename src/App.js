import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
function App() {
  return (
    <div className='container'>
        <Header></Header>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
