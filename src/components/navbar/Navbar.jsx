import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <SearchIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <NotificationsNoneIcon/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <img src="https://www.robertwalters.co.za/content/dam/robert-walters/global/images/article-images/man-with-pen-at-desk.jpg.rendition.1000.1000.webp" alt=""
                        className='avatar' />
                    </div>
                </div>
            </div>
        </div>
    )
}
