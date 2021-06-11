

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import im from '../assets/discover.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
       
        <Slider {...settings}>
          <div>
          <img src={im} style={{width:"250px",marginLeft:'32%'}} alt='nana'/>
          </div>
          <div>
          <img src={im} style={{width:"250px",marginLeft:'32%'}} alt='nana'/>
          </div>
          <div>
          <img src={im} style={{width:"250px",marginLeft:'32%'}} alt='nana'/>
          </div>
          <div>
          <img src={im} style={{width:"250px",marginLeft:'32%'}} alt='nana'/>
          </div>
          <div>
          <img src={im} style={{width:"250px",marginLeft:'32%'}} alt='nana'/>
          </div>
          <div>
          <img src={im} style={{width:"250px",marginLeft:'32%'}} alt='nana'/>
          </div>
          <div>
          <img src={im} style={{width:"250px",marginLeft:'32%'}} alt='nana'/>
          </div>
        </Slider>
      </div>
    );
  }
}