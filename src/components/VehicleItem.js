import { Link } from "react-router-dom";

function VehicleItem() {
    return (
        <li>
            <h2>Vehicle Item</h2>
            <Link to="/collection/22/edit">Edit</Link>
        </li>
    );
}

export default VehicleItem;
