import React from "react";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function User() {
  return (
    <>
    <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <Link to="/User"><li>User</li></Link>
          <Link to="/inward"><li>Inward</li></Link>
          <Link to="/outward"><li>Outward</li></Link>
          <Link to="/payment"><li>Payment</li></Link>
          <li>Receipt</li>
          <li>Row Material Purpose</li>
          <li>Consumption</li>
          <li className="dropdown">
            Employee
            <ul className="dropdown-content">
              
              <li>Account</li>
              <li>Attendace</li>
              <li>Salery</li>
            </ul>
          </li>
        </ul>
      </div>
     
      <div className="user">
        
      <h1>Users</h1>
         
         <div className="sel_op">
         <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
        <InputLabel id="demo-simple-select-standard-label">Select Role</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
       
          label="Select Role"
        >
          <MenuItem value="1">
            <em>None</em>
          </MenuItem>
          <MenuItem value="2">Shop</MenuItem>
          <MenuItem value="3">Client</MenuItem>
          <MenuItem value="4">Party</MenuItem>
        </Select>
      </FormControl>
      </div>
            <br />
            <br />
            <TextField id="standard-basic" label="User Name" variant="standard" type="text" />
       <br />
       <br />
       <TextField id="standard-basic" label="password" variant="standard" type="password" />
      <br />
      <br />

      <TextField id="standard-basic" label="Mobile" variant="standard" type="text" />
      <br />
      <br />

      <TextField id="standard-basic" label="Remark" variant="standard" type="text" />
      <br />
      <br />
      
      <Link to="/Dashboard">
      <Button variant="outlined">Save</Button>
      </Link>
      
      </div>
    
    </>
  )
}

export default User;