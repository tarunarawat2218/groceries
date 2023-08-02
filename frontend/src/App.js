import './App.css';
import HomePage from "./components/pages/HomePage";
import React from 'react';
import Header from "../src/components/organisms/Header";

// import Footer from "../src/components/organisms/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (<BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
      </Routes>
       
        
    </BrowserRouter>);
}

export default App;
