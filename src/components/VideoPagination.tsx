import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Container from '@mui/material/Container';

export default function VideoPagination() {
    return (
        <Container sx={{display: 'flex', justifyContent: 'center', pt: 2, pb: 2}}>
            <Pagination count={10} size='large'/>
        </Container>
    );
}
