import React, {useState} from 'react';
import StorageIcon from '@mui/icons-material/Storage';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import IconButton from '@mui/material/IconButton';
import "./Mainbody.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import recent from '../images/recent.png'

import axios from "axios";
// import { useHistory } from "react-router-dom";

function MainBody() {
    const [files, setFiles] = useState([]);
    async function filenames() {
        var request = await axios.get("http://localhost:9000/get_all_filenames")
        let filenames = request.data;
        setFiles(filenames)
    } 
    filenames()
  return (
    <div className='mainbody'>
        <div className='mainbody_top'>  
            <div className='mainbody_top_left' style={{fontSize:"16px" ,fontWeight:"500"}}>
                recent forms
            </div>
            <div className='mainbody_top_right'>
                <div className='mainbody_top_centre'style ={{fontSize:"14px",marginRight:"125px"}}>Owned by anyone<ArrowDropDownIcon/></div>
                <IconButton>
                    <StorageIcon style ={{fontSize:"16px",color:"black"}}/>
                </IconButton>
                <IconButton>
                    <FolderOpenIcon style ={{fontSize:"16px",color:"black"}}/>
                </IconButton>
            </div> 
        </div>

        <div className='mainbody_docs'>
            <div className='doc_card'>
                <img src ={recent} className='doc_image'/>
                <div className='doc_card_content'>
                    <h5></h5>
                    <div className='doc_content'  style ={{fontSize:"12px",color:"grey"}}>
                        <div className='content_left'>
                            <StorageIcon style ={{color:"white",fontSize:"12px",backgroundColor : "#6E2594",padding:"3px",marginRight:"3px",borderRadius:"2px"}}/> Opened 30 April 2024
                        </div>
                        <MoreVertIcon  style ={{fontSize:"16px",color:"grey"}} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainBody;