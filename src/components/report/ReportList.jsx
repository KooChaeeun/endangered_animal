import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    Button,
    Box,
} from '@mui/material';

const ReportList = ({ items, onDelete }) => {
    const [selected, setSelected] = useState([]);

    // 체크박스 핸들러
    const handleSelect = (id) => {
        setSelected((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
    };

    const handleDeleteClick = () => {
        onDelete(selected);
        setSelected([]); // 삭제 후 선택 해제
    };

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
                <Button
                    variant="contained"
                    color="inherit"
                    size="small"
                    onClick={handleDeleteClick}
                    sx={{ bgcolor: '#2b2d42', color: 'white' }}
                >
                    삭제
                </Button>
            </Box>

            <TableContainer sx={{ borderTop: '1px solid #eee' }}>
                <Table>
                    <TableHead sx={{ bgcolor: '#fbfbfb' }}>
                        <TableRow>
                            <TableCell padding="checkbox"></TableCell>
                            <TableCell align="center">첨부파일</TableCell>
                            <TableCell align="center">발견장소</TableCell>
                            <TableCell align="center">발견일시</TableCell>
                            <TableCell align="center">발견당시상황</TableCell>
                            <TableCell align="center">발견자</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} align="center" sx={{ py: 5 }}>
                                    제보 내역이 없습니다.
                                </TableCell>
                            </TableRow>
                        ) : (
                            items.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selected.includes(row.id)}
                                            onChange={() => handleSelect(row.id)}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <img
                                            src={row.image}
                                            alt="발견이미지"
                                            style={{ width: 100, borderRadius: 8 }}
                                        />
                                    </TableCell>
                                    <TableCell align="center">{row.location}</TableCell>
                                    <TableCell align="center">
                                        {row.date}
                                        <br />
                                        {row.time}
                                    </TableCell>
                                    <TableCell sx={{ maxWidth: 300 }}>{row.content}</TableCell>
                                    <TableCell align="center">{row.reporter}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ReportList;
