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

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/collection/:modelId/edit" exact>
                        <EditVehicle />
                    </Route>
                    <Route path="/collection/add" exact>
                        <AddVehicle />
                    </Route>
                    <Route path="/collection" exact>
                        <Collection />
                    </Route>
                    <Route path="/brands/:brandId/edit" exact>
                        <EditBrand />
                    </Route>
                    <Route path="/brands/add" exact>
                        <AddBrand />
                    </Route>
                    <Route path="/brands" exact>
                        <Brands />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
