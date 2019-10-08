import React from 'react';
import './adminheader.css';
import {
  Link
} from 'react-router-dom';

function AdminHeader() {
  return (
    <div classname='adminheader'>
      <h1 className='hallname2'> Welcome Administrator </h1>
      <nav className='nav1'>
        <ul  className='firstName'>
          <li>
            <Link className='log1' to='/settings'>Settings</Link>
          </li>
          <li>
            <Link className='log2' to='/logout'>Logout</Link>
          </li>
        </ul>
      </nav>
      <br/>
    </div>
  );
}

export default AdminHeader;
