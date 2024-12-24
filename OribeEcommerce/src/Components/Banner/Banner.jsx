import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from "../../assets/banner.png"

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
                style={{
                    // backgroundColor: "#ddd",
                    // borderRadius: "10px",
                    
                    position:'absolute',
                    top:'200px',
                    right:"700px"
                    // padding: "10px"
                }}
            >
                <ul style={{ margin: "0px" }}>  </ul>
                <li>{dots}</li>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "30px",
                    color: "black",
                    borderRight: "2px black solid",
                    fontFamily:"DM",
                    paddingBottom:"10px",
                    fontSize:"14px",
                    paddingTop:"10px"
                }}
            >
                0{i + 1}
            </div>
        )
    };

    return (
        <div>
            <Slider {...settings}>
                <div className='w-full block'>
                    <img src={banner} alt="" />
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default Banner;
