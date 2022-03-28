import React from 'react';
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import videoImg from '../img/video.png';
import Typography from '@mui/material/Typography';

const VideoPageDetail = () => {
    const fontSettingsSubtitle = {
        fontSize: '24px',
        fontWeight: '600'
    }

    const fontSettingsInfo = {
        fontSize: '24px',
        color: '#7d7d7d'
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item md={6} sm={12}>
                    <Box component='img' src={videoImg} sx={{width: '100%'}}>

                    </Box>
                </Grid>
                <Grid item md={6} sm={12}>
                    <Typography component='h2' variant='h4'>TIGER QIGONG</Typography>
                    <Box>
                        <Typography {...fontSettingsSubtitle} component='span' variant='subtitle1'>Phase: </Typography>
                        <Typography  {...fontSettingsInfo} component='u' variant='body1' color='green'>Grow</Typography>
                    </Box>
                    <Box>
                        <Typography {...fontSettingsSubtitle} component='span' variant='subtitle1'>Element: </Typography>
                        <Typography {...fontSettingsInfo} component='u' variant='body1' color='#ffcc00'>Earth</Typography>
                    </Box>
                    <Box>
                        <Typography {...fontSettingsSubtitle} component='span' variant='subtitle1'>Organ: </Typography>
                        <Typography {...fontSettingsInfo} component='span' variant='body1'>Lungs</Typography>
                    </Box>
                    <Box>
                        <Typography {...fontSettingsSubtitle} component='span' variant='subtitle1'>Season: </Typography>
                        <Typography {...fontSettingsInfo} component='span' variant='body1'>Autumn</Typography>
                    </Box>
                    <Box>
                        <Typography {...fontSettingsSubtitle} component='span' variant='subtitle1'>Description: </Typography>
                        <Typography {...fontSettingsInfo} component='span' variant='body1'>(27 min) winter series...</Typography>
                    </Box>
                    <Box>
                        <Typography {...fontSettingsSubtitle} component='span' variant='subtitle1'>Benefits: </Typography>
                        <Typography {...fontSettingsInfo} component='span' variant='body1'>helps to clear old and stagnant Qi</Typography>
                    </Box>
                </Grid>
                <Grid item md={12}>
                    <Box>
                        <Typography {...fontSettingsSubtitle} component='span' variant='subtitle1'>How to do the flow:</Typography>
                    </Box>
                    <Box>
                        <Typography {...fontSettingsInfo} component='span' variant='body1'>Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book.</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default VideoPageDetail;
