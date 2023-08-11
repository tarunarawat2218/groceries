import React from 'react';


import ListOfProduct from "../molecules/ListOfProduct";

export default function HomePage() {

    return (<>
        
        <h1 style={{padding:"2rem", fontFamily: "Noto Serif Khojki, serif" }}>List of Products</h1>
        <ListOfProduct/>

    </>);
}