import { Card, CardMedia, CardContent, Typography, Chip } from '@mui/material';

const AnimalCard = () => {
    return (
        <Card>
            <CardMedia component="img" height="180" image="/images/sample.jpg" />
            <CardContent>
                <Chip label="멸종위기" size="small" color="error" />
                <Typography variant="h6">수달</Typography>
                <Typography variant="body2" color="text.secondary">
                    Lutra lutra
                </Typography>
            </CardContent>
        </Card>
    );
};

export default AnimalCard;
