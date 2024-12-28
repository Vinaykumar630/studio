import React, { createContext, useState, useContext } from "react";

const CustomizationContext = createContext();

export const CustomizationProvider = ({ children }) => {
  const [customization, setCustomization] = useState({
    case: null,
    size: null,
    band: null,
    price: null
  });
  
  const updateCustomization = (type, value) => {
    setCustomization((prev) => {
      if (type === "brand") {
        // Reset other fields when brand changes
        return { brand: value, case: null, size: null, band: null, price: null };
      }
      return { ...prev, [type]: value };
    });
  };
  

  return (
    <CustomizationContext.Provider value={{ customization, updateCustomization }}>
      {children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => useContext(CustomizationContext);
