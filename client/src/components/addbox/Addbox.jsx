import React from 'react';
import Button from '@mui/material/Button';
import "./addbox.css";
import CustomizedDialogs from '../dailog/Dailog';
import { useNavigate } from "react-router";
import {useUserAuth} from "../../context/UserAuthContext";

const Addbox = ({home}) => {

    const {logOut} = useUserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try{
            await logOut();
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    const handleMyPosts = () => {
        navigate("/myposts");
    }

   // console.log(home);


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
                {home && (<div className="third-button">
                    <Button variant="contained" onClick={handleMyPosts}>My Posts</Button>
                </div>)}
            </div>
        </div>
        <div className="second-part">
            {home && (<div className="addButtonx">
                <CustomizedDialogs/>
            </div>)}
            <div className="logout">
                <Button variant="contained" onClick={handleLogout}>LogOut</Button>
            </div>
        </div>
    </div>
  )
}

export default Addbox;