import React from 'react';
import Grid from '@mui/material/Grid';
import VideoListItem from './VideoListItem';
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';

const VideoList = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <VideoListItem/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <VideoListItem/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <VideoListItem/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <VideoListItem/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <VideoListItem/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <VideoListItem/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <VideoListItem/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <VideoListItem/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <VideoListItem/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <VideoListItem/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <VideoListItem/>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <VideoListItem/>
            </Grid>
        </Grid>
    );
};

export default VideoList;
