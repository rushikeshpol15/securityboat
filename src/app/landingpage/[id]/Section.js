import React from "react";
import PropTypes from "prop-types";

//components
import ProductCard from "@/components/cards/ProductCard";

export const Section = ({data}) => {
  return (
    <>
        <div className="flex justify-center items-center w-full" style={{margin : "5em auto"}}> 
            <ProductCard id={data?.id} Img={data?.image} description={data?.description} catagory={data?.category} count={data?.rating?.count} price={data?.price} rating={data?.rating?.rate} title={data?.title} />
        </div>
    </>
  );
};

export default Section;

Section.propTypes={
    data:PropTypes.any,
};
