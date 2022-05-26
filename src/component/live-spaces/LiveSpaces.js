import React from "react";
import "./LiveSpaces.style.css";

function LiveSpaces() {
  return (
    <>
      <section>
        <div className="container-fluid cover-img">
          <div className="row">
            <div className="col-lg-7 d-flex flex-wrap">
              <div className="row">
                <div className="col-lg-4">
                  <img
                    src="/assest/Group 8.png"
                    alt=""
                    className="img-fluid img-dote"
                  />
                </div>
                <div className="col-lg-8 live-spaces-imgs">
                  <img
                    src="/assest/circle.png"
                    alt=""
                    className="ellipse-circle"
                  />
                  <img
                    src="/assest/Ellipse 18.png"
                    alt=""
                    className="img-fluid ellipse-shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-5 float-md-end">
              <div className="row">
                <div className="col-lg-8 mt-5 mobile-live-spaces">
                  <h1 className="text-white fw-bold live-spaces-text">25,000+</h1> 
                  <h4 className="fw-bold mobile-title">Live Spaces</h4>
                </div>
                <div className="col-lg-4">
                <img
                  src="/assest/Ellipse 19.png"
                  alt=""
                  className="img-fluid half-circle"
                />
                </div>
              </div>
              <div className="row d-flex flex-row">
                <div className="col-lg-6 mt-5 ms-lg-2 mobile-location">
                    <h1 className="text-white fw-bold">700+</h1>
                    <h4 className="fw-bold">Locations</h4>
                </div>
                <div className="col-lg-4">
                <img
                  src="/assest/Ellipse 29.png"
                  alt=""
                  className="img-fluid mt-5 ms-5"
                />
                </div>
              </div>
              <div className="row d-flex flex-row">
                <div className="col-lg-3 mt-5 ms-lg-5 cities-div">
                    <h1 className="text-white fw-bold">18</h1>
                    <h4 className="fw-bold">Cities</h4>
                </div>
                <div className="col-lg-5 col-md-3 col-sm-2 last-dots">
                <img
                  src="/assest/Group 9.png"
                  alt=""
                  className="img-fluid w-25 mt-5 ms-6 ms-md-0 float-end"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LiveSpaces;
