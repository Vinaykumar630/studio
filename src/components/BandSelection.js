import React from "react";
import { useCustomization } from "./context/CustomizationContext";
import { customizationData } from "../data/customizationData";

const BandSelection = () => {
  const { customization, updateCustomization } = useCustomization();

  const selectedBrandData = customizationData.brands.find(
    (brand) => brand.name === customization.brand
  );

  

  const handleBandClick = (bandOption) => {
    updateCustomization("band", bandOption.name);
  };

  const selectedBandImage =
  selectedBrandData.bands?.find((bandOption) => bandOption.name === customization.band)?.image || null;


  return (
    <div className="section" style={{textAlign:"center"}}>
    <h2>Select band</h2>
      <div className="options">
        {selectedBrandData.bands.map((bandOption) => (
          <button style={{margin: "20px", border:"none", outline:"none" ,height:"30px"}}
            key={bandOption.name}
            className={`option ${customization.band === bandOption.name ? "selected" : ""}`}
            onClick={() => handleBandClick(bandOption)}
          >
            {bandOption.name}
          </button>
        ))}
      </div>
      {customization.band && selectedBandImage && (
        <div className="selected-size-display">
          <h3>Selected Size:</h3>
          <img src={selectedBandImage} alt={customization.band} width="350" height="300"/>
        </div>
      )}
    </div>
  );
};

export default BandSelection;
