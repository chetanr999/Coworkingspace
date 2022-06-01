import React, { useState, useEffect } from "react";
import "./Header.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import PosterPage from "../poster/PosterPage";

function HeaderPage() {
  const [city, setCity] = useState([]);

  useEffect(() => {
    fetch("https://cozone.divashudh.com/api/get_cities")
      .then((res) => res.json())
      .then((res) => {
        setCity(res.data);
      });
  }, []);

  const defaultImg = "https://i.postimg.cc/qBNCdGpt/gallery-1.png";



  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-2 img-container bg-white">
              <Link to={"/"}>
                <img
                  src="/assest/cozonlogo.png"
                  className="img-fluid mx-4 mt-2 col-md-4 col-lg-2 col-sm-4 col-12 logo-img"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="col-lg-10 col-mg-8">
              <div className="row">
                <div className="col-lg-12 col-md-12 icon-container d-flex justify-content-end">
                  <div className="col-lg-5 col-md-12 d-flex justify-content-end me-3">
                    <div className="icons">
                      <Link to={'#'} className="pe-auto">
                      <FontAwesomeIcon icon={faFacebook} color="#FFC727" />
                      </Link>
                    </div>
                    <div className="icons">
                      <Link to={'#'} className="pe-auto">
                      <FontAwesomeIcon icon={faEnvelope} color="#FFC727" />
                      </Link>
                    </div>
                    <div className="icons">
                      <Link to={'#'} className="pe-auto">
                      <FontAwesomeIcon icon={faLinkedin} color="#FFC727" />
                      </Link>
                    </div>
                    <div className="icons">
                      <Link to={'#'} className="pe-auto">
                      <FontAwesomeIcon icon={faYoutube} color="#FFC727" />
                      </Link>
                    </div>
                    <div className="icons">
                      <Link to={'#'} className="pe-auto">
                      <FontAwesomeIcon icon={faWhatsapp} color="#FFC727" />
                      </Link>
                    </div>
                    <div className="icons">
                      <Link to={'#'} className="pe-auto">
                      <FontAwesomeIcon icon={faInstagram} color="#FFC727" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-12 col-md-12 d-flex justify-content-end ">
                  <div className="col-lg-12 col-md-12 col-12 d-flex flex-row justify-content-end dropdown-container mobile-view">
                    <div className="dropdown">
                      <Link
                        className="btn dropdown-toggle mobile-view"
                        to="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Coworking
                      </Link>

                      <ul
                        className="dropdown-menu menu-scroll mt-2"
                        aria-labelledby="dropdownMenuLink"
                      >
                     {city.map((e) => {
                          return (
                            <li>
                              <Link
                                className="dropdown-item d-flex flex-row"
                                to={'/coworking/city/'+ e.id+"/"+e.location}
                                key={e.id}
                              >
                                <img
                                  src={e.image ? e.image : defaultImg}
                                  className="img-fluid country-img"
                                  alt="logo"
                                />
                                <p className="ms-1">{e.location}</p>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                   
                    <div className="dropdown">
                      <Link
                        className="btn dropdown-toggle mobile-view"
                        to="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Coliving
                      </Link>

                      <ul
                        className="dropdown-menu menu-scroll mt-2"
                        aria-labelledby="dropdownMenuLink"
                      >
                        {city.map((e) => {
                          return (
                            <li>
                              <Link
                                className="dropdown-item d-flex flex-row"
                                to={'/coliving/city/'+ e.id+"/"+e.location}
                                // state={{
                                //   // id:e.id,
                                //   name:e.location
                                // }}
                                key={e.id}
                              >
                                <img
                                   src={e.image ? e.image : defaultImg}
                                  className="img-fluid country-img"
                                  alt="logo"
                                />
                                <p className="ms-1">{e.location}</p>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="dropdown">
                      <Link
                        className="btn dropdown-toggle mobile-view"
                        to="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Offices
                      </Link>

                      <ul
                        className="dropdown-menu menu-scroll mt-2"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            Noida
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Lucknow
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Delhi
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown">
                      <Link
                        className="btn dropdown-toggle mobile-view"
                        to="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Knowledge
                      </Link>

                      <ul
                        className="dropdown-menu menu-scroll mt-2"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            List your Space
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            About CoFynd
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Contact CoFynd
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Cofynd Blog
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown">
                      <Link
                        className="btn mobile-view-425 mobile-375"
                        to=""
                        id="dropdownMenuLink"                        
                      >
                        +91 9999 999999
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <PosterPage /> */}
      </section>
    </>
  );
}

export default HeaderPage;
