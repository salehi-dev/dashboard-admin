import React from 'react';
import {
  ArrowDownward as ArrowDownwardIcon,
  ArrowUpward as ArrowUpwardIcon
} from '@mui/icons-material';

import './Features.css';

export default function Features({ title, amount, percent, icon }) {

  return (
    <div className='features'>
      <div className="feature-item">
        <div className="container-title">
          <span className='feature-title'>{title}</span>
        </div>
        <div className="feature-container">
          <span className='feature-money'>{`$${amount}`}</span>
          <span className='feature-rate'>
            {percent} {icon}
          </span>
        </div>
        <span className="feature-sub">Compared to last month</span>
      </div>
    </div>
  )
}
