import React from "react";
import { useCustomization } from "./context/CustomizationContext";
import { customizationData } from "../data/customizationData";

const SizeSelection = () => {
  const { customization, updateCustomization } = useCustomization();

  // Find the selected brand data
  const selectedBrandData = customizationData.brands.find(
    (brand) => brand.name === customization.brand
  );

  if (!selectedBrandData) {
    return <p>Please select a brand first.</p>;
  }

  const handleSizeClick = (sizeOption) => {
    updateCustomization("size", sizeOption);
  };

  // Get the image for the selected size
  const selectedSizeImage =
    selectedBrandData.sizes?.find((size) => size.name === customization.size)?.image || null;

  return (
    <div className="section" style={{textAlign: "center"}}>
      <h2>Select Size</h2>
      <div className="options">
        {selectedBrandData.sizes?.map((sizeOption) => (
          <div key={sizeOption.name}> 
          <input
            key={sizeOption.name}
            type="radio"
            name='size'
            className={`option ${customization.size === sizeOption.name ? "selected" : ""}`}
            onClick={() => handleSizeClick(sizeOption.name)}
          />
          <label htmlFor={sizeOption.name} name={sizeOption.name}>{sizeOption.name}</label>
          </div>
        ))}
      </div>

      {/* Display selected size image */}
      {customization.size && selectedSizeImage && (
        <div className="selected-size-display">
          <h3>Selected Size:</h3>
          <img src={selectedSizeImage} alt={customization.size} />
        </div>
      )}
    </div>
  );
};

export default SizeSelection;
