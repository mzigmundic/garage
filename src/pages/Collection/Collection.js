import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";

import usePagination from "../../common/usePagination";
import VehicleItem from "./VehicleItem";
import Pagination from "../../components/Pagination";

function Collection({ vehicleStore, brandStore }) {
    const maxPerPage = 4;
    const { next, prev, jumpTo, currentData, currentPage, totalPages } = usePagination(vehicleStore.vehicles, maxPerPage);

    return (
        <div className="container">
            <div className="main-heading">
                <h1 className="main-heading__title">Collection</h1>
                <Link to="/collection/add" className="btn btn-add" style={brandStore.totalBrands === 0 ? { display: "none" } : {}}>
                    &#43; Add vehicle
                </Link>
            </div>
            <ul className="grid">
                {currentData().map((vehicle) => (
                    <VehicleItem key={vehicle.id} vehicle={vehicle} brand={brandStore.brands.find(({ id }) => id === vehicle.brand)} />
                ))}
            </ul>
            {vehicleStore.totalVehicles > maxPerPage && (
                <Pagination next={next} prev={prev} jumpTo={jumpTo} currentPage={currentPage} totalPages={totalPages} />
            )}
        </div>
    );
}

export default inject("vehicleStore", "brandStore")(observer(Collection));
