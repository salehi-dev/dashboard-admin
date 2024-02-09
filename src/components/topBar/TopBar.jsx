import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

import './TopBar.css'

export default function TopBar() {
  return (
    <div className='top-bar'>
      <div className="topbar-wrapper">
        <div className='top-left'>
          <img className='logo' width={100} height='auto' src="./images/looplend.png" alt="logo" />
          <h2>LoopLend</h2>
        </div>
        <div className='top-right'>
          <div className="topbar-icon_container">
            <NotificationsIcon />
            <span className='top-icon_badge'>2</span>
          </div>
          <div className="topbar-icon_container">
            <LanguageIcon />
            <span className='top-icon_badge'>2</span>
          </div>
          <div className="topbar-icon_container">
            <SettingsIcon />
          </div>
          <img src="./images/profile.png" alt="profile"  className='top-profile'/>
        </div>
      </div>
    </div>
  )
}
