import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Avatar} from "@mui/material";
import "../stylesheets/ProfileCard.css";

function ProfileCard() {
    return(
        <>
        <div className="mainbox">
           <Avatar rounded 
            alt="Chandan"
            className="imag"
           />
            <div className="user">
                <span className="name">                                    {/* Name */}
                    Chandan
                </span>
                <span className="username">                                   {/* Username */}
                    @Chandan            
                </span>
            </div>
            <MoreVertIcon className="vicon"/>
        </div>
        </>
    )
}

export default ProfileCard;