import React from 'react'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={1} />
                </div>
                <p className='title'>Total sales made today</p>
                <p className='amount'>$54</p>
                <p className='desc'>Previous transaction are processed, last payment will be okay.</p>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Monthly</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownIcon />
                            <div className="resultAmount">
                            $12.2k
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Weekly</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUp />
                            <div className="resultAmount">
                            $30.2k
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Daily</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUp />
                            <div className="resultAmount">
                                $32.2k
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured