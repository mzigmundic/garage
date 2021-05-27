import { Link } from "react-router-dom";
import { inject } from "mobx-react";

function VehicleItem({ vehicleStore, vehicle, brand }) {
    const highlightToggle = vehicleStore.highlightToggle;
    const sellVehicle = vehicleStore.sellVehicle;
    const highlightButton = vehicle.featured ? (
        <button className="btn btn-highlight active" onClick={() => highlightToggle(vehicle.id)}>
            Unhighlight
        </button>
    ) : (
        <button className="btn btn-highlight" onClick={() => highlightToggle(vehicle.id)}>
            Highlight
        </button>
    );
    return (
        <li key={vehicle.id} className="vehicle-card">
            <div className="vehicle-card__heading">
                <img src={brand.logo} alt={brand.name} className="vehicle-card__logo" />
                <div className="vehicle-card__image">
                    <img src={vehicle.image} alt={vehicle.name} />
                </div>
            </div>
            <div className="vehicle-card__info">
                <h2 className="vehicle-card__name">
                    {brand.name} {vehicle.name}
                </h2>
                <p className="vehicle-card__power">Power: {vehicle.power} kW</p>
            </div>
            <div className="vehicle-card__controls">
                {highlightButton}
                <div className="card__control-flex">
                    <Link to={`/collection/${vehicle.id}/edit`} className="btn btn-edit">
                        Edit
                    </Link>
                    <button className="btn btn-danger" onClick={() => sellVehicle(vehicle.id)}>
                        Sell
                    </button>
                </div>
            </div>
        </li>
    );
}

export default inject("vehicleStore")(VehicleItem);
