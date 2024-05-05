import { useState } from "react";
import LocationAutoComplete from "./LocationAutoComplete";
import { Divider, Form, Spin, message } from "antd";
import { Button } from "@mui/material";
import { FaUserPlus } from "react-icons/fa";
import { LoadingOutlined } from "@ant-design/icons";
import { useAuth } from "../../context/useAuth";
import { endpoints, hostUri } from "../../fetch";
import { useManager } from "../../context/useManager";
export default function AddManager() {
  const { userData } = useAuth();
  const { getManagers } = useManager();
  const [loading, setLoading] = useState(false);
  const initialState = {
    name: "",
    email: "",
    password: "",
    dob: "",
    approvedBy: `${userData.id}`,
    status: "running",
    role: "manager",
    usertype: "manager",
    location: "",
    coordinates: {
      lat: "",
      long: "",
    },
  };
  const [reset, setReset] = useState(false);
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
      coordinates: {
        lat: place.lat,
        long: place.lng,
      },
    });
  };

  const handleSubmit = async () => {
    const updatedFormData = {
      ...formData,
      approvedBy: userData.id,
    };
    setFormData(updatedFormData);

    try {
      setLoading(true);

      const response = await fetch(`${hostUri}${endpoints.addManager}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const data = await response.json();
        message.error(data.message);
        console.log(data.message);
      } else {
        const data = await response.json();
        console.log(data.message);
        getManagers();
      }
    } catch (err) {
      console.log(err.message);
    } finally {
      setFormData(initialState);
      setLoading(false);
    }
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
              <Form onFinish={handleSubmit}>
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
                    <label className="form-label">Location</label>
                    <LocationAutoComplete
                      className="form-control"
                      reset={reset}
                      onPlaceSelected={handlePlaceSelected}
                    />
                  </div>
                </div>
                <div className="row justify-content-center pt-2">
                  <div className="mb-3 col-lg-3 col-md-4 col-6">
                    {" "}
                    {/* Half width on small screens, 1/4 width on medium screens */}
                    <Button
                      disabled={loading}
                      type="submit"
                      className="btn btn-sm btn-primary light border-2 border-primary shadow w-100 "
                    >
                      {loading && (
                        <LoadingOutlined
                          spin
                          style={{
                            fontSize: 24,
                          }}
                        />
                      )}{" "}
                      Add Manager
                    </Button>
                  </div>
                  <div className="mb-3 col-lg-3 col-md-4 col-6">
                    {" "}
                    {/* Half width on small screens, 1/4 width on medium screens */}
                    <Button
                      type="reset"
                      value={"Reset"}
                      onClick={() => {
                        setReset((p) => !p);
                        setFormData(initialState);
                      }}
                      className="btn btn-sm btn-danger light shadow border-2 border-danger w-100"
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
