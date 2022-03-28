import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Title = () => {
    return (
        <Container sx={{backgroundColor:'whitesmoke', pt: 4, pb: 4, mt: 2, mb: 2}}>
            <Typography align='center'  variant='h4'>
                YOQI-RESOURSE
            </Typography>
        </Container>
    );
};

export default Title;
