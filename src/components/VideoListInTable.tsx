import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        // backgroundColor: '#7d7d7d',
        // color: theme.palette.common.white,
        fontWeight: 600,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    name: string,
    element: string,
    organ: string,
    season: string,
    phase: string,
) {
    return { name, element, organ, season, phase };
}

const rows = [
    createData('TIGGER QIGONG', 'Earth', 'Text', 'Text', 'Grow'),
    createData('INTRODUCING YOQI FLOW-WEAR', 'Metal', 'Text', 'Text', 'Attune'),
    createData('Ba Duan Jin', 'Wood', 'Text', 'Text', 'Tonify'),
    createData('QIGONG FOR LOVE', 'Water', 'Text', 'Text', 'Purge'),
    createData('YOQI FULL MOON MEDITATION', 'Fire', 'Text', 'Text', 'Circulate'),
];

export default function VideoListInTable() {
    return (
        <TableContainer >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right">Element</StyledTableCell>
                        <StyledTableCell align="right">Organ</StyledTableCell>
                        <StyledTableCell align="right">Season</StyledTableCell>
                        <StyledTableCell align="right">Phase</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.element}</StyledTableCell>
                            <StyledTableCell align="right">{row.organ}</StyledTableCell>
                            <StyledTableCell align="right">{row.season}</StyledTableCell>
                            <StyledTableCell align="right">{row.phase}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
