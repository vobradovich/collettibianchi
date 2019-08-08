import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import './banner.css';

const settings = {
    dots: true,
    speed: 500,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Banner = ({ items }) => (
    <div className="slider-section">
        <Slider {...settings}>
            {items.map((item, i) => (
                <div key={i} className="item">
                    <div className="site-Banner">
                        {/* <Img fluid={item.image ? item.image.childImageSharp.fluid : {}} alt={item.title} /> */}

                        <Img sizes={item.image.childImageSharp.fluid} />
                        <div className="Banner-details">
                            <div>
                                <span className="sub-title">{item.subtitle}</span>
                                <h1>{item.title}</h1>
                                {/* <Link to="/store">Shop Now</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
);

export default Banner;
