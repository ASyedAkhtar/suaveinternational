import React from 'react';
import { Link } from 'react-router-dom';

import Resource from '../constants/Resource.js';

const Nav = () => {
  return(
    <div>
      <nav id='navigation' className='floatbar popout'>
        <div>
          <ul className='navlinks'>
            <li><Link to={Resource.BASE}></Link></li>
            <li><Link to={Resource.GALLERY}></Link></li>
            <li><Link to={Resource.APPLICATIONSTATUS}></Link></li>
            <li><Link to={Resource.HOWTOAPPLY}></Link></li>
            <li><Link to={Resource.ABOUTUS}></Link></li>
          </ul>
        </div>
      </nav>
      <nav id='social' className='floatbar popout'>
        <div>
          <ul className='sociallinks'>
            <li><a href={`https://www.youtube.com/channel${process.env.REACT_APP_YOUTUBE_EXTERNAL_URL}`} target='_blank' rel='noreferrer'></a></li>
            <li><a href={`https://www.instagram.com${process.env.REACT_APP_INSTAGRAM_EXTERNAL_URL}`} target='_blank' rel='noreferrer'></a></li>
            <li><a href={`https://www.twitter.com${process.env.REACT_APP_TWITTER_EXTERNAL_URL}`} target='_blank' rel='noreferrer'></a></li>
            <li><a href={`https://www.tiktok.com${process.env.REACT_APP_TIKTOK_EXTERNAL_URL}`} target='_blank' rel='noreferrer'></a></li>
            <li><a href={`https://www.facebook.com${process.env.REACT_APP_FACEBOOK_EXTERNAL_URL}`} target='_blank' rel='noreferrer'></a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
