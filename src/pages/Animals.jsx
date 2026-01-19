import { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    TextField,
    InputAdornment,
    Select,
    MenuItem,
    Pagination,
    Stack,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import SubBanner from '../components/layout/SubBanner';
import AnimalList from '../components/animals/AnimalList';
import FilterTabs from '../components/animals/FilterTabs';
import animalData from '../assets/api/animalData';

const ITEMS_PER_PAGE = 8;

const Animals = () => {
    const sub = {
        title: '멸종위기종 야생동물',
        img: '/images/sub1_bg.jpg',
    };

    const [filter, setFilter] = useState('전체');
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('name');
    const [page, setPage] = useState(1);

    // /필터
    const getFilteredData = () => {
        let data = [...animalData];

        // 분류군 필터링
        if (filter !== '전체') {
            if (filter === '파충류·양서류') {
                data = data.filter((i) => i.type === '파충류' || i.type === '양서류');
            } else {
                data = data.filter((i) => i.type === filter);
            }
        }

        // 검색 필터링
        if (search) {
            const s = search.toLowerCase();
            data = data.filter(
                (i) => i.name.includes(s) || i.scientificName?.toLowerCase().includes(s)
            );
        }

        // 정렬
        if (sort === 'name') data.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
        if (sort === 'grade') data.sort((a, b) => a.grade.localeCompare(b.grade, 'ko'));

        return data;
    };

    const filteredData = getFilteredData();

    // 페이지네이션
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const pagedData = filteredData.slice(startIndex, endIndex);

    return (
        <>
            <SubBanner title={sub.title} imageUrl={sub.img} />

            <Container sx={{ py: 20, maxWidth: '1440px' }}>
                <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
                    분류군별 지정현황
                </Typography>

                {/* 필터 / 검색 / 정렬 */}
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mb: 4 }}
                >
                    <FilterTabs
                        value={filter}
                        onChange={(v) => {
                            setFilter(v);
                            setPage(1);
                        }}
                    />

                    <Stack direction="row" spacing={2}>
                        {/* 검색 */}
                        <TextField
                            size="small"
                            placeholder="이름/학명 검색"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setPage(1);
                            }}
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

                        {/* 정렬 */}
                        <Select
                            size="small"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
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
                                '& .MuiSelect-icon': {
                                    color:
                                        location.pathname === '/animals' || sort !== ''
                                            ? '#0DC271'
                                            : 'inherit',
                                },
                            }}
                        >
                            <MenuItem value="name">이름순</MenuItem>
                            <MenuItem value="grade">급수순</MenuItem>
                        </Select>
                    </Stack>
                </Stack>

                {/* 카드 리스트 */}
                {pagedData.length > 0 ? (
                    <AnimalList animals={pagedData} />
                ) : (
                    <Box
                        sx={{
                            py: 10,
                            color: 'text.secondary',
                            height: '200px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h6">검색 결과가 없습니다 (՞っ╥ ᯅ ╥՞)っ</Typography>
                    </Box>
                )}

                {/* 페이지네이션 */}
                {filteredData.length > ITEMS_PER_PAGE && (
                    <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
                        <Pagination
                            page={page}
                            count={Math.ceil(filteredData.length / ITEMS_PER_PAGE)}
                            onChange={(_, value) => setPage(value)}
                        />
                    </Box>
                )}
            </Container>
        </>
    );
};

export default Animals;
