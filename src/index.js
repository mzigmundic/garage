import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";

import "./index.css";
import AppLayout from "./layouts/AppLayout";
import rootStore from "./stores/RootStore";

ReactDOM.render(
    <React.StrictMode>
        <Provider
            vehicleStore={rootStore.vehicleStore}
            brandStore={rootStore.brandStore}
            vehicleFormStore={rootStore.vehicleFormStore}
            brandFormStore={rootStore.brandFormStore}
        >
            <BrowserRouter>
                <AppLayout />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
