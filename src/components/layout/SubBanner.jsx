import { Box, Typography } from '@mui/material';

const SubBanner = ({ title, imageUrl }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                height: '600px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}
        >
            <Box
                component="img"
                src={imageUrl}
                alt={title}
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                }}
            />
            <Typography
                variant="h3"
                sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    letterSpacing: '0.1rem',
                }}
            >
                {title}
            </Typography>
        </Box>
    );
};

export default SubBanner;
