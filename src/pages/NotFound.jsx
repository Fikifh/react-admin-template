import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../assets/pagenotfound.jpg';
const NotFoundPage = () => {

    return (
        <React.Fragment>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',

            }}>
                <img src={PageNotFound} />
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',

            }}>
                <Typography>
                    <Link to="/">Go to Home </Link>
                </Typography>
            </Box>
        </React.Fragment>
    )
}
export default NotFoundPage;