import React from "react";
import "./From.style.css";

const FromUs = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-6 col-md-6">
              <div className="d-flex flex-row justify-content-center">
                <img
                  src="/assest/Ellipse.png"
                  alt=""
                  className="img-fluid ellipse-circle-img"
                />
                <h1 className="fw-bold fs-2 z-position">
                  What You Get From Us
                </h1>
              </div>
              <div className="d-flex justify-content-center">
                <img src="/assest/Vector 2.png" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-6 col-md-6">
              <div className="d-flex justify-content-center">
                <img
                  src="/assest/Polygon 2.png"
                  alt=""
                  className="img-fluid mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-lg-5 col-md-10 col-sm-12 d-flex justify-content-center">
              <img
                src="/assest/Ellipse 32.png"
                className="img-fluid ellipse-background-img"
                alt="ellipse 32"
              />
            </div>
            <div className="col-lg-6 col-md-10 col-sm-12 ms-md-5">
              <div className="row mt-3">
                <div className="col-lg-1 col-sm-5 d-flex flex-row">
                  <img src="/assest/Star.png" alt="" className="img-fluid star-img mt-2" />
                </div>
                <div className="col-lg-10 col-md-12 col-sm-12">
                  <h3 className="text">Exclusive pricing for CoFynd members</h3>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-1 d-flex flex-row">
                  <img src="/assest/Star.png" alt="" className="img-fluid star-img mt-2" />
                </div>
                <div className="col-lg-10 col-md-12 col-sm-12">
                  <h3 className="text">Verified Spaces and Trusted Partners</h3>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-1 d-flex flex-row">
                  <img src="/assest/Star.png" alt="" className="img-fluid star-img mt-2" />
                </div>
                <div className="col-lg-10 col-md-12 col-sm-12">
                  <h3 className="text">No booking service fee 100% offline</h3>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-1 d-flex flex-row">
                  <img src="/assest/Star.png" alt="" className="img-fluid star-img mt-2" />
                </div>
                <div className="col-lg-10 col-md-12 col-sm-12">
                  <h3 className="text">support even after you move in</h3>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-1 d-flex flex-row">
                  <img src="/assest/Star.png" alt="" className="img-fluid star-img mt-2" />
                </div>
                <div className="col-lg-10 col-md-12 col-sm-12">
                  <h3 className="text">Exclusive Brand Coupon Codes</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FromUs;
