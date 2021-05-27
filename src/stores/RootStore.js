import VehicleStore from "./VehicleStore";
import BrandStore from "./BrandStore";
import VehicleFormStore from "./VehicleFormStore";
import BrandFormStore from "./BrandFormStore";

class RootStore {
    constructor() {
        this.vehicleStore = new VehicleStore(this);
        this.brandStore = new BrandStore(this);
        this.vehicleFormStore = new VehicleFormStore(this);
        this.brandFormStore = new BrandFormStore(this);
    }
}

export default new RootStore();
