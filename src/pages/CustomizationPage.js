import React from "react";
import SizeSelection from "../components/SizeSelection";
import Preview from "../components/Preview";
import BrandSelection from "../components/BrandSelection";
import CaseSelection from "../components/CaseSelection";
import BandSelection from "../components/BandSelection";

const CustomizationPage = () => {
  return (
    <div>
      <BrandSelection />
      <CaseSelection/>
      <SizeSelection />
      <BandSelection/>
      <Preview />
    </div>
  );
};

export default CustomizationPage;
