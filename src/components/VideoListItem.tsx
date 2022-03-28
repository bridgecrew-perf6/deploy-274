import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import video from '../img/video.png';
import Box from '@material-ui/core/Box';

export default function VideoListItem() {
    return (
        <Card sx={{maxWidth: 500}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={video}
                    alt="green iguana"
                />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    BEAR FLOW
                </Typography>
                <Box
                    sx={{flexGrow: 1, display: 'flex'}}
                >
                    <Typography sx={{mr: 2, textDecoration: "underline", color: "secondary"}} gutterBottom
                                component="div">
                        Grow
                    </Typography>
                    <Typography sx={{mr: 2, textDecoration: "underline", color: "secondary"}} gutterBottom
                                component="div">
                        Earth
                    </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
        </Card>
    );
}
