import React from 'react'

import Header from '../commonComponents/Header';
import Banner from '../commonComponents/Banner';
import DevServices from "../commonComponents/DevServices";
import OutSource from "../commonComponents/OutSource";
import OurDev from "../commonComponents/OurDev";
import Hire from '../commonComponents/Hire';
import Tech from "../commonComponents/Tech";


function Home(props) {

  return (
    <>
      <Header></Header>
      <Banner title_banner="Get World-Class Web Development From India"></Banner>
      <DevServices services_heading="Top-Tier Development Services"></DevServices>
      <OutSource source_heading="Outsource Development to the Best"></OutSource>
      <OurDev dev_title="Our Development Plans"></OurDev>
      <Hire hire_title="Why Hire From CodeClouds"></Hire>
      <Tech tech_heading="Our Technology Expertise"></Tech>
    </>
  );
}

export default Home
