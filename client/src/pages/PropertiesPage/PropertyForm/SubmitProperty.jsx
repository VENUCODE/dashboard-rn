import { Button, message } from "antd";
import React from "react";
import { endpoints, hostUri } from "../../../fetch";
import { useProperties } from "../../../context/useProperties";

const SubmitProperty = ({
  propertyState,
  setPropertyState,
  setLoading,
  loading,
  setValid,
  valid = false,
}) => {
  const { getProperties } = useProperties();

  const handleAddProperty = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      for (const key in propertyState) {
        if (propertyState.hasOwnProperty(key) && key !== "images") {
          const value = propertyState[key];

          formData.append(key, JSON.stringify(value));
        }
      }

      propertyState.images.forEach((item) =>
        formData.append("images", item.originFileObj)
      );

      const response = await fetch(hostUri + endpoints.addProperty, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        message.success(data.message, 1);
        setPropertyState({});
        getProperties();
      } else {
        setValid(true);
        message.error(data.message, 1);
      }
    } catch (error) {
      setValid(true);

      console.log("An error occurred while adding the property:", error);
      message.error("Failed to add property. Please try again later.", 1);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        className="w-100"
        loading={loading}
        disabled={!valid}
        onClick={handleAddProperty}
      >
        Add Property
      </Button>
    </div>
  );
};

export default SubmitProperty;
