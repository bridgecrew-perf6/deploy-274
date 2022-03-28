import React from 'react';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Footer = () => {
    return (
        <Container sx={{mt: 3, pt: 1, borderTop: '1px solid', borderColor: 'primary.main'}}>
            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                <Button>CUSTOMER SUPPORT /</Button>
                <Button>GALLERY /</Button>
                <Button>TERMS OF USE /</Button>
                <Button>QiBLOG /</Button>
                <Button>ONLINE CERTIFICATION /</Button>
                <Button>FAQ</Button>
            </Box>
            <Typography align='center'>
                ALL WORKS &#169; 2022 YOQI&#174; ALL RIGHTS RESERVED
            </Typography>
        </Container>
    );
};

export default Footer;
