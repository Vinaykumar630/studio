import React from "react";
import { useCustomization } from "./context/CustomizationContext";
import { customizationData } from "../data/customizationData";

const CaseSelection = () => {
  const { customization, updateCustomization } = useCustomization();

  const selectedBrandData = customizationData.brands.find(
    (brand) => brand.name === customization.brand
  );

  if (!selectedBrandData) {
    return <p>Please select a brand first.</p>;
  }
  

  const handleCaseClick = (caseOption) => {
    updateCustomization("case", caseOption.name);
    updateCustomization("price", caseOption.price)
    updateCustomization("band", ""); // Reset band when case changes
  };

  return (
    <div className="section" style={{textAlign: 'center'}}>
      <h2>Select Case</h2>
      <div className="options">
        {selectedBrandData.cases.map((caseOption) => (
          <button style={{margin: "20px" ,border:"none", outline:"none" ,height:"30px"}}
            key={caseOption.name}
            className={`option ${customization.case === caseOption.name ? "selected" : ""}`}
            onClick={() => handleCaseClick(caseOption)}
          >
            {caseOption.name}
          </button>
        ))}
      </div>

     
    </div>
  );
};

export default CaseSelection;
