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
  const [country, setCountry] = useState([]);



  useEffect(() => {
    fetch("https://cozone.divashudh.com/api/get_country")
      .then((res) => res.json())
      .then((res) => {
        setCountry(res.data);
      });
  }, []);


  const handlerCity = () =>{
      
  }
  

  const defaultImg = 'https://i.postimg.cc/qBNCdGpt/gallery-1.png'

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-2 img-container bg-white">
              <img
                src="https://i.postimg.cc/0r1MmzSF/Group.png"
                className="img-fluid mx-4 mt-3 col-md-4 col-lg-2 col-sm-4"
                alt="logo"
              />
            </div>
            <div className="col-lg-10 col-mg-8">
              <div className="row">
                <div className="col-lg-12 col-md-12 icon-container d-flex justify-content-end">
                  <div className="col-lg-5 col-md-12 d-flex justify-content-end me-3">
                    <div className="icons">
                      <FontAwesomeIcon icon={faFacebook} color="#FFC727" />
                    </div>
                    <div className="icons">
                      <FontAwesomeIcon icon={faEnvelope} color="#FFC727" />
                    </div>
                    <div className="icons">
                      <FontAwesomeIcon icon={faLinkedin} color="#FFC727" />
                    </div>
                    <div className="icons">
                      <FontAwesomeIcon icon={faYoutube} color="#FFC727" />
                    </div>
                    <div className="icons">
                      <FontAwesomeIcon icon={faWhatsapp} color="#FFC727" />
                    </div>
                    <div className="icons">
                      <FontAwesomeIcon icon={faInstagram} color="#FFC727" />
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
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        {country.map((e) => {
                          return(
                          <li>
                            <Link className="dropdown-item d-flex flex-row" to="#" key={e.id}>
                              <img src={e.flag?defaultImg:e.flag} className="img-fluid country-img" alt="logo"/>
                              <p className="ms-2" onClick={handlerCity}>{e.name}</p>
                            </Link>
                          </li>
                          )
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
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            Action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Another action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Something else here
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
                        Offices
                      </Link>

                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            Action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Another action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Something else here
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
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <Link className="dropdown-item" to="#">
                            Action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Another action
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Something else here
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="dropdown">
                      <Link
                        className="btn mobile-view-425 mobile-375"
                        to="#"
                        // role="button"
                        id="dropdownMenuLink"
                        // data-bs-toggle="dropdown"
                        // aria-expanded="false"
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
        <PosterPage />
      </section>
    </>
  );
}

export default HeaderPage;
