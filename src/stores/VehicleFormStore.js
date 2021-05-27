import { action, makeObservable, observable } from "mobx";

class VehicleFormStore {
    vehicleBrand = "";
    vehicleName = "";
    vehicleImage = "";
    vehiclePower = "";
    constructor(rootStore) {
        makeObservable(this, {
            vehicleBrand: observable,
            vehicleName: observable,
            vehicleImage: observable,
            vehiclePower: observable,
            setVehicleBrand: action,
            setVehicleName: action,
            setVehicleImage: action,
            setVehiclePower: action,
            initialize: action,
        });
        this.rootStore = rootStore;
    }

    setVehicleBrand = (brand) => {
        this.vehicleBrand = brand;
    };

    setVehicleName = (name) => {
        this.vehicleName = name;
    };

    setVehicleImage = (image) => {
        this.vehicleImage = image;
    };

    setVehiclePower = (power) => {
        this.vehiclePower = power;
    };

    initialize = (brand = this.rootStore.brandStore.brands[0].id, name, image, power) => {
        this.setVehicleBrand(brand);
        this.setVehicleName(name);
        this.setVehicleImage(image);
        this.setVehiclePower(power);
    };
}

export default VehicleFormStore;
