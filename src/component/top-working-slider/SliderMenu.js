import React, { useEffect, useState } from "react";
import "./SliderMenu.style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} style={{ marginLeft: "30px" }}>
      <img src="/assest/Vector (2).png" alt="arrow_left" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} style={{ marginLeft: "20px" }}>
      <img src="/assest/Vector (1).png" alt="arrow_left" />
    </div>
  );
}

const SliderMenu = () => {
  const [slider, setSlider] = useState([]);

 
  useEffect(() => {
    fetch("https://cozone.divashudh.com/api/get_cities/1")
      .then((res) => res.json())
      .then((res) => {
        setSlider(res.data);
      });
  }, []);

  const defaultImg = "/assest/Rectangle 18.png";

  var settings = {
    defaultArrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
     
    ],
  };

  return (
    <>
      <section>
        <div className="container-fluid img-cover-div mt-5">
          <div className="row d-flex flex-row upper-row">
            <div className="col-lg-3 col-md-3 flex-row d-flex mt-5">
              <img
                src="/assest/ellipse 29.png"
                className="img-fluid first-div-circle"
                alt=""
              />
              <div className="d-flex flex-column">
                <img
                  src="/assest/dotted 6.png"
                  className="dotted-first-img"
                  alt=""
                />
                <img
                  src="/assest/dotted 6.png"
                  className="dotted-second-img"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="d-flex flex-row mt-5">
                <h1 className="ms-5">Top Working in India</h1>
                <img
                  src="/assest/Ellipse 34.png"
                  className="img-fluid small-circle"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <img
                src="/assest/Ellipse 36.png"
                className="half-circle-rotate"
                alt=""
              />
            </div>
          </div>

          <div className="container mt-5">
            <div className="row">
              <Slider {...settings}>
                {slider.map((e) => {
                  return (
                    <div key={e.id} className="main-silder-div">
                      <Link
                        className="text-decoration-none"
                        to={'/coworking/city/'+ e.id+"/"+e.location}
                      >
                        <img
                           src={e.image ? e.image : defaultImg}
                          alt=""
                          className="slider-img"
                          
                        />
                        <h3 className="text-center text-white">{e.location}</h3>
                      </Link>
                    </div>
                  );
                })}
              </Slider>

              <div>
                <img
                  src="/assest/Group 9.png"
                  className="img-fluid group-first-img"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="/assest/Group 9.png"
                  className="img-fluid float-end group-sec-img"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="/assest/Ellipse 39.png"
                  className="img-fluid float-end ellipse-39-img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SliderMenu;
