import { useParams } from "react-router-dom";
import { inject } from "mobx-react";

import VehicleForm from "../AddVehicle/components/VehicleForm";

function EditVehicle({ vehicleStore }) {
    const vehicleId = useParams().modelId;
    const vehicleData = vehicleStore.getVehicle(vehicleId);
    return (
        <div className="container">
            <div className="main-heading">
                <h1 className="main-heading__title">Edit vehicle</h1>
            </div>
            <VehicleForm vehicleData={vehicleData} />
        </div>
    );
}

export default inject("vehicleStore")(EditVehicle);
