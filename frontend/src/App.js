import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Login from './components/organisms/Login';
import Header from './components/organisms/Header';
import Homepages from './components/pages/HomePage';
import Cart from '../src/components/organisms/Cart';
import Signup from './components/organisms/Signup.js';
import {useLoginStatus} from './hooks/useAuth'

function App() {
    const isLoggedIn = useLoginStatus();

    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                {/* Redirect to home page if the user is already logged in */}
                <Route path="/login" element={isLoggedIn ? <Navigate to="/"/> : <Login/>}/>
                <Route path="/" element={<Homepages/>}/>
                <Route path="/sign" element={<Signup/>}/>
                <Route path="/cart" element={isLoggedIn ? <Cart/> : <Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
