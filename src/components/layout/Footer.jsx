import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#0b1c2d', py: 4, textAlign: 'center' }}>
            <img src="/images/logo.png" alt="로고" />
            <Typography color="gray" variant="body2" sx={{ marginTop: '10px' }}>
                COPYRIGHT © 2026 endangered animal by koo.
            </Typography>
        </Box>
    );
};

export default Footer;
