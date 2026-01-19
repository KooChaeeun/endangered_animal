import { Box } from '@mui/material';
import AnimalItem from './AnimalItem';

const AnimalList = ({ animals }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
                justifyContent: 'center',
                p: 2,
            }}
        >
            {animals.map((animal) => (
                <Box
                    key={animal.id}
                    sx={{
                        width: { xs: '100%', sm: 'calc(50% - 24px)', md: 'calc(25% - 24px)' },
                        display: 'flex',
                    }}
                >
                    <AnimalItem animal={animal} />
                </Box>
            ))}
        </Box>
    );
};

export default AnimalList;
