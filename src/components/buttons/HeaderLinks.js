import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";

const HeaderLinks = ({content}) => {
    return (
        <>
            <Link href='/' className='common-links custom-black-text navbar-links'>{content}</Link>

        </>
    );
};

export default HeaderLinks;

HeaderLinks.propTypes={
    content:PropTypes.string,
};
