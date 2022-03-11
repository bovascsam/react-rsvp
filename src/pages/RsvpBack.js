/*import "./Rsvp.css";

import {
  Container,
  Grid,
  Input,
  MenuItem,
  TextField,
  Select,
  InputLabel,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import AttendeeNames from "../components/AttendeeNames";
import { auth, db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const Rsvp = () => {
  // Setting Name State
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  // Setting Are You Attending the Wedding
  const [attending, setAttending] = useState("");
  const handleisAttending = (e) => {
    setAttending(e.target.value);
    console.log(attending);
  };

   // Setting The Names of Attendees
   const [nameofAttendee, setNameofAttendee] = useState("");
   const handlenameofAttendee = (e) => {
    setNameofAttendee(e.target.value);
    console.log(nameofAttendee);
  };
  
  // Setting Number of Attendees
  const [numberofAttendees, setNumberofAttendees] = useState("");
  const [attendeeHtml, setAttendeeHtml] = useState([]);
  const numberisAttending = (e) => {
    setNumberofAttendees(e.target.value);
    console.log(numberofAttendees);
    let rows = [];
    for (let i = 0; i < e.target.value; i++) {
      rows.push(
        <TextField
          key={i}
          className="text-field"
          id="outlined-basic"
          label="nameofAttendee "
          variant="outlined"
          value={nameofAttendee}
          onChange={handlenameofAttendee}
        />
      );
      console.log(rows);
    }
    setAttendeeHtml(rows);
  };

 

  // sending To Database

  const [user, setUser] = useState();
  useEffect(() => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUser(docSnap.data());
      }
    });
  }, []);
  const handleSubmit = async (e) => {
    /* e.preventDefault();
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      name,
      attending,
      numberofAttendees,
    });
    handleSubmit();
  };


  return (
    <div>
      <form className="form" onChange={handleSubmit}>
        <Container className="rsvp_container ">
          <TextField
            className="text-field"
            id="outlined-basic"
            label="Enter Your Name"
            variant="outlined"
            value={name}
            onChange={handleChange}
          />
          <InputLabel id="demo-simple-select-label">
            Are You Attending the Wedding
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={attending}
            label="Age"
            onChange={handleisAttending}
          >
            <MenuItem value={"true"}>Yes</MenuItem>
            <MenuItem value={"false"}>No</MenuItem>
          </Select>
          {attending == "true" ? (
            <div>
              <TextField
                className="text-field"
                id="outlined-basic"
                label="Number of Attendees"
                type="number"
                variant="outlined"
                value={numberofAttendees}
                onChange={numberisAttending}
              />
            </div>
          ) : null}

          <div>{attendeeHtml}</div>

          <div className="btn_container">
            <button className="btn">{"Submit"}</button>
          </div>
        </Container>
      </form>
    </div>
  );
};

export default Rsvp;
*/