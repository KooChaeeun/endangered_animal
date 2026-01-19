import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';

const AnimalItem = ({ animal }) => {
    const getGradeColor = (grade) => {
        if (grade === 'I급' || grade === 'Ⅰ급') return 'red';
        if (grade === 'II급' || grade === 'Ⅱ급') return 'gold';
        return 'red'; // 기본값
    };

    const gradeColor = getGradeColor(animal.grade);

    return (
        <Card
            sx={{
                width: '100%',
                borderRadius: 4,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                overflow: 'hidden',
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image={animal.imageUrl}
                alt={animal.name}
                sx={{ borderRadius: '16px 16px 0 0', p: 1 }}
            />
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Box
                        sx={{
                            width: 8,
                            height: 8,
                            bgcolor: gradeColor,
                            borderRadius: '50%',
                            mr: 1,
                        }}
                    />
                    <Typography variant="caption" color="text.secondary" fontWeight="bold">
                        {animal.grade} · {animal.type}
                    </Typography>
                </Box>

                <Typography variant="h6" fontWeight="bold">
                    {animal.name}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    fontStyle="italic"
                    sx={{ mb: 2 }}
                >
                    {animal.scientificName}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {animal.tags.map((tag, index) => (
                        <Chip
                            key={index}
                            label={tag}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: '0.7rem' }}
                        />
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

export default AnimalItem;
