import { useContext } from "react";
import { useParams } from "react-router-dom";
import VehicleForm from "../components/VehicleForm";
import RootStore from "../stores/RootStore";

function EditVehicle() {
    const store = useContext(RootStore);
    const vehicleId = useParams().modelId;
    const vehicleData = store.vehicleStore.getVehicle(vehicleId);
    return (
        <div className="container">
            <div className="main-heading">
                <h1 className="main-heading__title">Edit vehicle</h1>
            </div>
            <VehicleForm vehicleData={vehicleData} />
        </div>
    );
}

export default EditVehicle;
