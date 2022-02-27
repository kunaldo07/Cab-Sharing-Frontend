import React from 'react';
import Button from '@mui/material/Button';
import "./addbox.css";
import CustomizedDialogs from '../dailog/Dailog';

const Addbox = () => {
  return (
    <div className="addbox">
        <div className="first-part">
            <div className="filters">
                <div className="first-button">
                    <Button variant="contained">From IITH</Button>
                </div>
                <div className="second-button">
                    <Button variant="contained">To IITH</Button>
                </div>
            </div>
        </div>
        <div className="second-part">
            <div className="addButtonx">
                <CustomizedDialogs/>
                {/* <Button className="addButton" variant="contained">Add</Button> */}
            </div>
        </div>
    </div>
  )
}

export default Addbox;