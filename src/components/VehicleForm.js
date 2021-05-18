import { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import RootStore from "../stores/RootStore";

function VehicleForm({ vehicleData: { id = null, brand = "", name = "", image = "", power = 1 } }) {
    const store = useContext(RootStore);
    const brands = store.brandStore.brands;
    const [vehicleBrand, setVehicleBrand] = useState(brand || brands[0].id);
    const [vehicleName, setVehicleName] = useState(name);
    const [vehicleImage, setVehicleImage] = useState(image);
    const [vehiclePower, setVehiclePower] = useState(power);
    const history = useHistory();
    const buttonDisabled = !vehicleBrand || !vehicleName || !vehicleImage || !vehiclePower;

    const handleChange = (e) => {
        if (e.target.name === "vehicleBrand") {
            setVehicleBrand(e.target.value);
        } else if (e.target.name === "vehicleName") {
            setVehicleName(e.target.value);
        } else if (e.target.name === "vehicleImage") {
            setVehicleImage(e.target.value);
        } else if (e.target.name === "vehiclePower") {
            setVehiclePower(e.target.value);
        }
    };

    const submitBrand = (e) => {
        e.preventDefault();
        if (vehicleBrand && vehicleName && vehicleImage && vehiclePower) {
            store.vehicleStore.submitVehicleData({ vehicleBrand, vehicleName, vehicleImage, vehiclePower, id });
            history.push("/collection");
        }
    };
    return (
        <form className="form">
            <div className="form-field">
                <label htmlFor="vehicleBrand">Vehicle Brand</label>
                <select value={vehicleBrand} onChange={handleChange} name="vehicleBrand" id="vehicleBrand">
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
                    value={vehicleName}
                    onChange={handleChange}
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
                    value={vehicleImage}
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
                    value={vehiclePower}
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

export default VehicleForm;
