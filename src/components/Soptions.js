import React from 'react';
import '../stylesheets/Soptions.css';
import Tooltip from '@mui/material/Tooltip';

function Soptions({ active,text, Icon }) {
    return (
        <Tooltip title={text} placement="right" arrow>
            <div className={`soptions ${active && "soptions--active"}`}>
                <Icon/>
                <h2>{text}</h2>
            </div>
        </Tooltip>
    )
}

export default Soptions;
