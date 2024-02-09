import React from 'react'

import './Sidebar.css'

export default function SidebarIcon({ icon, routeName, className }) {
  return (
    <li className={`sidebar-list_item ${className && "active"}`}>
      {icon}
      {routeName}
    </li>
  )
}
SidebarIcon.defaultProps = {
  className: false
}
