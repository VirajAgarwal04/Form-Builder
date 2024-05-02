import React from "react";
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AppIcon from '@mui/icons-material/Apps';
import formimage from './formImage.png';
import { Height } from "@mui/icons-material";

function Header() {
  return (
    <div className="header">
      <div className="header_info">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <div className="logo-container">
          <img src={formimage} className = "formimage" alt="no image"/>
          <div className="info" style={{ fontWeight: "bold" }}>Forms</div>
        </div>
      </div>

      <div className="header_search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" name="Search" placeholder="Search" />
      </div>

      <div className="header_right">
        <IconButton>
          <AppIcon />
        </IconButton>
      </div>
    </div>
  );
}
export default Header;
