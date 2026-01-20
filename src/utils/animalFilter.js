const animalFilter = ({ data, filter, search, sort }) => {
    let result = [...data];

    // 분류군 필터
    if (filter !== '전체') {
        if (filter === '파충류·양서류') {
            result = result.filter((i) => i.type === '파충류' || i.type === '양서류');
        } else {
            result = result.filter((i) => i.type === filter);
        }
    }

    // 검색
    if (search) {
        const s = search.toLowerCase();
        result = result.filter(
            (i) => i.name.includes(s) || i.scientificName?.toLowerCase().includes(s)
        );
    }

    // 정렬
    if (sort === 'name') {
        result.sort((a, b) => a.name.localeCompare(b.name, 'ko'));
    }

    if (sort === 'grade') {
        result.sort((a, b) => a.grade.localeCompare(b.grade, 'ko'));
    }

    return result;
};

export default animalFilter;
