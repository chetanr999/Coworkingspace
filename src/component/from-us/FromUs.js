import React from "react";
import "./From.style.css";

const FromUs = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-8 col-md-8 col-xl-5 col-lg-6">
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
              <div className="">
                <img src="/assest/Vector 2.png" alt="" className="vector-img" />
              </div>
            </div>
            <div className="col-4 col-md-4 col-xl-7 col-lg-6">
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
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-10 col-sm-12 d-flex justify-content-center">
              <img
                src="/assest/Ellipse 32.png"
                className="img-fluid ellipse-background-img"
                alt="ellipse 32"
              />
            </div>
            <div className="col-lg-6 col-md-10 col-sm-12 ms-md-5">
              <div className="row mt-4">
                <div className="col-lg-1 col-sm-5 col-2 col-md-2 d-flex flex-row">
                  <img src="/assest/Star.png" alt="" className="img-fluid star-img mt-0 mt-lg-2 mt-md-2" />
                </div>
                <div className="col-lg-10 col-md-10 col-10 col-sm-12">
                  <h3 className="text">Exclusive pricing for CoFynd members</h3>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-1 col-2 col-md-2 d-flex flex-row">
                  <img src="/assest/Star.png" alt="" className="img-fluid star-img mt-0 mt-lg-2 mt-md-2" />
                </div>
                <div className="col-lg-10 col-md-10 col-10 col-sm-12">
                  <h3 className="text">Verified Spaces and Trusted Partners</h3>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-1 col-2 col-md-2 d-flex flex-row">
                  <img src="/assest/Star.png" alt="" className="img-fluid star-img mt-0 mt-lg-2 mt-md-2" />
                </div>
                <div className="col-lg-10 col-md-10 col-10 col-sm-12">
                  <h3 className="text">No booking service fee 100% offline</h3>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-1 col-2 col-md-2 d-flex flex-row">
                  <img src="/assest/Star.png" alt="" className="img-fluid star-img mt-0 mt-lg-2 mt-md-2" />
                </div>
                <div className="col-lg-10 col-md-10 col-10 col-sm-12">
                  <h3 className="text">support even after you move in</h3>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-1 col-2 col-md-2 d-flex flex-row">
                  <img src="/assest/Star.png" alt="" className="img-fluid star-img mt-0 mt-lg-2 mt-md-2" />
                </div>
                <div className="col-lg-10 col-md-10 col-10 col-sm-12">
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
