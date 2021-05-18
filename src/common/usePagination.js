import { useState } from "react";

function usePagination(data, itemsPerPage) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    if (currentPage > totalPages) {
        setCurrentPage((c) => c - 1);
    }
    function currentData() {
        const indexOfPageFirstItem = (currentPage - 1) * itemsPerPage;
        const indexOfPageLastItem = indexOfPageFirstItem + itemsPerPage;
        return data.slice(indexOfPageFirstItem, indexOfPageLastItem);
    }

    function next() {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
        window.scrollTo(0, 0);
    }

    function prev() {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
        window.scrollTo(0, 0);
    }

    function jumpTo(page) {
        const pageNumber = Math.max(1, page);
        setCurrentPage((currentPage) => Math.min(pageNumber, totalPages));
        window.scrollTo(0, 0);
    }

    return { next, prev, jumpTo, currentData, currentPage, totalPages };
}

export default usePagination;
