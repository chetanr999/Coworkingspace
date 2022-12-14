import React from "react";
import "./Partners.style.css";
import {Link} from 'react-router-dom'


const Partners = () => {
  return (
    <>
      <section>
        <div className="container-fluid mobile-view-container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="d-flex flex-row justify-content-center">
                <img
                  src="/assest/Ellipse.png"
                  alt=""
                  className="img-fluid web-circle mobile-circle"
                />
                <h1 className="fs-3 fw-bold web-postion mobile-postion mt-5">
                  Our Coworking Partners
                </h1>
              </div>
              <div className="">
                <img
                  src="/assest/Vector 2.png"
                  alt=""
                  className="img-fluid x-larger"
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <img
                src="/assest/Ellipse 38.png"
                alt=""
                className="float-end img-fluid img38"
              />
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-10 col-md-12 card-container-partners d-flex flex-row card-mobile-view-partner">
                  <img
                    src="/assest/partner1.png"
                    className="img-fluid parnter-img"
                    alt=""
                  />
                  <img
                    src="/assest/partner2.png"
                    className="img-fluid parnter-img"
                    alt=""
                  />
                  <img
                    src="/assest/partner3.png"
                    className="img-fluid parnter-img"
                    alt=""
                  />
                  <img
                    src="/assest/partner4.png"
                    className="img-fluid parnter-img"
                    alt=""
                  />
                  <img
                    src="/assest/partner5.png"
                    className="img-fluid parnter-img"
                    alt=""
                  />
                  <img
                    src="/assest/partner6.png"
                    className="img-fluid parnter-img"
                    alt=""
                  />
                </div>
                <div className="col-lg-1 col-md-1"></div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-5 col-md-12 d-flex flex-column">
              <img
                src="/assest/co-logo.png"
                className="Experiential"
                alt=""
              />
              <img src="/assest/Vector 4.png" className="vector" alt="" />
            </div>
            <div className="col-lg-1 col-md-12"></div>
            <div className="col-lg-6 col-md-12 cold-flex flex-row">
              <img
                src="/assest/Rectangle 25.png"
                className="rectangle25"
                alt=""
              />
              <img
                src="/assest/Rectangle 24.png"
                className="rectangle24"
                alt=""
              />
            </div>
          </div>
          <div className="container mt-5">
            <div className="row d-flex flex-row justify-content-around">
              <div className="col-lg-4 col-md-5 col-9 flex-end d-flex flex-column">
                <div className="d-flex flex-row">
                  <img
                    src="/assest/Ellipse 37.png"
                    className="ellipse-37"
                    alt=""
                  />
                  <h3 className="fw-bold ellipse-37-title">
                    CoFynd in the News
                  </h3>
                </div>
                <div>
                  <img
                    src="/assest/Vector 3.png"
                    className="web-lg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-5 col-md-4"></div>
              <div className="col-lg-3 col-md-3">
                  <img
                    src="/assest/Polygon 3.png"
                    className="img-fluid mt-5 mobile-view-rightarrow"
                    alt=""
                  />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10 card-container-partners d-flex flex-row card-mobile-view-partner">
                  <img
                    src="/assest/your-story.png"
                    className="img-fluid parnter-img"
                    alt=""
                  />
                  <img
                    src="/assest/the-statesman.png"
                    className="img-fluid parnter-img"
                    alt=""
                  />
                  <img
                    src="/assest/tech-circle.png"
                    className="img-fluid parnter-img"
                    alt=""
                  />
                  <img
                    src="/assest/inc42.png"
                    className="img-fluid parnter-img"
                    alt=""
                  />
                  <img
                    src="/assest/et-prime.png"
                    className="img-fluid parnter-img"
                    alt=""
                  />
                  <img
                    src="/assest/daily-hunt.png"
                    className="img-fluid parnter-img"
                    alt=""
                  />
                </div>
                <div className="col-lg-1"></div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Partners;
