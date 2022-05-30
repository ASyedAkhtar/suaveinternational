import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <div>
      <nav id='navigation' className='floatbar popout'>
        <div>
          <ul className='navlinks'>
            <li><Link to={process.env.REACT_APP_BASE_URL}></Link></li>
            <li><Link to={process.env.REACT_APP_GALLERY_URL}></Link></li>
            <li><Link to={process.env.REACT_APP_APPLICATIONSTATUS_URL}></Link></li>
            <li><Link to={process.env.REACT_APP_HOWTOAPPLY_URL}></Link></li>
            <li><Link to={process.env.REACT_APP_ABOUTUS_URL}></Link></li>
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
