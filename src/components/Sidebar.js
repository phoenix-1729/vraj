import React from 'react';
import '../stylesheets/Sidebar.css';
import Soptions from './Soptions';
import ProfileCard from './ProfileCard';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import MemoryIcon from '@mui/icons-material/Memory';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Button from '@mui/material/Button';

function Sidebar() {
    return (
       <div className="sidebar">
           {/* Icon  */} {/* Logo */}
           <TravelExploreIcon/>

           {/* Profile */}
            <ProfileCard/>
           {/* Sidebar Options */}
           <Soptions active Icon={HomeIcon} text="Home"/>                                           {/* Home */}
           <Soptions Icon={SearchIcon} text="Explore"/>                                             {/* Search */}
           <Soptions Icon={NotificationsNoneIcon} text="Notifications"/>                            {/* Notifications */}
           <Soptions Icon={ChatBubbleOutlineIcon} text="Messages"/>                                 {/* Message */}
           <Soptions Icon={MemoryIcon} text="Memories"/>                                            {/* Memories */}
           <Soptions Icon={MoreHorizIcon} text="More"/>                                             {/* More */}
           
           <Button variant="contained" className='sidebar__vrajit' fullWidth>VRAJ IT</Button>                  {/* Button */}
       </div>
    )
}

export default Sidebar;
