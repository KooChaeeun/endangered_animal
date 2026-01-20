const pagination = (data, page, itemsPerPage) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return {
        pagedData: data.slice(startIndex, endIndex),
        pageCount: Math.ceil(data.length / itemsPerPage),
    };
};

export default pagination;
