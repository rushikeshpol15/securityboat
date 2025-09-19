import React from "react";
import axios from "axios";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import "@/styles/Typography.css";

async function fetchProducts()
{
    try {
        let APIResponse=await axios("https://fakestoreapi.com/products");
            return APIResponse.data;
    } catch (error) {
        console.error(error);
        
    }
}
async function Page()
{

    let data=await fetchProducts();
    return(
        <>
        <Header/>
       {data ?<Section apidataprops={data}/>
       :
       <h1 className="text-center mb-24">Loading...</h1>}
        <Footer/>
        </>
    );
}

export default Page;
