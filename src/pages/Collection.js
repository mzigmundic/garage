import { useContext } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import RootStore from "../stores/RootStore";
import usePagination from "../common/usePagination";
import VehicleItem from "../components/VehicleItem";
import Pagination from "../components/Pagination";

function Collection() {
    const store = useContext(RootStore);
    const maxPerPage = 4;
    const { next, prev, jumpTo, currentData, currentPage, totalPages } = usePagination(store.vehicleStore.vehicles, maxPerPage);

    return (
        <div className="container">
            <div className="main-heading">
                <h1 className="main-heading__title">Collection</h1>
                <Link to="/collection/add" className="btn btn-add" style={store.brandStore.totalBrands === 0 ? { display: "none" } : {}}>
                    &#43; Add vehicle
                </Link>
            </div>
            <ul className="grid">
                {currentData().map((vehicle) => (
                    <VehicleItem
                        key={vehicle.id}
                        vehicle={vehicle}
                        brand={store.brandStore.brands.find(({ id }) => id === vehicle.brand)}
                    />
                ))}
            </ul>
            {store.vehicleStore.totalVehicles > maxPerPage && (
                <Pagination next={next} prev={prev} jumpTo={jumpTo} currentPage={currentPage} totalPages={totalPages} />
            )}
        </div>
    );
}

export default observer(Collection);
