import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";

const FooterLinks = ({ content }) => {
    return (
        <>
            <Link href="/" className="paragraph text-decoration-none custom-white-text">{content}</Link>

        </>
    );
};

export default FooterLinks;

FooterLinks.propTypes = {
    content: PropTypes.string,
};
