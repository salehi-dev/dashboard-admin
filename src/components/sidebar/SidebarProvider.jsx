import React from 'react'
import {
  LineStyle as LineStyleIcon,
  Timeline as TimelineIcon,
  TrendingUp as TrendingUpIcon,
  PermIdentity as PermIdentityIcon,
  PersonAddAlt as PersonAddAltIcon,
  Storefront as StorefrontIcon,
  AttachMoney as AttachMoneyIcon,
  BarChart as BarChartIcon,
  MailOutline as MailOutlineIcon,
  DynamicFeed as DynamicFeedIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  WorkOutline as WorkOutlineIcon,
  Report as ReportIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';


import './Sidebar.css'  
import SidebarIcon from './SidebarIcon';

export default function SidebarProvider() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <Link className='link' to='/'>
              <SidebarIcon icon={<LineStyleIcon />} routeName="Home" className="active"/>
            </Link>
            <SidebarIcon icon={<TimelineIcon />} routeName="Analytics" />
            <SidebarIcon icon={<TrendingUpIcon />} routeName="Sales" />
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <Link className='link' to="/users">
              <SidebarIcon icon={<PermIdentityIcon />} routeName="Users" />
            </Link>
            <Link className='link' to="/newUser">
              <SidebarIcon icon={<PersonAddAltIcon />} routeName="New User" />
            </Link>
            <Link className='link' to="/products">
              <SidebarIcon icon={<StorefrontIcon />} routeName="Products" />
            </Link>
            <SidebarIcon icon={<AttachMoneyIcon />} routeName="Transactions" />
            <SidebarIcon icon={<BarChartIcon />} routeName="Reports" />
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list">
            <SidebarIcon icon={<MailOutlineIcon />} routeName="Male" />
            <SidebarIcon icon={<DynamicFeedIcon />} routeName="Feedback"/>
            <SidebarIcon icon={<ChatBubbleOutlineIcon />} routeName="Messages"/>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <SidebarIcon icon={<WorkOutlineIcon />} routeName="Manage"/>
            <SidebarIcon icon={<TimelineIcon />} routeName="Analytics"/>
            <SidebarIcon icon={<ReportIcon />} routeName="Reports"/>
          </ul>
        </div>
      </div>
    </div>
  )
}
