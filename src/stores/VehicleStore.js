import { makeObservable, observable, computed, action } from "mobx";
import { createNewId } from "../common/util";
import vehiclesData from "../data/vehicles";

class VehicleStore {
    vehicles = vehiclesData;
    constructor(rootStore) {
        makeObservable(this, {
            vehicles: observable,
            totalVehicles: computed,
            featuredVehicles: computed,
            getVehicle: action,
            getBrandLogo: action,
            highlightToggle: action,
            sellVehicle: action,
            submitVehicleData: action,
        });
        this.rootStore = rootStore;
    }

    get totalVehicles() {
        return this.vehicles.length;
    }

    get featuredVehicles() {
        return this.vehicles.filter((vehicle) => vehicle.featured);
    }

    getVehicle = (id) => {
        return this.vehicles.find((vehicle) => vehicle.id === id);
    };

    getBrandLogo = (id) => {
        return this.rootStore.brandStore.brands.find((brand) => brand.id === id).logo;
    };

    highlightToggle = (id) => {
        const vehicle = this.vehicles.find((vehicle) => vehicle.id === id);
        vehicle.featured = !vehicle.featured;
    };

    sellVehicle = (id) => {
        this.vehicles = this.vehicles.filter((vehicle) => vehicle.id !== id);
    };

    submitVehicleData = (data) => {
        if (!data.id) {
            const newVehicle = {
                id: createNewId(this.vehicles),
                brand: data.vehicleBrand,
                name: data.vehicleName,
                image: data.vehicleImage,
                power: data.vehiclePower,
                featured: false,
            };
            this.vehicles.push(newVehicle);
        } else {
            const newVehicles = this.vehicles.map((vehicle) =>
                vehicle.id === data.id
                    ? { ...vehicle, brand: data.vehicleBrand, name: data.vehicleName, image: data.vehicleImage, power: data.vehiclePower }
                    : vehicle
            );
            this.vehicles = newVehicles;
        }
    };
}

export default VehicleStore;
