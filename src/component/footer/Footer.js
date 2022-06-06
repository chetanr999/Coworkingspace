import React from "react";
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
import "./Footer.style.css";

const Footer = () => {
  return (
    <>
      <section>
        <div className="container-fluid footer-cover">
          <div className="row first-footer-row">
            <div className="col-lg-2 d-flex justify-content-lg-center">
              <img
               src="/assest/co-logo.png"
                alt=""
                className="footer-log-img"
              />
            </div>
            <div className="col-lg-8 d-flex flex-column justify-content-lg-center">
              <img
                src="/assest/dotted 6.png"
                alt=""
                className="dot-img-first"
              />
              <img
                src="/assest/dotted 6.png"
                alt=""
                className="dot-img-second"
              />
            </div>
            <div className="col-lg-2"></div>
          </div>
          <div className="container">
            <div className="row border-1 border-light">
              <div className="col-lg-3" style={{ border: "2px solid white" }}>
                <p
                  className=" d-flex text-wrap"
                  style={{
                    // textAlign: "justify",
                    marginTop: "20px",
                    fontSize: "14px",
                  }}
                >
                  Fynd the right work space, Globally CoFynd is India’s fastest
                  growing space discovery platform for searching and booking
                  coworking, coliving, and private office spaces. We give access
                  to choose from 25,000+ verified spaces across India and we
                  have just started! Our spaces boast of present-day amenities
                  and reflect Freedom, Flexibility and Fulfillment completely in
                  sync with the modern day millennial behavior. Space Search
                  Made Simple. Search. Book. Work. Live.
                </p>
              </div>
              <div className="col-lg-3" style={{ border: "2px solid white" }}>
                <h5 className="mt-4">Coworking Space</h5>
                <p style={{ }}>
                  Coworking Space In Gurgaon Coworking Space In Delhi Coworking
                  Space In Noida Coworking Space In Bangalore Coworking Space In
                  Hyderabad Coworking Space In Pune Coworking Space In Mumbai
                </p>
              </div>
              <div className="col-lg-3" style={{ border: "2px solid white" }}>
                <h5 className="mt-4">Coliving Space</h5>
                <p style={{}}>
                  Coliving Space In Gurgaon Coliving Space In Delhi Coliving
                  Space In Noida Coliving Space In Bangalore Coliving Space In
                  Hyderabad Coliving Space In Pune Coliving Space In Mumbai
                </p>
              </div>
              <div className="col-lg-3" style={{ border: "2px solid white" }}>
                <h5 className="mt-4">Office Space</h5>
                <p style={{}}>
                  Office Space For Rent In Gurgaon Office Space For Rent In
                  Delhi Office Space For Rent In Noida Office Space For Rent In
                  Bangalore Office Space For Rent In Hyderabad Office Space For
                  Rent In Pune Office Space For Rent In Mumbai
                </p>
              </div>
            </div>
          </div>
          <div className="container mt-3">
            <div className="row">
              <div className="col-lg-3">
                <img src="/assest/Group 9.png" alt="" />
              </div>
              <div className="col-lg-3 d-flex flex-column">
                <h5>Call us on:</h5>
                <h5>+91 9999 10 8078</h5>
              </div>
              <div className="col-lg-3 d-flex flex-column">
                <h5>Call us on:</h5>
                <h5>+91 9999 10 8078</h5>
              </div>
              <div className="col-lg-3">
                <div className="row d-flex flex-row justify-content-around">
                  {" "}
                  <div className="icon-img">
                    <Link to={'#'} className="pe-auto">
                    <FontAwesomeIcon icon={faFacebook} color="#FFC727" />
                    </Link>
                  </div>
                  <div className="icon-img">
                    <Link to={'#'} className="pe-auto">
                    <FontAwesomeIcon icon={faEnvelope} color="#FFC727" />
                    </Link>
                  </div>
                  <div className="icon-img">
                    <Link to={'#'} className="pe-auto">
                    <FontAwesomeIcon icon={faLinkedin} color="#FFC727" />
                    </Link>
                  </div>
                  <div className="icon-img">
                    <Link to={'#'} className="pe-auto">
                    <FontAwesomeIcon icon={faYoutube} color="#FFC727" />
                    </Link>
                  </div>
                  <div className="icon-img">
                    <Link to={'#'} className="pe-auto">
                    <FontAwesomeIcon icon={faWhatsapp} color="#FFC727" />
                    </Link>
                  </div>
                  <div className="icon-img">
                    <Link to={'#'} className="pe-auto">
                    <FontAwesomeIcon icon={faInstagram} color="#FFC727" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="img-dot">
            <img src="/assest/Group 9.png" alt="" className="float-end" />
          </div>
        <Link to={"#"}>
          <div className="chat">
            <img src="/assest/chat.png" className="img-fluid w-100" alt="" />
          </div>
        </Link>
        <Link to={"#"}>
          <div className="customer">
            <img src="/assest/customer.png" className="img-fluid w-100" alt="" />
          </div>
        </Link>

        </div>
      </section>
    </>
  );
};

export default Footer;
