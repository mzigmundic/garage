import VehicleForm from "./components/VehicleForm";

function AddVehicle() {
    return (
        <div className="container">
            <div className="main-heading">
                <h1 className="main-heading__title">Add vehicle</h1>
            </div>
            <VehicleForm vehicleData={{}} />
        </div>
    );
}

export default AddVehicle;
