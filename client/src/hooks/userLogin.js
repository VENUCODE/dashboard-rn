import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { useSocket } from "../context/useSocket";
import { message } from "antd";
import { hostUri, endpoints } from "../fetch";

const useLogin = () => {
  const { login } = useAuth();
  const { emitUserConnected } = useSocket();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginUser = async (values) => {
    try {
      setError(null);
      setLoading(true);

      const result = await fetch(hostUri + endpoints.loginUser, {
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
        emitUserConnected({ userId: data.user._id });
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
