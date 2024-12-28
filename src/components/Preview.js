import React from "react";
import { useCustomization } from "./context/CustomizationContext";

const Preview = () => {
  const { customization } = useCustomization();

  return (
    <div className="section preview" style={{textAlign: 'center'}}>
      <h2>Preview</h2>
      <div className="preview-details">
        {customization.brand && <h4>{customization.brand}</h4>}
        {customization.band && customization.case && <h5>{customization.case}</h5>}
        {customization.band && customization.size && <h5>{customization.size}</h5>}
        {customization.size && customization.case && customization.band &&<h5>{customization.size} {customization.case} Case with {customization.band}</h5>}
      </div>
      {customization.brand && customization.case && customization.band && (
        <img
          src={`/${customization.brand}-${customization.case}-${customization.band}.png`}
          alt="Preview"
        />
      )}
    </div>
  );
};

export default Preview;
