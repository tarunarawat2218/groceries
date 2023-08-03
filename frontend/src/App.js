import './App.css';
import Login from "./components/organisms/Login";
import React from 'react';
import Header from "../src/components/organisms/Header";
import Homepages from "./components/pages/HomePage";
import Cart from '../src/components/organisms/Cart'

// import Footer from "../src/components/organisms/Footer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from './components/organisms/Signup.js';


function App() {
    return (<BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<Homepages />}>
          </Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/sign" element={<Signup />}>
        </Route>
        <Route path="/cart" element={<Cart />}>
        </Route>
      </Routes>
       
        
    </BrowserRouter>);
}

export default App;
