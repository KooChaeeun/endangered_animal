import { Box, Grid, Typography } from '@mui/material';
import summaryData from '../../assets/api/summary';

const SummarySection = () => {
    return (
        <Box
            sx={{
                py: 20,
                backgroundImage: "url('/images/num_bg.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'left top',
                backgroundRepeat: 'no-repeat',
                height: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
            }}
        >
            <Typography align="center" mb={6} sx={{ fontWeight: 'bold', fontSize: '36px' }}>
                한 눈에 보는 국내 멸종위기종 야생동물
            </Typography>

            <Grid
                container
                spacing={11}
                justifyContent="center"
                sx={{ maxWidth: '1440px', mx: 'auto', width: '100%' }}
            >
                {summaryData.map((item) => (
                    <Grid
                        item
                        key={item.label}
                        px={12}
                        sx={{
                            textAlign: 'center',
                            borderTop: '2px solid #0DC271',
                        }}
                    >
                        <Box
                            component="img"
                            my={3}
                            src={item.img}
                            alt={item.label}
                            sx={{ width: '80%' }}
                        />
                        <Typography variant="h5" fontWeight="bold">
                            {item.value}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#BEBEBE' }}>
                            {item.label}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default SummarySection;
