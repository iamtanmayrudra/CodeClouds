import React from 'react'

import Header from '../commonComponents/Header';
import Banner from '../commonComponents/Banner';
import DevServices from "../commonComponents/DevServices";

function Home(props) {

  return (
    <>
      <Header></Header>
      <Banner title_banner="Get World-Class Web Development From India"></Banner>
      <DevServices services_heading="Top-Tier Development Services"></DevServices>
    </>
  );
}

export default Home
