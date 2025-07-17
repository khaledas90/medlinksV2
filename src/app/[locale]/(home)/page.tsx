import React from "react";
// import MedicalServices from "./_components/MedicalServices";
import HeroSlider from "./_components/hero";
import MedicalEquipment from "./_components/MedicalEquipment";
import WhyChooseUs from "./_components/WhyChoose";

export default function page() {
  return (
    <>
      <HeroSlider />
      <MedicalEquipment />
      {/* <MedicalServices /> */}
      <WhyChooseUs />
    </>
  );
}
