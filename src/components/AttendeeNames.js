
import {
    Container,
    Grid,
    Input,
    MenuItem,
    TextField,
    Select,
    InputLabel,
  } from "@mui/material";

const AttendeeNames = ({numberofAttendees}) => {
    const test = "";
    for (let i = 0; i < numberofAttendees; i++) {
        test += "Name of Attendee  " + i + "<br>";
      }
  return (
    <div>
    <TextField
      className="text-field"
      id="outlined-basic"
      label={test}
      variant="outlined"
      //value={nameofAttendee}
      //onChange={handlenameofAttendee}
    />
    
   
    </div>
  );
};

export default AttendeeNames;
