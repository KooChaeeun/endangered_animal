import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Typography } from '@mui/material';

const ReportForm = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        reporter: '',
        location: '',
        date: '',
        time: '',
        content: '',
    });

    const inputStyle = {
        '& label.Mui-focused': {
            color: '#0DC271',
        },

        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#ccc',
            },

            '&:hover fieldset': {
                borderColor: '#0DC271',
            },

            '&.Mui-focused fieldset': {
                borderColor: '#0DC271',
                borderWidth: 2,
            },
        },
    };

    const handleSubmit = () => {
        if (!formData.reporter || !formData.location) return alert('필수 항목을 입력해주세요.');

        onAdd({
            id: Date.now(),
            ...formData,
            image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=200', // 임시 곰 이미지
        });

        // 폼 초기화
        setFormData({ reporter: '', location: '', date: '', time: '', content: '' });
    };

    return (
        <Box sx={{ borderTop: '2px solid #333', pt: 2 }}>
            <Grid container spacing={2} alignItems="center">
                {/* 행 단위로 구성 (라벨: 3, 입력창: 9) */}
                <TextField
                    required
                    fullWidth
                    size="small"
                    label="발견자"
                    variant="outlined"
                    sx={inputStyle}
                    value={formData.reporter}
                    onChange={(e) => setFormData({ ...formData, reporter: e.target.value })}
                />
                <TextField
                    required
                    fullWidth
                    size="small"
                    label="발견장소"
                    variant="outlined"
                    sx={inputStyle}
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
                <TextField
                    required
                    fullWidth
                    size="small"
                    type="date"
                    label="발견일"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    sx={inputStyle}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
                <TextField
                    required
                    fullWidth
                    size="small"
                    type="time"
                    label="발견시간"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    sx={inputStyle}
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                />
                <TextField
                    required
                    fullWidth
                    multiline
                    rows={4}
                    label="발견 당시 상황"
                    variant="outlined"
                    sx={inputStyle}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                />
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{
                        bgcolor: '#00c371',
                        '&:hover': { bgcolor: '#00a65f' },
                        px: 4,
                        py: 1,
                        borderRadius: 2,
                    }}
                >
                    확인
                </Button>
            </Box>
        </Box>
    );
};

export default ReportForm;
