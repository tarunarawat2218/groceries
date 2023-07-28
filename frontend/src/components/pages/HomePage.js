import React from 'react';
import Header from "../organisms/Header";
import Banner from "../organisms/Banner";
import Item from "../organisms/Item"
import Footer from "../organisms/Footer";

export default function HomePage() {
    return (<>
        <Header/>
        <Banner/>
        <Item/>
        <Footer/>
    </>);
}