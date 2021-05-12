import { Link } from "react-router-dom";

import VehicleItem from "../components/VehicleItem";

function Collection({ vehicles, brands, highlightToggle, sellVehicle }) {
    return (
        <div className="container">
            <div className="main-heading">
                <h1 className="main-heading__title">Collection</h1>
                <Link to="/collection/add" className="btn btn-add" style={brands.length === 0 ? { display: "none" } : {}}>
                    &#43; Add vehicle
                </Link>
            </div>
            <ul className="grid">
                {vehicles.map((vehicle) => (
                    <VehicleItem
                        key={vehicle.id}
                        vehicle={vehicle}
                        brand={brands.find(({ id }) => id === vehicle.brand)}
                        highlightToggle={highlightToggle}
                        sellVehicle={sellVehicle}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Collection;
