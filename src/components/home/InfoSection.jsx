import { Box, Typography, Card, CardContent } from '@mui/material';

const InfoSection = () => {
    return (
        <Box
            sx={{
                maxWidth: '1440px',
                mx: 'auto',
                width: '100%',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 3,
                p: 4,
                my: 10,
                alignItems: 'stretch',
                justifyContent: 'center',
            }}
        >
            <Box sx={{ flex: 2, minWidth: { md: 250 } }}>
                <Typography
                    fontWeight="bold"
                    gutterBottom
                    sx={{ fontSize: '36px', lineHeight: 1.2 }}
                >
                    멸종위기
                    <br />
                    등급이란?
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mt: 2 }}>
                    멸종위기 등급은 야생동물이 절멸될 위험 정도에 따라 환경부가 지정한 보호
                    단계입니다. 국내에서는 I급과 II급으로 구분됩니다.
                </Typography>
            </Box>

            <Card
                variant="outlined"
                sx={{
                    flex: 3,
                    borderRadius: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    p: '10px 30px',
                }}
            >
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" fontWeight="bold">
                        <span style={{ color: '#0DC271' }}>I급</span> 멸종위기 야생동물
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2, color: '#666' }}>
                        개체 수가 급격히 감소
                        <br />
                        가까운 미래에 <b>절멸 위험</b>이 매우 높음
                        <br />
                        가장 <b>엄격한 보호</b>가 필요
                    </Typography>
                    <Box sx={{ mt: 'auto', textAlign: 'right' }}>
                        <img src="/images/danger.png" alt="icon" />
                    </Box>
                </CardContent>
            </Card>

            <Card
                variant="outlined"
                sx={{
                    flex: 3,
                    borderRadius: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    p: '10px 30px',
                }}
            >
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" fontWeight="bold">
                        <span style={{ color: '#0DC271' }}>II급</span> 멸종위기 야생동물
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2, color: '#666' }}>
                        현재는 생존 가능하나 위협 요인 존재
                        <br />
                        지속적인 <b>감소 위험</b>이 있는 종<br />
                        <b>장기적인 관리</b>가 필요
                    </Typography>
                    <Box sx={{ mt: 'auto', textAlign: 'right' }}>
                        <img src="/images/warning.png" alt="icon" />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default InfoSection;
