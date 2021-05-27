import VehicleStore from "./VehicleStore";
import BrandStore from "./BrandStore";

class RootStore {
    constructor() {
        this.vehicleStore = new VehicleStore(this);
        this.brandStore = new BrandStore(this);
    }
}

export default new RootStore();
