import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HeaderPage from "../header/HeaderPage";

const SpaceType = () => {
    const [city, setCity] = useState([]);
    const [staticcity, setStaticCity] = useState([]);
    let { location } = useParams();
  
    useEffect(() => {
      fetch(`https://cozone.divashudh.com/api/get_cities`)
        .then((res) => res.json())
        .then((res) => {
          setStaticCity(res.data);
        });
    }, []);
  
    const lookinghandler = (e) => {
      fetch(`https://cozone.divashudh.com/api/get_cities`)
        .then((res) => res.json())
        .then((res) => {
          setCity(res.data);
          setStaticCity(res.data);
        });
    };
  

  return (
    <>
      <section>
        <HeaderPage />
      </section>
      <section>
        <div className="container-fluid img-cover">
          <div className="row">
            <div className="col-lg-6 col-md-6 d-flex flex-column">
              <div className="container mt-5">
                <div className="row ms-xl-5 ms-lg-3 ms-md-3">
                  <div className="col-lg-12 col-md-12 text-container">
                    <p className="lh-1 fw-bold text-white ms-5x ms-lg-0 text-size">
                    Find the Best{" "}
                      <span
                        className="fw-bold text-size-50"
                        style={{ color: "black" }}
                      >
                       {location}
                      </span>
                    </p>
                    <p className="lh-1 fw-bold text-white text-size">
                    in India
                    </p>
                  </div>
                </div>
            
                <div className="row d-flex flex-row justify-content-between">
                  <div className="col-x-12 col-lg-12 col-md-12 col-12 mt-5 card-mobile-view">
                    {
                     (staticcity.length > 0
                        ? staticcity.slice(0, 12)
                        : city
                      ).map((e) => {
                        return (
                          <div
                            className="col-lg-2 col-md-2 col-xl-1 mb-lg-3 mb-md-3 text-center card-circel-img shadow"
                          >
                            <Link
                              to={e.id + "/" + e.location}
                              key={e.id}
                              style={{ textDecoration: "none", color: "black" }}
                             
                            >
                              <div className="images-div">
                                <img
                                  src={e.image}
                                  alt=""
                                  className="img-size images-div"
                                />
                                <p>{e.location}</p>
                              </div>
                            </Link>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
                <div className="img-dotted"></div>
              </div>
            </div>

            <div className="col-5 col-md-6 col-lg-6">
              <div className="row">
                <div className="col-8 col-md-12 col-lg-12 view-change">
                  <img
                    src="/assest/circle.png"
                    alt=""
                    className="img-fluid circle-image"
                  />
                  <img
                    src="/assest/Ellipse-1-2.png"
                    alt=""
                    className="img-fluid ellipse-image"
                  />
                </div>
                <div className="col-lg-2 col-md-2">
                  <img src="/assest/Group 8.png" alt="" className="dot-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpaceType;
