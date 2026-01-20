import { Select, MenuItem } from '@mui/material';

const AnimalSort = ({ value, onChange }) => {
    return (
        <Select
            size="small"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            sx={{
                minWidth: 120,
                fontWeight: 500,
                fontSize: '0.9rem',
                borderRadius: '8px',
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#0DC271',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#0DC271',
                },
            }}
        >
            <MenuItem value="name">이름순</MenuItem>
            <MenuItem value="grade">급수순</MenuItem>
        </Select>
    );
};

export default AnimalSort;
