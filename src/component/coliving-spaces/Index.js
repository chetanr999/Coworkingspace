import React, { useEffect, useState } from "react";
import HeaderPage from "../header/HeaderPage";
import { Link, useParams } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faChildReaching,
  faAngleRight,
  faMobilePhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import ListData from "../../DataList.json";
import Footer from "../footer/Footer";
import './Index.style.css'

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        marginRight: "40px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "50%",
        padding: "18px",
      }}
    >
      <img
        src="/assest/Vector (2).png"
        alt="arrow_left"
        style={{ marginTop: "-28px", marginLeft: "-3px" }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        marginLeft: "40px",
        zIndex: "1",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "50%",
        padding: "18px",
      }}
    >
      <img
        src="/assest/Vector (1).png"
        alt="arrow_left"
        style={{ marginTop: "-28px", marginLeft: "-8px" }}
      />
    </div>
  );
}

const Index = (props) => {
  const [data, setData] = useState([]);
  const [list, setList] = useState(ListData);
  const [img, setImg] = useState([]);
  const [showdata, setShowData]=useState([]);
  const [filter, setFilter]=useState([]);
  const [updatedata, setUpdateData]=useState([]);
  let { id, name } = useParams();
  const [cityname, setCityName]=useState(name);


  useEffect(() => {
    setCityName(name);
  }, [name])
  


  useEffect(() => {
    fetch(`https://cozone.divashudh.com/api/get_cities_properties_spaces/${id}/2`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
        setShowData(res.data);
        setFilter(res.data);
        setUpdateData(res.data);
        const imges = res.data[0].image;
        const arr = imges.split(",");
        setImg(arr);
      });
  }, [id]);

  const defaultImag = "/assest/silder5.jpg";
  const filterHandler = (e) =>{
    const filterData = (data.length >1 ? data : updatedata).filter( filterID=> {
      return filterID.id == e.id
    });
    
    setData(filterData);
    setCityName(e.address);
  }

  var settings = {
    defaultArrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
      {
        breakpoint: 768,
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
        <HeaderPage />
        <hr />
        <div className="container p-2">
          <div className="row d-flex flex-row justify-content-between">
            <div className="col-12 col-md-10 col-sm-12 col-xl-12 ms-3 ms-xl-0 ms-lg-0 ms-md-0 ms-sm-0">
              <h1 className="col-sm-12 col-12 col-sm-12 col-xl-12 page-heading">Coliving Spaces in {cityname && cityname}</h1>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 col-11 d-flex flex-row ms-3 ms-xl-0 ms-lg-0 ms-md-0 ms-sm-0"
            style={{overflowX:'scroll', overflowY:'hidden'}}
          >
           
          {         
              filter.map((e)=>{
                return(                  
                  <div className="col-auto col-md-auto col-sm-3 col-lg-auto col-xl-auto filter-btn mb-2" key={e.id}
                    onClick={()=>{filterHandler(e)}}
                  >
                  <Link to={'#'} className="text-decoration-none p-3 link-btn">
                    {e.address}
                  </Link>
                  </div>
                )
              })
            }
          </div>
          {/* <hr /> */}
        </div>
      </section>

      <section>
        <div className="container" style={{ marginTop: "-30px" }}>
          <div className="row d-flex flex-row justify-content-between">

            {data && data.length >0 ? data.map((e) => {
              return (
                <div
                  className="col-8 col-md-4 col-lg-4 col-sm-10 col-xl-12 mt-4 card-inner rounded-2 shadow"
                  style={{ backgroundColor: "white", border:'1px solid #d7d7d9'}}
                  key={e.city_id}
                >
                  <Slider {...settings} className="col-xl-12" style={{width:'100%'}}>
                    {img.map((item) => {
                      return (
                        <div className="">
                          <Link
                             to={"/coliving/colivingDom/"+e.id+"/"+e.name}
                            >
                            <img
                              src={item? item: defaultImag}
                              alt=""
                              className="img-fluid rounded-top img-card"
                            />
                          </Link>
                        </div>
                      );
                    })}
                  </Slider>
                  <Link
                   to={"/coliving/colivingDom/"+e.id+"/"+e.name}
                    className="pe-auto text-decoration-none text-dark"
                   >
                    <div className="col-12 col-md-6 col-xl-12 col-lg-12 col-sm-12 mt-3">
                      <h5 className="adress-card">{e.name}</h5>
                    </div>
                    <div className="col-12 col-md-12 col-lg-12 col-sm-12 mt-3">
                      <p style={{color:"gray"}}>
                        <FontAwesomeIcon icon={faLocationDot} color="gray" />{" "}
                        {e.address},
                        {e.area}, {e.city_name}
                      </p>
                      <p style={{color:"gray"}}>
                        <FontAwesomeIcon icon={faChildReaching} color="gray" />{" "}
                        Seating Capacity : {e.seat_capacity}
                      </p>
                      <hr style={{ width: "40%" }} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-12 col-sm-6">
                      <p style={{color:"gray"}}>Starting from</p>
                    </div>
                    <div className="row d-flex flex-row justify-content-between" style={{marginTop:'-20px'}}>
                      <div className="col-6 col-md-6 col-sm-6">
                        <h5 className="mt-1">{e.starting_price}<spna style={{color:"gray",fontSize:'15px'}}>/month</spna></h5>
                      </div>
                      <div className="col-6 col-md-6 col-sm-6">
                        <p className="text-end mt-2">
                          Explore Now{" "}
                          <FontAwesomeIcon
                            icon={faAngleRight}
                            color="gray"
                            className=" fa-xs"
                          />
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            }):(
              <div
              className="col-12 col-md-12 col-lg-12 col-sm-12 col-xl-12  mt-5"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.322)" }}
            >
              <h3 className="text-center" style={{color:'gray'}}>Data Not Found !!</h3>
            </div>
            )}
          </div>
        </div>
      </section>


      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 col-sm-12">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item shadow">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      //   type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <button
                        className="btn btn-primary col-md-4 col-lg-1 col-sm-3"
                        // style={{ marginLeft: "32rem" }}
                      >
                        Enquire
                      </button>
                      <h5 className="col-md-0 ms-2">
                        Not able to find your perfect space?
                      </h5>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    // class="accordion-collapse collapse show"
                    // aria-labelledby="headingOne"
                    // data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <div className="container">
                        <form>
                          <div class="row mb-4">
                            <div class="col">
                              <div class="form-outline">
                                <input
                                  type="text"
                                  id="form3Example1"
                                  class="form-control"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div class="col">
                              <div class="form-outline">
                                <input
                                  type="text"
                                  id="form3Example2"
                                  class="form-control"
                                  placeholder="Mobile Number"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="row mb-2">
                            <div class="col-md-12 mb-md-3 mb-sm-3 mb-3">
                              <div class="form-outline">
                                <input
                                  type="email"
                                  id="form3Example1"
                                  class="form-control"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                          </div>
                            <div class="row mb-4">
                            <div class="col">
                              <div class="form-outline">
                                <div class="dropdown">
                                  <button
                                    class="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{width:'100%', backgroundColor:'white', color:'gray', border:'1px solid #c4c4c2'}}
                                  >
                                   Type
                                  </button>
                                  <ul
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton1"
                                    style={{width:'100%'}}
                                  >
                                    <li>
                                      <Link class="dropdown-item" to={'#'}>
                                        Action
                                      </Link>
                                    </li>
                                    <li>
                                      <Link class="dropdown-item" to={'#'}>
                                        Another action
                                      </Link>
                                    </li>
                                    <li>
                                      <Link class="dropdown-item" to={'#'}>
                                        Something else here
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div class="col">
                              <div class="form-outline">
                                <div class="dropdown">
                                  <button
                                    class="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{width:'100%', backgroundColor:'white', color:'gray', border:'1px solid #c4c4c2'}}

                                  >
                                   Person
                                  </button>
                                  <ul
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton1"
                                    style={{width:'100%'}}
                                  >
                                    <li>
                                      <Link class="dropdown-item" to={'#'}>
                                        1-10
                                      </Link>
                                    </li>
                                    <li>
                                      <Link class="dropdown-item" to={'#'}>
                                        20-30
                                      </Link>
                                    </li>
                                    <li>
                                      <Link class="dropdown-item" to={'#'}>
                                        30-40
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>


                          <button type="submit" class="btn btn-primary">
                            Sign up
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
      <section className="mt-5">
        <div className="container">
          <div className="row">
            {list.map((e) => {
              return (
                <div className="col-1 col-12">
                  <ol>
                    <li style={{ color: "blue", fontWeight: "bold" }}>
                      {e.title}
                    </li>
                    <p>{e.description}</p>
                  </ol>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default Index;
