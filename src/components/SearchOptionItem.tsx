import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select'

type SearchOptionItemPropsItem = {
    label: string,
    options: Array<string>
}

const SearchOptionItem = (props: SearchOptionItemPropsItem) => {
    const [currentItem, setCurrentItem] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCurrentItem(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: {xs: 150, sm: 120}, pr: 3,mt: 1}}>
            <FormControl size='small' variant='outlined' fullWidth>
                <InputLabel margin='dense' id="demo-simple-select-label">{props.label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currentItem}
                    label={props.label}
                    onChange={handleChange}
                >
                    {props.options.map((option) => {
                        return (
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    );
};

export default SearchOptionItem;
