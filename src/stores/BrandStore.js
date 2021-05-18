import { computed, makeObservable, observable, action } from "mobx";

import { createNewId } from "../common/util";
import brandsData from "../data/brands";

class BrandStore {
    brands = brandsData;
    constructor(rootStore) {
        makeObservable(this, {
            brands: observable,
            totalBrands: computed,
            getBrand: action,
            sellBrand: action,
            submitBrandData: action,
        });
        this.rootStore = rootStore;
    }

    get totalBrands() {
        return this.brands.length;
    }

    getBrand = (id) => {
        return this.brands.find((brand) => brand.id === id);
    };

    sellBrand = (id) => {
        this.rootStore.vehicleStore.vehicles = this.rootStore.vehicleStore.vehicles.filter((vehicle) => vehicle.brand !== id);
        this.brands = this.brands.filter((brand) => brand.id !== id);
    };

    submitBrandData = (data) => {
        if (!data.id) {
            const newBrand = { id: createNewId(this.brands), name: data.brandName, logo: data.brandLogo };
            this.brands.push(newBrand);
        } else {
            const newBrands = this.brands.map((brand) =>
                brand.id === data.id ? { ...brand, name: data.brandName, logo: data.brandLogo } : brand
            );
            this.brands = newBrands;
        }
    };
}

export default BrandStore;
