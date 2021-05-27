import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";

function VehicleForm({
    brandStore,
    vehicleStore,
    vehicleFormStore,
    vehicleData: { id = null, brand = "", name = "", image = "", power = 1 },
}) {
    useEffect(() => {
        vehicleFormStore.initialize(brand, name, image, power);
    }, []);

    const brands = brandStore.brands;
    const history = useHistory();
    const buttonDisabled =
        !vehicleFormStore.vehicleBrand || !vehicleFormStore.vehicleName || !vehicleFormStore.vehicleImage || !vehicleFormStore.vehiclePower;

    const handleChange = (e) => {
        if (e.target.name === "vehicleBrand") {
            vehicleFormStore.setVehicleBrand(e.target.value);
        } else if (e.target.name === "vehicleName") {
            vehicleFormStore.setVehicleName(e.target.value);
        } else if (e.target.name === "vehicleImage") {
            vehicleFormStore.setVehicleImage(e.target.value);
        } else if (e.target.name === "vehiclePower") {
            vehicleFormStore.setVehiclePower(e.target.value);
        }
    };

    const submitBrand = (e) => {
        e.preventDefault();
        const { vehicleBrand, vehicleName, vehicleImage, vehiclePower } = vehicleFormStore;
        vehicleStore.submitVehicleData({ vehicleBrand, vehicleName, vehicleImage, vehiclePower, id });
        history.push("/collection");
    };
    return (
        <form className="form">
            <div className="form-field">
                <label htmlFor="vehicleBrand">Vehicle Brand</label>
                <select value={vehicleFormStore.vehicleBrand} onChange={handleChange} name="vehicleBrand" id="vehicleBrand">
                    {brands.map((b) => {
                        return (
                            <option value={b.id} key={b.id}>
                                {b.name}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className="form-field">
                <label htmlFor="vehicleName">Vehicle Model</label>
                <input
                    type="text"
                    value={vehicleFormStore.vehicleName}
                    onInput={handleChange}
                    name="vehicleName"
                    id="vehicleName"
                    placeholder="Vehicle Name"
                    autoComplete="off"
                />
            </div>
            <div className="form-field">
                <label htmlFor="vehicleImage">Vehicle Image URL</label>
                <input
                    type="text"
                    value={vehicleFormStore.vehicleImage}
                    onChange={handleChange}
                    name="vehicleImage"
                    id="vehicleImage"
                    placeholder="Vehicle Image"
                    autoComplete="off"
                />
                <p>
                    Find images here:{" "}
                    <a href="https://www.cars.com/research/" target="_blank" rel="noopener noreferrer">
                        www.cars.com
                    </a>
                </p>
            </div>
            <div className="form-field">
                <label htmlFor="vehiclePower">Power [kW]</label>
                <input
                    type="number"
                    value={vehicleFormStore.vehiclePower}
                    onChange={handleChange}
                    name="vehiclePower"
                    id="vehiclePower"
                    placeholder="Vehicle Power"
                    autoComplete="off"
                    min="1"
                />
            </div>
            <div className="form-controls">
                <button className={buttonDisabled ? "btn" : "btn btn-add"} onClick={submitBrand} disabled={buttonDisabled}>
                    Submit
                </button>
                <Link to="/collection" className="btn btn-danger">
                    Cancel
                </Link>
            </div>
        </form>
    );
}

export default inject("brandStore", "vehicleStore", "vehicleFormStore")(observer(VehicleForm));
