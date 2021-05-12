import VehicleForm from "../components/VehicleForm";

function EditVehicle({ vehicleData, brands, submitVehicleData, id }) {
    return (
        <div className="container">
            <div className="main-heading">
                <h1 className="main-heading__title">Edit vehicle</h1>
            </div>
            <VehicleForm vehicleData={vehicleData} brands={brands} submitVehicleData={submitVehicleData} id={id} />
        </div>
    );
}

export default EditVehicle;
