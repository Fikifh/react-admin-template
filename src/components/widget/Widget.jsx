import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BalanceIcon from '@mui/icons-material/Balance';

const Widget = ({type}) => {
    let data;
    let amount = 100;
    let diff = 20;

    switch(type) {
        case "user" :
            data = {
                title : "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonIcon className='icon' style={{color: "crimson"}}/>
            }
            break;
        case "order" :
            data = {
                title : "Order",
                isMoney: true,
                link: "See all orders",
                icon: <ShoppingCartIcon className='icon'/>
            }
            break;
        case "earning" :
            data = {
                title : "Earning",
                isMoney: true,
                link: "See all Earning",
                icon: <LightbulbIcon className='icon'/>
            }
            break;
            default :
            data = {
                title : "Balance",
                isMoney: true,
                link: "See all Balance",
                icon: <BalanceIcon className='icon'/>
            }
            break;
    }
    return (
        <div className='widget'>
            <div className="left">
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney && "$"} {amount}</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget