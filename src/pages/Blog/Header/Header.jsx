import React from 'react'
import HeaderWithBg from '../../../utils/HeaderWithBg/HeaderWithBg';
import DotBtn from '../../../utils/Dotbtn/Dotbtn';
import './Header.css';

function Header() {
  return (
    <div style={{paddingTop:'9rem'}}>
        <div className='d-flex justify-content-center'>
            <DotBtn text='blog'/>
        </div>
      
        <h1 className='pageBlogHeading text-center pb-5 text-uppercase'>Salesforce and AI insights from CODM</h1>
    </div>
  )
}
export default Header;