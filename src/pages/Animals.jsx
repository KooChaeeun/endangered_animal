import { useState } from 'react';
import { Container, Typography, Stack, Box, Pagination } from '@mui/material';

import SubBanner from '../components/layout/SubBanner';
import FilterTabs from '../components/animals/FilterTabs';
import AnimalList from '../components/animals/AnimalList';
import AnimalSearch from '../components/animals/AnimalSearch';
import AnimalSort from '../components/animals/AnimalSort';

import animalData from '../assets/api/animalData';
import animalFilter from '../utils/animalFilter';
import pagination from '../utils/pagination';

const ITEMS_PER_PAGE = 8;

const Animals = () => {
    const [filter, setFilter] = useState('전체');
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('name');
    const [page, setPage] = useState(1);

    const filteredData = animalFilter({
        data: animalData,
        filter,
        search,
        sort,
    });

    const { pagedData, pageCount } = pagination(filteredData, page, ITEMS_PER_PAGE);

    return (
        <>
            <SubBanner title="멸종위기종 야생동물" imageUrl="/images/sub1_bg.jpg" />

            <Container sx={{ py: 20, maxWidth: '1440px' }}>
                <Typography variant="h4" fontWeight="bold" mb={4}>
                    분류군별 지정현황
                </Typography>

                <Stack direction="row" justifyContent="space-between" mb={4}>
                    <FilterTabs
                        value={filter}
                        onChange={(v) => {
                            setFilter(v);
                            setPage(1);
                        }}
                    />

                    <Stack direction="row" spacing={2}>
                        <AnimalSearch
                            value={search}
                            onChange={(v) => {
                                setSearch(v);
                                setPage(1);
                            }}
                        />
                        <AnimalSort value={sort} onChange={setSort} />
                    </Stack>
                </Stack>

                {pagedData.length > 0 ? (
                    <AnimalList animals={pagedData} />
                ) : (
                    <Box py={10} textAlign="center">
                        <Typography variant="h6" color="text.secondary">
                            검색 결과가 없습니다 ˘︹˘
                        </Typography>
                    </Box>
                )}

                {pageCount > 1 && (
                    <Box mt={5} display="flex" justifyContent="center">
                        <Pagination page={page} count={pageCount} onChange={(_, v) => setPage(v)} />
                    </Box>
                )}
            </Container>
        </>
    );
};

export default Animals;
