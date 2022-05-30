import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <div>
      <nav id='navigation' className='floatbar popout'>
        <div>
          <ul>
            <li><Link to={process.env.REACT_APP_BASE_URL}>Home</Link></li>
            <li><Link to={process.env.REACT_APP_GALLERY_URL}>Gallery</Link></li>
            <li><Link to={process.env.REACT_APP_APPLICATIONSTATUS_URL}>Application Status</Link></li>
            <li><Link to={process.env.REACT_APP_HOWTOAPPLY_URL}>How To Apply</Link></li>
            <li><Link to={process.env.REACT_APP_ABOUTUS_URL}>About Us</Link></li>
          </ul>
        </div>
      </nav>
      <nav id='social' className='floatbar popout'>
        <div>
          <ul>
            <li><a href={`https://www.youtube.com/channel${process.env.REACT_APP_YOUTUBE_EXTERNAL_URL}`} target='_blank' rel='noreferrer'>YouTube</a></li>
            <li><a href={`https://www.instagram.com${process.env.REACT_APP_INSTAGRAM_EXTERNAL_URL}`} target='_blank' rel='noreferrer'>Instagram</a></li>
            <li><a href={`https://www.twitter.com${process.env.REACT_APP_TWITTER_EXTERNAL_URL}`} target='_blank' rel='noreferrer'>Twitter</a></li>
            <li><a href={`https://www.tiktok.com${process.env.REACT_APP_TIKTOK_EXTERNAL_URL}`} target='_blank' rel='noreferrer'>TikTok</a></li>
            <li><a href={`https://www.facebook.com${process.env.REACT_APP_FACEBOOK_EXTERNAL_URL}`} target='_blank' rel='noreferrer'>Facebook</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
