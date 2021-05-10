import { Link } from "react-router-dom";

import VehicleItem from "../components/VehicleItem";

function Collection() {
    return (
        <div className="container">
            <h1>Collection</h1>
            <Link to="/collection/add">Add new</Link>
            <ul>
                <VehicleItem />
                <VehicleItem />
            </ul>
        </div>
    );
}

export default Collection;
