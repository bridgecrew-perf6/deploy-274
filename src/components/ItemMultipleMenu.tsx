import React from 'react';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

type MainMenuItemProps = {
    menuItem: string,
    subMenuItem: Array<string>,
    handleCloseNavMenu: () => void
}

const ItemMultipleMenu = (props: MainMenuItemProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    if (props.subMenuItem.length !== 0) {
        return (
            <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{my: 2, color: '#7d7d7d', display: 'block'}}
                >
                    {props.menuItem + ' /'}
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {props.subMenuItem.map((item) => {
                        return (<MenuItem key={item} onClick={handleClose}>{item}</MenuItem>)
                    })}
                </Menu>
            </div>
        );
    } else {
        return (
            <div>
                <Button
                    key={props.menuItem}
                    onClick={props.handleCloseNavMenu}
                    sx={{my: 2, color: '#7d7d7d', display: 'block'}}
                >
                    {props.menuItem + ' /'}
                </Button>
            </div>
        )
    }
};

export default ItemMultipleMenu;
