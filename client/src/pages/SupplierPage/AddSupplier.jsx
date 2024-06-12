import { useState } from "react";
import { Divider, Form, message } from "antd";
import { Button } from "@mui/material";
import { FaUserPlus } from "react-icons/fa";
import { LoadingOutlined } from "@ant-design/icons";
import { endpoints, hostUri } from "../../fetch";
import { useSuppliers } from "../../context/useSupplier";

export default function AddSupplier() {
  const { getSuppliers } = useSuppliers();

  const [loading, setLoading] = useState(false);
  const initialState = {
    usertype: "supplier",
    name: "",
    email: "",
    mobile: "",
    password: "",
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

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${hostUri}${endpoints.addSupplier}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const data = await response.json();
        message.error(data.message);
      } else {
        getSuppliers();
        const data = await response.json();
        message.success(data.message, 1);
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
      <div className="row px-2 py-1">
        <div className="col-lg-10 offset-lg-1 col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Add supplier</h4>
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
                      placeholder="supplier's Name"
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
                      placeholder="supplier@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 col-lg-4 col-md-6">
                    <label className="form-label">Mobile</label>
                    <input
                      required
                      type="tel"
                      className="form-control"
                      placeholder="supplier's Mobile"
                      name="mobile"
                      value={formData.mobile}
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
                </div>
                <div className="row justify-content-center pt-2">
                  <div className="mb-3 col-lg-3 col-md-4 col-6">
                    <Button
                      disabled={loading}
                      type="submit"
                      className="btn btn-sm btn-primary light border-2 border-primary shadow w-100"
                    >
                      {loading && (
                        <LoadingOutlined spin style={{ fontSize: 24 }} />
                      )}{" "}
                      Add supplier
                    </Button>
                  </div>
                  <div className="mb-3 col-lg-3 col-md-4 col-6">
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
