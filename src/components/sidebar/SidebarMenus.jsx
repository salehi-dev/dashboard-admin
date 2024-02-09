import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './Sidebar.css'

export default function SidebarMenus({ 
  title, firstRouteName, secoundRouteName, thirdRouteName, 
  firstIcon, secoundIcon, thirdIcon, fourthIcon, fourthRouteName,
   fifthRouteName, fifthIcon, className
}) {


  const [currentPath, setCurrentPath] = useState('/');


  const pathHandler = () => {
    switch (currentPath) {
      case '/':
        setCurrentPath('/')
        console.log("clicked");
        break;
      case '/users':
        setCurrentPath('/users')
        break;
      case '/newUser':
        setCurrentPath('/newUser')
        break;
      case '/products': 
      setCurrentPath('products')
      break
    }
  }

  
  useEffect(() => {
    pathHandler()
    console.log("clicked");
  }, [currentPath])



  return (
    <div className="sidebar-menu">
      <h4 className="sidebar-title">{title}</h4>
      <ul className="sidebar-list">
        {/* // *? به یکی از اینها باید کلاس اکتیو بدی تا اون روتی که فعال هست بگروند تیره تری بگیره */}
        <Link onClick={pathHandler} to={currentPath} >
          <li className={`sidebar-list_item ${className && "active"}`}>
            {firstIcon}
            {firstRouteName}
          </li>
        </Link>
        <li className='sidebar-list_item'>
          {secoundIcon}
          {secoundRouteName}
        </li>
        <li className='sidebar-list_item'>
          {thirdIcon}
          {thirdRouteName}
        </li>
        {(fourthIcon && fourthRouteName) && (<li className='sidebar-list_item'>
          {fourthIcon}
          {fourthRouteName}
        </li>)}
        {(fifthIcon && fifthRouteName) && (<li className='sidebar-list_item'>
          {fifthIcon}
          {fifthRouteName}
        </li>)}
      </ul>
    </div>
  )
}
SidebarMenus.defaultProps = {
  title: true ,
  firstRouteName: true ,
  secoundRouteName: true ,
  thirdRouteName: true ,
  firstIcon: true ,
  secoundIcon: true ,
  thirdIcon: true ,
  fourthIcon: false ,
  fourthRouteName: false ,
  fifthRouteName: false,
  fifthIcon: false,
  className: false
}