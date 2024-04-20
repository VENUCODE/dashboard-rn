import { useState } from "react";
import { useAuth } from "../context/useAuth";
import { message } from "antd";
const useSignup = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const registerUser = async (values) => {
    if (values.password !== values.cpassword) {
      return setError("Password did not match");
    }
    try {
      setError(null);

      setLoading(true);

      //FIXME - the url for the signup backed route should be provided
      const result = await fetch("https://localhost:3300/api/user/signup", {
        method: "POST",
        contentType: "application/json",
        body: JSON.stringify(values),
      });
      const data = result.json();
      if (result.status === 201) {
        //FIXME - display a registration succesfull popup
        message.error("successful registration");
        //NOTE - after registration send the data to the login function of auth provider to share the data in context
        login(data.token, data.user);
      } else if (result.status === 400) {
        setError(data.message);
      } else {
        message.error("Registration filed");
        //FIXME -  display the registration failure alert message
      }
    } catch (error) {
      message.error(error.message, 3);
      //FIXME - display the error message here using component
    } finally {
      setLoading(false);
    }
  };
  //NOTE -the loading  is used to set loading state on register button
  //NOTE - error is used to show the error message incase of failure
  //NOTE - registerUser function to handle the onsubmit event on the registration form
  return { loading, error, registerUser };
};

export default useSignup;
