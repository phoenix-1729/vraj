import React from "react";
import "../stylesheets/Post.css";
import "../stylesheets/ProfileCard.css";
// import Avatar from '@mui/material/Avatar';
// import ImageIcon from '@mui/icons-material/Image';
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Tooltip, Avatar } from "@mui/material";

function Post() {
  return (
    <div className="post">
      <div className="postmain">
        <div className="postbox">
          {/* ProfilePhoto */}
          {/* <div className="imag1" /> */}
          <Avatar rounded />
          <div className="post-text">
            <h2>What's the next plan?</h2>
          </div>
        </div>
        <div className="posttypes">
          <Tooltip title="Image" placement="bottom">
            <div className="posttype">
              <AddPhotoAlternateIcon />
              <span>Image</span>
            </div>
          </Tooltip>

          <Tooltip title="Place" placement="bottom">
            <div className="posttype">
              <AddLocationAltIcon className="lcolor" />
              <span>Place</span>
            </div>
          </Tooltip>

          <Tooltip title="Schedule" placement="bottom">
            <div className="posttype">
              <CalendarTodayIcon className="ccolor" />
              <span>Schedule</span>
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Post;
