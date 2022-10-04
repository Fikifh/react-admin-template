import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import People from '@mui/icons-material/People';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="top">
            <span className='logo'>Bank Soal</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
                <p className="title">MANAGEMENT</p>
                <li><People className='icon'/><span>Users</span></li>
                <li><Inventory2Icon className='icon'/><span>Products</span></li>
                <p className="title">GENERAL</p>
                <li><SettingsIcon className='icon'/><span>Settings</span></li>
                <li><LogoutIcon className='icon'/><span>Logout</span></li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>

    </div>
  )
}
