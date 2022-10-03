import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const MetaTag = ({ title, description }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <mate name="description" content={description} />
      </Helmet>
    </>
  );
};

MetaTag.prototype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MetaTag;
