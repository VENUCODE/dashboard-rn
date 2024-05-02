import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { message } from "antd";

const useLogin = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginUser = async (values) => {
    try {
      setError(null);
      setLoading(true);

      const result = await fetch("http://localhost:3300/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await result.json();
      console.log(data);
      if (result.ok) {
        message.success("Login successful", 3);
        login(data.token, data.user);
      } else {
        message.error(data.message);
        setError(data.message || "Login failed");
      }
    } catch (error) {
      console.log(error);
      message.error(error.message);
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, loginUser };
};

export default useLogin;
