import React from "react";
import "@/styles/Typography.css";
import "@/styles/landingpage/landingpage.css";
import axios from "axios";
import PropTypes from "prop-types";
import Section from "./Section";

async function fetchProducts(id)
{
try {
    let APIResponse=await axios(`https://fakestoreapi.com/products/${id}`);
        return APIResponse.data;
} catch (error) {
    console.error(error);
    
}
}
async function Page ({params}) {

    let data=await fetchProducts(params?.id);

  return (
    <Section data={data} />
  );
};

export default Page;

Page.propTypes={
    params:PropTypes.any,
};
