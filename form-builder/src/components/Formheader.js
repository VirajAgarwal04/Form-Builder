import React from 'react'
import "./Formheader.css";
import formImage from './formImage.png';
import { FiStar, FiSettings } from 'react-icons/fi';
import {AiOutlineEye } from 'react-icons/ai';
import IconButton from '@mui/material/IconButton';
import { IoMdFolderOpen } from "react-icons/io";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import avatarImage from './2.jpg';

export default function Formheader() {

    return (
      <div className='form_header'>
          <div className='form_header_left'>
            <img src={formImage} style={{ height: "45px", width: "40px" }} />
            <input type="text" placeholder="Untitled form" className="form_name"></input>
          </div>
          <div className='form_header_right'>
  
          <IconButton>
            <ColorLensIcon size={28} className="form_header_icon" />
          </IconButton>
          <IconButton>
            <AiOutlineEye size={26} className="form_header_icon" />
          </IconButton>
          <IconButton>
            <FiSettings size={26} className="form_header_icon" />
          </IconButton>
  
          <Button variant='contained' color='primary' href='#contained-buttons' style={{ backgroundColor: "#673ab7" }}>Send</Button>
  
          <IconButton>
            <MoreVertIcon className="form_header_icon" />
          </IconButton>
          <IconButton>
            <Avatar style={{height:"30px",width:"30px"}} src={avatarImage}/>
          </IconButton>
          </div>
          
      </div>

      
    )
  }