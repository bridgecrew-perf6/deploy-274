import * as React from 'react';
import Container from "@mui/material/Container";
import SearchIcon from '@mui/icons-material/Search';
import {Box, FormControl, Input, InputAdornment} from "@mui/material";
import SearchOptionItem from "./SearchOptionItem";
import Button from "@mui/material/Button";

const OptionsBar = () => {
    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    return (
        <Container sx={{ mt: 2, mb: 3, display: 'flex', flexDirection:{xs: 'column-reverse', md: 'row'}, alignItems:{xs: 'center', sm: 'flex-start'} }}>
            <Box sx={{ display: 'flex', flexDirection: {xs: 'column-reverse', md: 'row'}}}>
                <FormControl sx={{minWidth: '240px', mr: 2}} variant="standard">
                    <Input
                        placeholder='Name of the flow...'
                        sx={{mt: 2,borderBottom: '1px solid', borderColor: 'gray'}}
                        id="input-with-icon-adornment"
                        endAdornment={
                            <InputAdornment position='end'>
                                <SearchIcon/>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Box>
            <Container sx={{display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row'}, alignItems:{xs: 'center', sm: 'flex-start'}}}>
                <SearchOptionItem
                    label={'Element'}
                    options={['Earth', 'Metal', 'Wood', 'Water', 'Fire']}
                />
                <SearchOptionItem
                    label={'Organ'}
                    options={['Earth', 'Metal', 'Wood', 'Water', 'Fire']}
                />
                <SearchOptionItem
                    label={'Season'}
                    options={['Earth', 'Metal', 'Wood', 'Water', 'Fire']}
                />
                <SearchOptionItem
                    label={'Phase'}
                    options={['Earth', 'Metal', 'Wood', 'Water', 'Fire']}
                />
                <Container sx={{mb: 1, textAlign: 'end'}}>
                    <Button color='primary' size='large' variant='contained' sx={{borderRadius: '30px', minWidth: '100px'}}>Log In</Button>
                </Container>
            </Container>
        </Container>
    );
};

export default OptionsBar;
