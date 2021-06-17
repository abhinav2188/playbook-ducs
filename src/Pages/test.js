import React from "react";
import SectionSlider from "../UI/SectionSlider";
import Footer from "../Layout/Footer"

const sections = [
  <h1>section 1</h1>,
  <h1>section 2</h1>,
  <h1>section 3</h1>,
  <h1>section 4</h1>,
  <h1>section 5</h1>,
  <h1>section 6</h1>,
  <h1>section 7</h1>,
];

const sectionNames = [
  "section1 abhin",
  "section2",
  "section3",
  "section4",
  "section5",
  "section6",
  "section7",
];

const page = () => {

    return (
        <SectionSlider sections={sections} sectionNames={sectionNames} footer={<Footer/>} footerHeight={80}/>
    );
}


export default page;
