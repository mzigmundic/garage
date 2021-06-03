import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";

import BrandItem from "./components/BrandItem";
import usePagination from "../../common/usePagination";
import Pagination from "../../components/Pagination";

function Brands({ brandStore }) {
    const maxPerPage = 4;
    const { next, prev, jumpTo, currentData, currentPage, totalPages } = usePagination(brandStore.brands, maxPerPage);

    return (
        <div className="container">
            <div className="main-heading">
                <h1 className="main-heading__title">Brands</h1>
                <Link to="/brands/add" className="btn btn-add">
                    &#43; Add brand
                </Link>
            </div>
            <ul className="grid">
                {currentData().map((brand) => (
                    <BrandItem brand={brand} key={brand.id} />
                ))}
            </ul>
            {!brandStore.totalBrands && <p className="empty-section-message">No brands</p>}
            {brandStore.totalBrands > maxPerPage && (
                <Pagination next={next} prev={prev} jumpTo={jumpTo} currentPage={currentPage} totalPages={totalPages} />
            )}
        </div>
    );
}

export default inject("brandStore")(observer(Brands));
