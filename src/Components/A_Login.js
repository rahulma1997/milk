import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Log() {
  return (
    <>
      <div className="AD_Log">
        <h1>
          <b>Admin Login</b>
        </h1>

        <form>
          <TextField
            id="standard-basic"
            label="password"
            variant="standard"
            type="password"
          />
          <br />

          <Link to="/forget_password">
            <a>Forget Password?</a>
          </Link>
          <br />

          <div className="log-btn">
            <Link to="/Dashboard">
              <Button variant="contained">Login</Button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Log;
