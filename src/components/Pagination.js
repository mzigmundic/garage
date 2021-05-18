function Pagination({ next, prev, jumpTo, currentPage, totalPages }) {
    let paginationItem = [];
    for (let i = 1; i <= totalPages; i++) {
        paginationItem.push(i);
    }
    return (
        <ul className="pagination">
            <li className="pagination__item" disabled={currentPage === 1} onClick={prev}>
                &#171;
            </li>
            {paginationItem.map((i) => (
                <li key={i} className={i === currentPage ? "pagination__item current" : "pagination__item"} onClick={() => jumpTo(i)}>
                    {i}
                </li>
            ))}
            <li className="pagination__item" disabled={currentPage === totalPages} onClick={next}>
                &#187;
            </li>
        </ul>
    );
}

export default Pagination;
