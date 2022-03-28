import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';

type AccordionMenuPropsType = {
    menuItem: string,
    subMenuItem: Array<string>,
    handleCloseNavMenu: ()=>void
}

export default function AccordionMenu(props: AccordionMenuPropsType) {
    return (
        <li>
            <Accordion sx={{width: '100%'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Button
                        sx={{color: '#7d7d7d', display: 'block', width: '100%'}}
                    >
                        {props.menuItem}
                    </Button>
                </AccordionSummary>
                <AccordionDetails>
                    <ButtonGroup orientation="vertical"  sx={{display: 'flex'}}>
                        <Button onClick={props.handleCloseNavMenu} sx={{color: '#7d7d7d'}}>One</Button>
                        <Button onClick={props.handleCloseNavMenu} sx={{color: '#7d7d7d'}}>Two</Button>
                        <Button onClick={props.handleCloseNavMenu} sx={{color: '#7d7d7d'}}>Three</Button>
                    </ButtonGroup>
                </AccordionDetails>
            </Accordion>
        </li>
    );
}
