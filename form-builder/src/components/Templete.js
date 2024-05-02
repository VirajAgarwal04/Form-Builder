import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { IconButton } from "@mui/material"; 
import './Templete.css'
import blank from "../images/blank.png";
import party from "../images/party_image.png";
import recent from "../images/recent.png";
import contact_info from "../images/Contact Information.png";
import T_shirt from "../images/T-shirt Sign Up.png";

import uuid from 'react-uuid';
import { useNavigate }  from 'react-router-dom';

function Templete() {

    const navigate = useNavigate();
    const createForm =()=>{
        const id_ = uuid();
        navigate("/form/" + id_);
    };

  return (
    <div className='templete_section'>
        <div className='templete_top'>
            <div className='templete_left'>
                <spam style={{fontSize:'16px',color:"#202124"}}>Start a new form</spam>
            </div>
            <div className='templete_right'>
                <div className='gallery_button'>
                    <span style={{ fontSize: '16px', color: "#202124" }}>Templete galary</span>
                    <UnfoldMoreIcon fontSize='small'/>
                </div>
                <IconButton>
                    <MoreVertIcon fontSize='small'/>
                </IconButton>
            </div>
        </div>
        <div className='templete_body'>
        <div className='card' onClick={createForm}>
                <img src={blank} alt='No Image' className='card_image'/>
                <p className='card_title'>Blank form</p>
            </div>
            <div className='card' onClick={createForm}>
                <img src={recent} alt='No Image' className='card_image'/>
                <p className='card_title'>RSVP</p>
            </div>
            <div className='card' onClick={createForm}>
                <img src={party} alt='No Image' className='card_image'/>
                <p className='card_title'>Party Invite</p>
            </div>
            <div className='card' onClick={createForm}>
                <img src={contact_info} alt='No Image' className='card_image'/>
                <p className='card_title'>Contact Information</p>
            </div>
            <div className='card' onClick={createForm}>
                <img src={T_shirt} alt='No Image' className='card_image'/>
                <p className='card_title'>T-shirt Sign Up</p>
            </div>
        </div>     
    </div>
  )
}
export default Templete