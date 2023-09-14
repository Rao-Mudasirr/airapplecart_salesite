import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import * as React from 'react';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
export const PlanTable = () => {
    return (
        <>
            <TableContainer sx={{ mb: '120px', mt: '40px' }}>
                <Table sx={{ minWidth: 650, '.MuiTableCell-root': { fontFamily: `"Plus Jakarta Sans", sans-serif`, p: '20px 32px', border: '1px solid #E6E9F5 !important' } }} aria-label="simple table">
                    <TableHead >
                        <TableRow sx={{ '.MuiTableCell-head': { bgcolor: '#F9FAFB', fontSize: '18px', fontWeight: '600', } }}>
                            <TableCell sx={{ borderRadius: '8px 0px 0px 0px' }}>Product Name</TableCell>
                            <TableCell >Free Trial</TableCell>
                            <TableCell >Growth</TableCell>
                            <TableCell sx={{ borderRadius: '0px 8px 0px 0px' }}>Pro</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell rowSpan={2} className='flex flex-center' >
                                <Box sx={{ fontSize: '18px', fontWeight: 600, color: '#1F2937', my: '12px' }}>
                                    Air Sales
                                </Box>
                                <Box sx={{ color: '#6B7280', lineHeight: '24px', width: '240px' }}>
                                    Air Sales is your ultimate partner for sales success. We're dedicated to helping you elevate your sales strategies and achieve remarkable growth
                                </Box>
                            </TableCell>
                            <TableCell className='flex flex-center'>
                                <Box flexDirection="column" className="flex flex-center">
                                    <Box sx={{ fontSize: '32px', fontWeight: 600, color: '#374151', mb: '35px' }}>
                                        £20<span style={{ fontSize: '14px', color: '#6B7280' }}>/Month</span>
                                    </Box>
                                    <Button sx={{ textTransform: 'capitalize', fontFamily: `"Plus Jakarta Sans", sans-serif`, fontSize: '14px !important', fontWeight: 500, color: '#fff', bgcolor: "#38CAB5", width: '108px', height: '38px', borderRadius: '4px', '&:hover': { bgcolor: "#38CAB5" } }}>
                                        Select Plan
                                    </Button>
                                </Box>
                            </TableCell>
                            <TableCell className='flex flex-center'>
                                <Box flexDirection="column" className="flex flex-center">
                                    <Box sx={{ fontSize: '32px', fontWeight: 600, color: '#374151', mb: '35px' }}>
                                    $300<span style={{ fontSize: '14px', color: '#6B7280' }}>/Month</span>
                                    </Box>
                                    <Button sx={{ textTransform: 'capitalize', fontFamily: `"Plus Jakarta Sans", sans-serif`, fontSize: '14px !important', fontWeight: 500, color: '#fff', bgcolor: "#38CAB5", width: '108px', height: '38px', borderRadius: '4px', '&:hover': { bgcolor: "#38CAB5" } }}>
                                        Select Plan
                                    </Button>
                                </Box>
                            </TableCell>
                            <TableCell className='flex flex-center'>
                                <Box flexDirection="column" className="flex flex-center">
                                    <Box sx={{ fontSize: '32px', fontWeight: 600, color: '#374151', mb: '35px' }}>
                                    $450<span style={{ fontSize: '14px', color: '#6B7280' }}>/Month</span>
                                    </Box>
                                    <Button sx={{ textTransform: 'capitalize', fontFamily: `"Plus Jakarta Sans", sans-serif`, fontSize: '14px !important', fontWeight: 500, color: '#fff', bgcolor: "#38CAB5", width: '108px', height: '38px', borderRadius: '4px', '&:hover': { bgcolor: "#38CAB5" } }}>
                                        Select Plan
                                    </Button>
                                </Box>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell >
                                <Box sx={{ color: '#6B7280',fontSize:'14px',textAlign:'center', }}>
                                Essential tools to put your customers first and deliver authethic services
                                </Box>
                            </TableCell>
                            <TableCell >
                                <Box sx={{ color: '#6B7280',fontSize:'14px',textAlign:'center', }}>
                                Comprehensive help desk software to scale self-service and automation
                                </Box>
                            </TableCell>
                            <TableCell >
                                <Box sx={{ color: '#6B7280',fontSize:'14px',textAlign:'center', }}>
                                Our most powerful help desk software for advanced control and flexibility
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
