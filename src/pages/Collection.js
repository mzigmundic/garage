import { Link } from "react-router-dom";
import { useContext } from "react";
import RootStore from "../stores/RootStore";
import { observer } from "mobx-react-lite";

import VehicleItem from "../components/VehicleItem";

function Collection() {
    const store = useContext(RootStore);
    const vehicles = store.vehicleStore.vehicles;

    return (
        <div className="container">
            <div className="main-heading">
                <h1 className="main-heading__title">Collection</h1>
                <Link to="/collection/add" className="btn btn-add" style={store.brandStore.totalBrands === 0 ? { display: "none" } : {}}>
                    &#43; Add vehicle
                </Link>
            </div>
            <ul className="grid">
                {vehicles.map((vehicle) => (
                    <VehicleItem
                        key={vehicle.id}
                        vehicle={vehicle}
                        brand={store.brandStore.brands.find(({ id }) => id === vehicle.brand)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default observer(Collection);
