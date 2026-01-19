import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <Box
            sx={{
                height: '1200px',
                backgroundImage: "url('/images/mv01.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: '0% 30%',
                display: 'flex',
                alignItems: 'center',
                px: 50,
                color: 'white',
            }}
        >
            <Box sx={{ mt: '-300px', minWidth: '400px' }}>
                <Typography variant="h3" fontWeight={700}>
                    데이터로 기록하는
                    <br />
                    멸종위기 야생동물
                </Typography>
                <Typography sx={{ my: 2 }}>
                    국내 멸종위기 야생동물의 현황을 검색하고 공유합니다.
                </Typography>
                <Button
                    component={Link}
                    to="/animals"
                    variant="contained"
                    sx={{
                        backgroundColor: '#0DC271',
                        '&:hover': {
                            backgroundColor: '#0ba861',
                        },
                    }}
                >
                    멸종위기종 탐색하기
                </Button>
            </Box>
        </Box>
    );
};

export default HeroSection;
