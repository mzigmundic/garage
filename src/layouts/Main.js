import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home/Home";
import Collection from "../pages/Collection/Collection";
import Brands from "../pages/Brands/Brands";
import AddVehicle from "../pages/AddVehicle/AddVehicle";
import AddBrand from "../pages/AddBrand/AddBrand";
import EditVehicle from "../pages/EditVehicle/EditVehicle";
import EditBrand from "../pages/EditBrand/EditBrand";

function Main() {
    return (
        <main>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/collection/:modelId/edit" exact component={EditVehicle} />
                <Route path="/collection/add" exact component={AddVehicle} />
                <Route path="/collection" exact component={Collection} />
                <Route path="/brands/:brandId/edit" exact component={EditBrand} />
                <Route path="/brands/add" exact component={AddBrand} />
                <Route path="/brands" exact component={Brands} />
                <Redirect to="/" />
            </Switch>
        </main>
    );
}

export default Main;
