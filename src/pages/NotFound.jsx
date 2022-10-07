import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { useLottie } from "lottie-react";

import notfoundAnimate from "../assets/animate-not-found.json"

const NotFoundPage = () => {
    const options = {
        animationData: notfoundAnimate,
        loop: true
      };
    
      const { View } = useLottie(options);
    return (
        <React.Fragment>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',

            }}>
                {View}
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',

            }}>
                <Typography>
                    <Link to="/" style={{textDecoration:'none', color:'orange'}}><Button style={{color:'#ff9800'}}>Go Home</Button></Link>
                </Typography>
            </Box>
        </React.Fragment>
    )
}
export default NotFoundPage;