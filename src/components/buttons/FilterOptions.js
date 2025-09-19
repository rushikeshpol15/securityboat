import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const FilterOption = ({ label, value, selectedValue, onSelect }) => {
  return (
    <div className="flex items-baseline cursor-pointer" onClick={() => onSelect(value)}>
      {selectedValue === value ? (
        <FontAwesomeIcon icon={faCheck} style={{ color: "black", width: "16px", marginRight: "8px" }} />
      ) : null}
      <h6 className="filter-subtitle custom-grey-text">{label}</h6>
    </div>
  );
};

// ✅ Prop Validations
FilterOption.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default FilterOption;
