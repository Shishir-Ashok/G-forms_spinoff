import React from "react";
import { useInput } from "../../Hooks/useInput";
import axios from "axios";
import { TextField, makeStyles } from "@material-ui/core";
import "./SignIn.scss";
import { BASE_URL } from "../../Utils/apitUtils";
import jwt from "../../Utils/jwt";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setNavbarColor } from "../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    fontFamily: "Open Sans",
    width: "41ch",
    marginTop: "1.3rem",
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const username = useInput("");
  const password = useInput("");
  const repassword = useInput("");
  const email = useInput("");
  const dispatch = useDispatch();
  dispatch(setNavbarColor(props.isSignIn ? "white" : "black"));
  const handleSignUp = async () => {
    const body = {
      username: username.value,
      password: password.value,
      passwordConfirm: repassword.value,
      email: email.value,
    };
    const apiUrl = BASE_URL + "/users/signup";

    try {
      const resp = await axios.post(apiUrl, { ...body });
      jwt.setJWt(resp.data.token);
      toast.success("Thanks for registering!");
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message);
      } else toast.error("Something went wrong!");
    }
  };
  const handleLogin = async () => {
    const body = {
      username: username.value,
      password: password.value,
    };
    const apiUrl = BASE_URL + "/users/login";
    try {
      const resp = await axios.post(apiUrl, { ...body });
      jwt.setJWt(resp.data.token);
      toast.success("Logged in Successfully!");
    } catch (err) {
      if (err.response) toast.error(err.response.data.message);
      else toast.error("Something went wrong!");
    }
  };

  return (
    <>
      {props.isSignIn ? (
        <div className="Page SignIn-Page-Container">
          <div className="SignIn-Page-Left-tab">
            <div className="SignIn-form">
              <div className="SignIn-Heading">Sign In</div>
              <TextField
                label="Username"
                {...username}
                className={classes.textField}
                variant="outlined"
              ></TextField>
              <TextField
                type="password"
                label="Password"
                {...password}
                className={classes.textField}
                variant="outlined"
              ></TextField>
              <div className="SignIn-Forgot">Forgot Password?</div>
              <div onClick={handleLogin} className="SignIn-Button">
                Sign In
              </div>

              <div className="SignIn-New">
                <div className="SignIn-SignIn">Don't have an account?</div>
                <div className="SignIn-SignIn-text">Sign Up</div>
              </div>
            </div>
          </div>
          <div className="SignIn-Page-Right-tab">
            <div className="SignIn-text-message">
              Creating forms <br />
              is now easier
              <br />
              than ever
            </div>
          </div>
        </div>
      ) : (
        <div className="Page SignUp-Page-Container">
          <div className="SignUp-form">
            <div className="SignUp-Heading">Sign Up</div>
            <TextField
              label="Username"
              {...username}
              className={classes.textField}
              variant="outlined"
            ></TextField>
            <TextField
              label="Email ID"
              {...email}
              className={classes.textField}
              variant="outlined"
            ></TextField>
            <TextField
              type="password"
              label="Password"
              {...password}
              className={classes.textField}
              variant="outlined"
            ></TextField>
            <TextField
              type="password"
              label="Re-enter password"
              {...repassword}
              className={classes.textField}
              variant="outlined"
            ></TextField>
            <div onClick={handleSignUp} className="SignUp-Button">
              Sign Up
            </div>

            <div className="SignUp-New">
              <div className="SignUp-SignUp">Already have an account?</div>
              <div className="SignUp-SignUp-text">Sign In</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
