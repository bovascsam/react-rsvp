import "./Rsvp.css";

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

  // Setting Number of Attendees
  const [numberofAttendees, setNumberofAttendees] = useState("");

  const numberisAttending = (e) => {
    setNumberofAttendees(e.target.value);
    console.log(numberofAttendees);
    //for (let i = 0; i < e.target.value; i++) {
    // setInputFields([...inputFields, { attendeename: "" }]);
    //}
    //console.log(inputFields);
  };

  //Name of Attending
  const [namesofattendees, setNamesofAttendees] = useState("");
  const handleNamesofAttendees = (e) => {
    setNamesofAttendees(e.target.value);
    console.log(namesofattendees);
  };

  // Require Accomodation
  const [reqacc, setReqacc] = useState("");
  const handlereqacc = (e) => {
    setReqacc(e.target.value);
    console.log(reqacc);
  };
  // Number of Accomodates

  const [numberofAccomodates, setNumberofAccomodates] = useState("");

  const handlenumberofAccomodates = (e) => {
    setNumberofAccomodates(e.target.value);
    console.log(numberofAttendees);
  };

  // Names of Accomodates

  const [namesofaccomodates, setNamesofAccomodates] = useState("");
  const handleNamesofAccomodates = (e) => {
    setNamesofAccomodates(e.target.value);
    console.log(namesofattendees);
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
    e.preventDefault();

    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      name,
      attending,
      numberofAttendees,
      namesofattendees,
      reqacc,
      numberofAccomodates,
      namesofaccomodates,
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

          {attending == "true" ? (
            <div>
              <TextField
                className="text-field"
                id="outlined-basic"
                label="Names of Attendees"
                value={namesofattendees}
                onChange={handleNamesofAttendees}
              />
            </div>
          ) : null}

          {attending == "true" ? (
            <div>
              <InputLabel id="demo-simple-select-label">
                Do you require accomodation
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={reqacc}
                label="Age"
                onChange={handlereqacc}
              >
                <MenuItem value={"true"}>Yes</MenuItem>
                <MenuItem value={"false"}>No</MenuItem>
              </Select>
            </div>
          ) : null}

          {reqacc == "true" ? (
            <div>
              <TextField
                className="text-field"
                id="outlined-basic"
                label="Number of Accomodates"
                type="number"
                variant="outlined"
                value={numberofAccomodates}
                onChange={handlenumberofAccomodates}
              />
            </div>
          ) : null}

          {reqacc == "true" ? (
            <div>
              <TextField
                className="text-field"
                id="outlined-basic"
                label="Names of Accomodates"
                value={namesofaccomodates}
                onChange={handleNamesofAccomodates}
              />
            </div>
          ) : null}

          <div className="btn_container">
            <button className="btn">{"Submit"}</button>
          </div>
        </Container>
      </form>
    </div>
  );
};

export default Rsvp;
