import React from 'react'

import Header from '../commonComponents/Header';
import Banner from '../commonComponents/Banner';
import DevServices from "../commonComponents/DevServices";
import OutSource from "../commonComponents/OutSource";
import OurDev from "../commonComponents/OurDev";

function Home(props) {

  return (
    <>
      <Header></Header>
      <Banner title_banner="Get World-Class Web Development From India"></Banner>
      <DevServices services_heading="Top-Tier Development Services"></DevServices>
      <OutSource source_heading="Outsource Development to the Best"></OutSource>
      <OurDev dev_title="Our Development Plans"></OurDev>
    </>
  );
}

export default Home
