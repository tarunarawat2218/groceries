import React from 'react';

import Banner from "../organisms/Banner";
import ListOfProduct from "../molecules/ListOfProduct";

export default function HomePage() {

    return (<>
        <Banner/>
        <h2>List of Products</h2>
        <ListOfProduct/>

    </>);
}