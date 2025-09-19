import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";

//imagea
import Heart from "@/Images/landingpage/heart.png";
import Link from "next/link";


const ProductCard = ({id,Img,title,price,catagory,rating,count,description}) => {

    return (
        <Link href={`/landingpage/${id}`}>
            <div className="product-container">
                <Image src={Img} width={290} height={370} alt="product" className="product-image" />
                <div className="product-info-container">
                    <Image src={Heart} width={24} height={24} className="cursor-pointer produ-heart-img" />
                    <h5 className="filter-titles custom-black-text bold">{title}</h5>
                    <h6 className="filter-subtitle custom-grey-text">Price - {price} ₹</h6>
                    <h6 className="filter-subtitle custom-grey-text">catagory - {catagory}</h6>
                    <h6 className="filter-subtitle custom-grey-text">rating - {rating}/5</h6>
                    <h6 className="filter-subtitle custom-grey-text">{count} items left</h6>
                    {description&&<h6 className="filter-subtitle custom-grey-text" style={{maxWidth:"320px"}}>{description}</h6>}
                    <div className=""> </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;

ProductCard.propTypes={
    id:PropTypes.number,
    Img : PropTypes.any,
    title : PropTypes.string,
    price : PropTypes.any,
    catagory : PropTypes.string,
    description: PropTypes.string,
    rating : PropTypes.any,
    count : PropTypes.any,
};
