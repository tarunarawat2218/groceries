import React from 'react';

import './Header.css'
import Button from "../atoms/Button";
import SearchBar from "../molecules/SearchBar";
import AppLogo from "../atoms/Logo";

export default function Header() {
    return (<div>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <AppLogo/>
                <SearchBar/>
                <div className="buttons">
                    <Button className="logIn" text="Login"/>
                    <Button className="cart" text="Cart"/>
                </div>
            </div>
        </nav>
    </div>)
}