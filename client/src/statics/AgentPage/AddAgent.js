import { useState } from "react";
import LocationAutoComplete from "./LocationAutoComplete";
import { Button, Divider } from "antd";
import { FaUserPlus } from "react-icons/fa";
export default function AddAgent() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    dob: "",
    occupation: "",
    createdBy: "",
    location: "",
    latitude: "",
    longitude: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePlaceSelected = (place) => {
    setFormData({
      ...formData,
      location: place.name,
      latitude: place.lat,
      longitude: place.lng,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // setFormData(initialState);
  };
  return (
    <>
      <Divider className="fw-800 " orientation="center" orientationMargin={50}>
        {<FaUserPlus size={30} color="primary" />}
      </Divider>
      <div className="row px-2 py-1">
        <div className="col-lg-10 offset-lg-1 col-12 ">
          <div className="card ">
            <div className="card-header  ">
              <h4 className="card-title ">Add Agent</h4>
            </div>
            <div className="card-body pb-1">
              <form>
                <div className="row">
                  <div className="mb-3 col-lg-4 col-md-6">
                    <label className="form-label">Name</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="Agent's Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 col-lg-4 col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      required
                      type="email"
                      className="form-control"
                      placeholder="agent@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 col-lg-4 col-md-6">
                    <label className="form-label">Password</label>
                    <input
                      required
                      type="password"
                      className="form-control"
                      placeholder="********"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 col-lg-4 col-md-6">
                    <label className="form-label">Date of Birth</label>
                    <input
                      required
                      type="date"
                      className="form-control"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 col-lg-4 col-md-6">
                    <label className="form-label">Occupation</label>
                    <input
                      required
                      type="text"
                      className="form-control"
                      placeholder="Agent's Occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3 col-lg-4 col-md-6">
                    <label className="form-label">Location</label>
                    <LocationAutoComplete
                      className="form-control"
                      onPlaceSelected={handlePlaceSelected}
                    />
                  </div>
                </div>
                <div className="row justify-content-center pt-2">
                  <div className="mb-3 col-lg-3 col-md-4 col-6">
                    {" "}
                    {/* Half width on small screens, 1/4 width on medium screens */}
                    <Button
                      type="submit"
                      className="btn btn-sm btn-primary light border-2 border-primary shadow w-100 "
                      onClick={handleSubmit}
                    >
                      Add agent
                    </Button>
                  </div>
                  <div className="mb-3 col-lg-3 col-md-4 col-6">
                    {" "}
                    {/* Half width on small screens, 1/4 width on medium screens */}
                    <Button
                      type="reset"
                      value={"Reset"}
                      onClick={() => setFormData(initialState)}
                      className="btn btn-sm btn-danger light shadow border-2 border-danger w-100"
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
