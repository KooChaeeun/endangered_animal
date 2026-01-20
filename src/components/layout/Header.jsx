import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    return (
        <AppBar
            position="absolute"
            elevation={0}
            sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(8px)',
                color: '#191919',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    width: '65%',
                    justifyContent: 'space-between',
                    margin: '0 auto',
                }}
            >
                <Box component={Link} to="/">
                    <img src="/images/logo.png" alt="로고" style={{ width: '80%' }} />
                </Box>
                <Box>
                    <Button
                        component={Link}
                        to="/animals"
                        color="inherit"
                        sx={{
                            fontWeight: location.pathname === '/animals' ? 700 : 400,
                        }}
                    >
                        멸종위기 야생동물
                    </Button>
                    <Button
                        component={Link}
                        to="/report"
                        color="inherit"
                        sx={{
                            fontWeight: location.pathname === '/report' ? 700 : 400,
                        }}
                    >
                        발견 제보
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
