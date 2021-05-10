import { Link } from "react-router-dom";

function EditVehicle() {
    return (
        <div className="container">
            <h1>Edit Vehicle</h1>
            <Link to="/collection">Cancel</Link>
        </div>
    );
}

export default EditVehicle;
