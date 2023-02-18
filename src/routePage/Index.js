import React from 'react'

import Header from '../commonComponents/Header';
import Banner from '../commonComponents/Banner';
import DevServices from "../commonComponents/DevServices";
import OutSource from "../commonComponents/OutSource";
import OurDev from "../commonComponents/OurDev";
import Hire from '../commonComponents/Hire';
import Tech from "../commonComponents/Tech";
import Testimony from "../commonComponents/Testimony";
import GetStarted from "../commonComponents/GetStarted";



function Home(props) {

  return (
    <>
      <Header />
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
