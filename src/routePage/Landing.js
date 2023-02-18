import React from 'react'

import Banner from '../myComponents/sectionComponents/Banner';
import DevServices from "../myComponents/sectionComponents/DevServices";
import OutSource from "../myComponents/sectionComponents/OutSource";
import OurDev from "../myComponents/sectionComponents/OurDev";
import Hire from '../myComponents/sectionComponents/Hire';
import Tech from "../myComponents/sectionComponents/Tech";
import Testimony from "../myComponents/sectionComponents/Testimony";
import GetStarted from "../myComponents/sectionComponents/GetStarted";



function Home(props) {
  
  return (
    <>
      <Banner title_banner="Get World-Class Web Development From India" />
      {/* <p>{process.env.REACT_APP_SECRET_KEY}</p> */}
      <DevServices services_heading="Top-Tier Development Services" />
      <OutSource source_heading="Outsource Development to the Best" />
      <OurDev dev_title="Our Development Plans" />
      <Hire hire_title="Why Hire From CodeClouds" />
      <Tech tech_heading="Our Technology Expertise" />
      <Testimony testimony_heading ="See What Clients Are Saying" />
      <GetStarted startedHeading ="Ready to Get Started?" para="Fill out the form below and we’ll provide you with an estimate for your project!"/>
    </>
  );
}

export default Home
