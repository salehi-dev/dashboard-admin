import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';

import './WidgetSm.css'
import { newMembers } from '../../datas'

export default function WidgetSm() {
  return (
    <div className='widget-sm'>
      <div className='wiget-sm_title'>New Members</div>
      <ul className="widget-sm_list">
        {newMembers.map(item => (
          <li key={item.id} className="widgetsm-list_item">
            <img src={item.img} alt="photo" className='widget-sm_img' />
            <div className="widget-sm_user">
              <span className='widget-sm_usernaem'>{item.username}</span>
              <span className='widget-usertitle'>{item.title}</span>
            </div>
            <button className='widget-sm_btn'>
              <VisibilityIcon className='widget-sm_icon' />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
