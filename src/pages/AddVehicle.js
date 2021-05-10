import { Link } from "react-router-dom";

function AddVehicle() {
    return (
        <div className="container">
            <h1>Add Vehicle</h1>
            <Link to="/collection">Cancel</Link>
        </div>
    );
}

export default AddVehicle;
