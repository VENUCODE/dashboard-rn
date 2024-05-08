import { faWhatsapp } from "@fontawesome/free-brands-svg-icons";
import {
  faHeart,
  faStar,
  faThumbsUp,
} from "@fontawesome/free-regular-svg-icons";
import {
  faCaretLeft,
  faCaretRight,
  faLocationDot,
  faPhone,
} from "@fontawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";

export default function ServiceCard() {
  const data = {
    title: "Mohit Plumbers",
    rating: 4.1,
    nrat: 8,
    location: " ",
  };

  return (
    <>
      <div className="row">
        <div className="col-md-8 serv-card">
          <div className="row">
            <div className="col-md-4">
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="item active">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPf2FaEwebGgeBalK54cAD14t5iAZzox69P4DQjy5Icw&s"
                      alt="First Slide"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://via.placeholder.com/800x300?text=Second+Slide"
                      alt="Second Slide"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://via.placeholder.com/800x300?text=Third+Slide"
                      alt="Third Slide"
                      className="d-block w-100"
                    />
                  </div>
                </div>
                <a
                  className="left carousel-control"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <FontAwesomeIcon icon={faCaretLeft} />
                </a>
                <a
                  className="right carousel-control"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <FontAwesomeIcon icon={faCaretRight} />
                </a>
              </div>
            </div>

            <div className="col-md-8 pt-2">
              <div className="row">
                <h3>
                  <FontAwesomeIcon icon={faThumbsUp} /> {data.title}
                </h3>{" "}
                <FontAwesomeIcon className="top-right-icon" icon={faHeart} />
              </div>
              <div className="row">
                <p style={{ fontSize: 20, wordSpacing: 5 }}>
                  <button className="btn btn-success">{data.rating}</button>{" "}
                  <FontAwesomeIcon className="text-primary" icon={faStar} />
                  <FontAwesomeIcon className="text-primary" icon={faStar} />
                  <FontAwesomeIcon className="text-primary" icon={faStar} />
                  <FontAwesomeIcon
                    className="text-primary"
                    icon={faStar}
                  />{" "}
                  {data.nrat} Ratings
                </p>
              </div>
              <div className="row">
                <p style={{ fontSize: "20px" }}>
                  <FontAwesomeIcon icon={faLocationDot} /> Maulana Azad Road
                  Kausa, Thane
                </p>
              </div>
              <div className="row">
                <div className=" col-sm-4 col-xs-6">
                  <button
                    className="btn btn-success s-btn"
                    style={{ marginBottom: "7px" }}
                  >
                    <FontAwesomeIcon icon={faPhone} /> 9381116577
                  </button>
                </div>
                <div className=" col-sm-4 col-xs-6">
                  <button
                    className="btn btn-primary s-btn"
                    style={{ marginBottom: "7px" }}
                  >
                    Send Enquery
                  </button>
                </div>
                <div className=" col-sm-4 col-xs-6">
                  <button
                    className="btn btn-default s-btn"
                    style={{ marginBottom: "7px" }}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} /> Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
