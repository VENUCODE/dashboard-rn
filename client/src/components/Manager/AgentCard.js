import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";

export default function AgentCard({ data }) {
  return (
    <>
      <div class="container" style={{ width: "300px" }}>
        <div class="card">
          <div class="card-body">
            <center>
              {" "}
              <img src="..sdf" className="img-fluid  img-square mb-3 p-3" />
              <h5 className="card-title mt-2">{data.name}</h5>
              <p className="card-text">
                <FontAwesomeIcon
                  icon={faLocationPin}
                  style={{ color: "red" }}
                />{" "}
                {data.location}{" "}
              </p>
              <a
                href="#"
                className="btn btn-block btn-outline-primary btn-rounded mt-3 px-5"
              >
                view
              </a>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}
