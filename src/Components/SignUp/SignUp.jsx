import React from "react";
import { useInput } from "../../Hooks/useInput";
import { TextField, makeStyles } from "@material-ui/core";
import "./SignUp.scss";

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
    width: "32ch",
    marginTop: "1.3rem",
  },
}));
export default function SignUp() {
  const classes = useStyles();
  const username = useInput("");
  const password = useInput("");

  return (
    <>
      <div className="Page SignUp-Page-Container">
        <div className="SignUp-Page-Left-tab">
          <div className="SignUp-form">
            <div className="SignUp-Heading">Sign In</div>
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
            <div className="SignUp-Forgot">Forgot Password?</div>
            <div className="SignUp-Button">Sign In</div>

            <div className="SignUp-New">
              <div className="SignUp-SignIn">Don't have an account?</div>
              <div className="SignUp-SignIn-text">Sign Up</div>
            </div>
          </div>
        </div>
        <div className="SignUp-Page-Right-tab">
          <div className="SignUp-background"></div>
          <div className="SignUp-text-message">
            Creating forms <br />
            is now easier
            <br />
            than ever
          </div>
        </div>
      </div>
    </>
  );
}
