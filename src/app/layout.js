import React from "react";
import "@/styles/Typography.css";
import PropTypes from "prop-types";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>SecurityBoat Test</title>
      <body >
        {children}
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
