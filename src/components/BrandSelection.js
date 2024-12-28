import React from "react";
import { useCustomization } from "./context/CustomizationContext";
import { customizationData } from "../data/customizationData";

const BrandSelection = () => {
  const { customization, updateCustomization } = useCustomization();
   const selectedBrandData = customizationData.brands.find(
      (brand) => brand.name === customization.brand
    );

    const selectedCaseImage =
    selectedBrandData.cases?.find((caseOption) => caseOption.name === customization.case)?.image || null;

   
  const handleBrandChange = (event) => {
    const selectedBrand = event.target.value;
    updateCustomization("brand", selectedBrand);
    updateCustomization("price", "")
    updateCustomization("case", ""); // Reset case, size, and band when changing brand
    updateCustomization("size", "");
    updateCustomization("band", "");
  };

  
  return (
    <div className="section" style={{textAlign: 'center'}}>
      
      <select
        value={customization.brand || ""}
        onChange={handleBrandChange}
        className="dropdown"
      >
        <option value="" disabled>
          Collections
        </option>
        {customizationData.brands.map((brand) => (
          <option key={brand.name} value={brand.name}>
            {brand.name}
          </option>
        ))}
      </select>
      {customization.brand && (
        <div className="selected-brand">
          <h3>Selected Brand:</h3>
          <p>{customization.brand}</p>
          <img src={selectedBrandData.image} alt="slsect" />
        </div>
      )}
      
      {customization.case && selectedCaseImage && (
        <div className="selected-size-display">
          <h3>Selected case:</h3>
          <img src={selectedCaseImage} alt={customization.size} />
        </div>
      )}
    </div>
  );
};

export default BrandSelection;