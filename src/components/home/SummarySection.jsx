import { Box, Grid, Typography } from '@mui/material';

const data = [
    { label: '총 멸종위기 종 수', value: '282종', img: '/images/ico_lion.png' },
    { label: 'Ⅰ급 멸종위기종', value: '68종', img: '/images/ico_bug.png' },
    { label: 'ⅠⅠ급 멸종위기종', value: '214종', img: '/images/ico_cat.png' },
    { label: '분류군 수', value: '6종', img: '/images/ico_fish.png' },
];

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
                {data.map((item) => (
                    <Grid
                        item
                        key={item.label}
                        px={12}
                        sx={{ textAlign: 'center', borderTop: '2px solid #0DC271' }}
                    >
                        <Box component="img" my={3} src={item.img} alt={item.label} />
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
