import { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Brands from "./pages/Brands";
import AddVehicle from "./pages/AddVehicle";
import AddBrand from "./pages/AddBrand";
import EditVehicle from "./pages/EditVehicle";
import EditBrand from "./pages/EditBrand";

import vehiclesData from "./data/vehicles";
import brandsData from "./data/brands";

function App() {
    const [vehicles, setVehicles] = useState(vehiclesData);
    const [brands, setBrands] = useState(brandsData);

    const highlightToggle = (id) => {
        const newVehicles = vehicles.map((vehicle) => (vehicle.id === id ? { ...vehicle, featured: !vehicle.featured } : vehicle));
        setVehicles(newVehicles);
    };

    const featuredVehicles = vehicles.filter((vehicle) => vehicle.featured);

    const createNewId = (arr) => {
        if (arr.length > 0) {
            const lastElement = arr[arr.length - 1];
            return (parseInt(lastElement.id) + 1).toString();
        }
        return "1";
    };

    const submitBrandData = (data) => {
        if (!data.id) {
            setBrands([...brands, { id: createNewId(brands), name: data.brandName, logo: data.brandLogo }]);
        } else {
            const newBrands = brands.map((brand) =>
                brand.id === data.id ? { ...brand, name: data.brandName, logo: data.brandLogo } : brand
            );
            setBrands(newBrands);
        }
    };

    const submitVehicleData = (data) => {
        if (!data.id) {
            setVehicles([
                ...vehicles,
                {
                    id: createNewId(vehicles),
                    brand: data.vehicleBrand,
                    name: data.vehicleName,
                    image: data.vehicleImage,
                    power: data.vehiclePower,
                    featured: false,
                },
            ]);
        } else {
            const newVehicles = vehicles.map((vehicle) =>
                vehicle.id === data.id
                    ? { ...vehicle, brand: data.vehicleBrand, name: data.vehicleName, image: data.vehicleImage, power: data.vehiclePower }
                    : vehicle
            );
            setVehicles(newVehicles);
        }
    };

    const sellVehicle = (id) => {
        const newVehicles = vehicles.filter((vehicle) => vehicle.id !== id);
        setVehicles(newVehicles);
    };

    const sellBrand = (id) => {
        const newVehicles = vehicles.filter((vehicle) => vehicle.brand !== id);
        const newBrands = brands.filter((brand) => brand.id !== id);
        setVehicles(newVehicles);
        setBrands(newBrands);
    };

    return (
        <BrowserRouter>
            <Header />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Home featuredVehicles={featuredVehicles} />
                    </Route>
                    <Route
                        path="/collection/:modelId/edit"
                        exact
                        render={(props) => {
                            const id = props.match.params.modelId;
                            const vehicleData = vehicles.find((vehicle) => vehicle.id === id);
                            if (vehicleData) {
                                return (
                                    <EditVehicle vehicleData={vehicleData} brands={brands} submitVehicleData={submitVehicleData} id={id} />
                                );
                            }
                        }}
                    />
                    <Route path="/collection/add" exact>
                        <AddVehicle brands={brands} submitVehicleData={submitVehicleData} />
                    </Route>
                    <Route path="/collection" exact>
                        <Collection vehicles={vehicles} brands={brands} highlightToggle={highlightToggle} sellVehicle={sellVehicle} />
                    </Route>
                    <Route
                        path="/brands/:brandId/edit"
                        exact
                        render={(props) => {
                            const id = props.match.params.brandId;
                            const brandData = brands.find((brand) => brand.id === id);
                            if (brandData) {
                                return <EditBrand brandData={brandData} submitBrandData={submitBrandData} id={id} />;
                            }
                        }}
                    />
                    <Route path="/brands/add" exact>
                        <AddBrand submitBrandData={submitBrandData} />
                    </Route>
                    <Route path="/brands" exact>
                        <Brands brands={brands} sellBrand={sellBrand} />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
