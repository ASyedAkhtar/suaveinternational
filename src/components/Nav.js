import { Path } from 'react-router-dom';

import React from 'react';
import { Link } from 'react-router-dom';

import { Home } from './Home';
import { ApplicationStatus } from './ApplicationStatus';
import { HowToApply } from './HowToApply';

const Nav = () => {
  return (
    <div>
      <nav id='navigation' className='floatbar box popout'>
        <div>
          <ul>
            <li><Link to={process.env.REACT_APP_HOME_URL}>Home</Link></li>
            <li><Link to={process.env.REACT_APP_HOME_URL}>Gallery</Link></li>
            <li><Link to={process.env.REACT_APP_PERSONS_API}>Rules</Link></li>
            {/* <li><Link To={process.env.REACT_APP_APPLICATIONSTATUS_URL}>Application Status</Link></li>
            <li><Link To={process.env.REACT_APP_HOWTOAPPLY_URL}>How To Apply</Link></li>*/}
            <li><Link to={process.env.REACT_APP_ABOUTUS_URL}>About Us</Link></li>
          </ul>
        </div>
      </nav>
      <nav id='social' className='floatbar box popout'>
        <div>
          <ul>
            <li><Link to={process.env.REACT_APP_HOME_URL}>YouTube</Link></li>
            <li><Link to={process.env.REACT_APP_HOME_URL}>Instagram</Link></li>
            <li><Link to={process.env.REACT_APP_HOME_URL}>Twitter</Link></li>
            <li><Link to={process.env.REACT_APP_HOME_URL}>TikTok</Link></li>
            <li><Link to={process.env.REACT_APP_HOME_URL}>Facebook</Link></li>
            <li><Link to={process.env.REACT_APP_HOME_URL}>Snapchat</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav;
