import { useState, useEffect } from "react";
import { Form, Input, Button, message, Typography, InputNumber } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../../context/useAuth";
import LoactionButton from "./LocationButton";

const AddAgent = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form] = Form.useForm();
  const [Location, setLocation] = useState({
    lat: 0,
    long: 0,
    place: null,
  });
  const { userData } = useAuth();

  useEffect(() => {
    form.setFieldsValue({
      "location.lat": Location.lat,
      "location.long": Location.long,
      "location.place": Location.place,
    });
  }, [Location, form]);
  const onFinish = async (values) => {
    if (Location.lat === 0 || Location.long === 0 || !Location.place) {
      message.error("Location can't be empty", 1);
    } else {
      try {
        // setLoading(true);
        // const res = await fetch("http://localhost:3300/upload_img", {
        //   method: "POST",
        //   body: values,
        // });
        console.log(values);
      } catch (error) {
        message.error(error, 2);
      } finally {
        setLoading(false);
      }
    }
  };

  const onFinishFailed = async (data) => {
    console.log(data);
  };

  return (
    <div className="h-100 w-100 flex justify-content-center align-items-center">
      <div className="d-flex justify-content-center align-items-center flex-column gap-3">
        <Form
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          encType="multipart/form-data"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Button
            block
            type="text"
            className="bg-danger-subtle text-dark btn-outline-danger my-2 shadow-sm"
          >
            <LoactionButton setLocation={setLocation} Location={Location} />
          </Button>
          {Location.place && (
            <Typography className="mb-4 bg-warning-subtle text-center rounded shadow-sm">
              Location:
              {Location.place ? (
                Location.place
              ) : (
                <span className="text-danger">Select Location</span>
              )}
            </Typography>
          )}
          {/* /* -------------------------------------------------------------- */}
          <Form.Item
            label="Latitude"
            name={["location", "lat"]}
            className="d-flex flex-column"
            rules={[{ required: true, message: "Latitude is required" }]}
          >
            <InputNumber precision={10} placeholder="Latitude" type="number" />
          </Form.Item>
          <Form.Item
            label="Longitude"
            name={["location", "long"]}
            className="d-flex flex-column"
            rules={[{ required: true, message: "Longitude is required" }]}
          >
            <InputNumber precision={10} placeholder="Longitude" type="number" />
          </Form.Item>
          <Form.Item
            label="Location"
            name={"place"}
            className="d-flex flex-column"
            rules={[{ required: true, message: "Location is required" }]}
          >
            <Input placeholder="Location" />
          </Form.Item>
          {/* -------------------------------------------------------------- */}

          <Form.Item
            label="Agent Email"
            name="email"
            className="d-flex flex-column"
            rules={[{ required: true, message: "Agent email is required" }]}
          >
            <Input name="email" placeholder="Enter email" type="email" />
          </Form.Item>
          <Form.Item
            label="Profile Image"
            name="image"
            className="d-flex flex-column"
            rules={[{ required: true, message: "Profile image is required" }]}
          >
            <Input name="image" type="file" accept="image/*" multiple={false} />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            className="d-flex flex-column"
            rules={[{ required: true, message: " Agent name  is required" }]}
          >
            <Input placeholder="Enter name" name="name" type="name" />
          </Form.Item>
          <Input name="managerId" value={userData.id} type="hidden" disabled />
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input agents password!" },
            ]}
          >
            <Input.Password placeholder="Enter password" name="password" />
          </Form.Item>
          <Button block htmlType="submit" className="shadow" loading={loading}>
            Add agent
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddAgent;
