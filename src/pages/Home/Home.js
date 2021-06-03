import { inject, observer } from "mobx-react";

function Home({ vehicleStore }) {
    return (
        <div className="container">
            <div className="main-heading">
                <h1 className="main-heading__title">Featured</h1>
            </div>
            <ul className="grid grid-showcase">
                {vehicleStore.featuredVehicles.map((vehicle) => {
                    return (
                        <li key={vehicle.id}>
                            <img src={vehicle.image} alt={vehicle.name} />
                        </li>
                    );
                })}
            </ul>
            {!vehicleStore.featuredVehicles.length && <p className="empty-section-message">No featured vehicles</p>}
        </div>
    );
}

export default inject("vehicleStore")(observer(Home));
