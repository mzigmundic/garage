import { action, makeObservable, observable } from "mobx";

class BrandFormStore {
    brandName = "";
    brandLogo = "";
    constructor(rootStore) {
        makeObservable(this, {
            brandName: observable,
            brandLogo: observable,
            setBrandName: action,
            setBrandLogo: action,
            initialize: action,
        });
        this.rootStore = rootStore;
    }

    setBrandName = (brand) => {
        this.brandName = brand;
    };

    setBrandLogo = (image) => {
        this.brandLogo = image;
    };

    initialize = (name, logo) => {
        this.setBrandName(name);
        this.setBrandLogo(logo);
    };
}

export default BrandFormStore;
