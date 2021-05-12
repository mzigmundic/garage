import VehicleForm from "../components/VehicleForm";

function AddVehicle({ vehicleData = {}, brands, submitVehicleData }) {
    return (
        <div className="container">
            <div className="main-heading">
                <h1 className="main-heading__title">Add vehicle</h1>
            </div>
            <VehicleForm vehicleData={vehicleData} brands={brands} submitVehicleData={submitVehicleData} />
        </div>
    );
}

export default AddVehicle;
