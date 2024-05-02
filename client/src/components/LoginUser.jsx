import React, { useState } from "react";
import { Grid, TextField, Button, CircularProgress } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import useLogin from "../hooks/userLogin";
import { Divider } from "antd";

const LoginUser = () => {
  const { loading, error, loginUser } = useLogin();

  const onFinish = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    loginUser({ email, password });
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (event) => {
    const email = event.target.value;
    if (!validateEmail(email)) {
      setEmailError("Enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const onFinishFailed = async (data) => {
    console.log(data);
  };

  return (
    <div className="content-body h-100">
      <Grid container justifyContent="center " className="py-4 container">
        <Grid
          item
          xs={10}
          md={6}
          className="card d-flex px-3 py-3 shadow-lg  flex-column"
        >
          <Grid item xs={12}>
            <Divider orientation="center" orientationMargin={10}>
              Login
            </Divider>
          </Grid>
          <form
            name="basic"
            style={{ maxWidth: 600 }}
            autoComplete="off"
            onSubmit={onFinish}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Email"
                  name="email"
                  onChange={handleEmailChange}
                  error={!!emailError}
                  helperText={emailError}
                  required
                  InputProps={{
                    startAdornment: <AccountCircle />,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Password"
                  name="password"
                  type="password"
                  required
                  InputProps={{
                    startAdornment: <Lock />,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  variant="outlined"
                  fullWidth
                  className="btn-primary light border-2 border-primary shadow-sm"
                  disabled={loading}
                  loading={loading}
                  startIcon={loading && <CircularProgress size={20} />}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginUser;
