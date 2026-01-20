import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const AnimalSearch = ({ value, onChange }) => {
    return (
        <TextField
            size="small"
            placeholder="이름 / 학명 검색"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            sx={{
                width: 260,
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#ccc',
                    },
                    '&:hover fieldset': {
                        borderColor: '#0DC271',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#0DC271',
                    },
                },
                '& .MuiInputBase-input': {
                    caretColor: '#0DC271',
                },
            }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default AnimalSearch;
