import React from 'react'

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ratingStar from "../../assets/five-star.svg";
import googleRound from "../../assets/g-icon.webp";

// Material Icon
// import MaterialIcon from 'react-google-material-icons';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white", color: "#F7F9FE" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white", color: "#F7F9FE" }}
      onClick={onClick}
    />
  );
}

export default function ReviewCarousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
  return (
    <Slider {...settings}>
      <div className='each-review'>
        <div className="client_details d-flex align-items-center justify-content-between">
          <div className="clientPattern">
            <h2>Client Name</h2>
            <img src={ratingStar} alt="Rating" width={135} />
          </div>

          <img src={googleRound} alt="Google Circle" width={40} />
        </div>
        <p>“Working with CodeClouds has brought my business to absolute new heights and they are now part of the family. We could not be more pleased with the work from our dedicated team. I have and will recommend them to anyone looks for their services.”</p>
      </div>
      <div className='each-review'>
        <div className="client_details d-flex align-items-center justify-content-between">
          <div className="clientPattern">
            <h2>Client Name</h2>
            <img src={ratingStar} alt="Rating" width={135} />
          </div>

          <img src={googleRound} alt="Google Circle" width={40} />
        </div>
        <p>Their Dev Team is the top of the line. So easy to communicate with and they get tasks done very quick and efficient! I have worked with many developers over 10 years and they are one of the best.</p>
      </div>
      <div className='each-review'>
        <div className="client_details d-flex align-items-center justify-content-between">
          <div className="clientPattern">
            <h2>Client Name</h2>
            <img src={ratingStar} alt="Rating" width={135} />
          </div>

          <img src={googleRound} alt="Google Circle" width={40} />
        </div>
        <p>“With 10 years of industry experience, I can fully stand behind the product and service that CodeClouds provides. They are an essential partner for any IT services you may need - large or small. Fast, professional and fair…go with them all the way!”</p>
      </div>
    </Slider>
  )
}
