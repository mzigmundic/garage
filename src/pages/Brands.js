import { useContext } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import RootStore from "../stores/RootStore";
import usePagination from "../common/usePagination";
import BrandItem from "../components/BrandItem";
import Pagination from "../components/Pagination";

function Brands() {
    const store = useContext(RootStore);
    const maxPerPage = 4;
    const { next, prev, jumpTo, currentData, currentPage, totalPages } = usePagination(store.brandStore.brands, maxPerPage);

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
            {store.brandStore.totalBrands > maxPerPage && (
                <Pagination next={next} prev={prev} jumpTo={jumpTo} currentPage={currentPage} totalPages={totalPages} />
            )}
        </div>
    );
}

export default observer(Brands);
