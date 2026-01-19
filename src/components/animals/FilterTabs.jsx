import { Stack, Button } from '@mui/material';

const filters = ['전체', '포유류', '조류', '파충류·양서류', '어류', '곤충류', '무척추동물'];

const FilterTabs = ({ value, onChange }) => {
    return (
        <Stack direction="row" spacing={1}>
            {filters.map((filter) => {
                const selected = value === filter;

                return (
                    <Button
                        key={filter}
                        size="small"
                        onClick={() => onChange(filter)}
                        variant={selected ? 'contained' : 'outlined'}
                        sx={{
                            borderRadius: '20px',
                            px: 2,
                            fontWeight: selected ? 600 : 400,

                            backgroundColor: selected ? '#0DC271' : 'transparent',
                            borderColor: selected ? '#0DC271' : '#e0e0e0',
                            color: selected ? '#fff' : '#555',

                            '&:hover': {
                                backgroundColor: selected ? '#0ab165' : '#f5f5f5',
                                borderColor: '#0DC271',
                            },
                        }}
                    >
                        {filter}
                    </Button>
                );
            })}
        </Stack>
    );
};

export default FilterTabs;
