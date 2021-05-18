import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import AppLayout from "./layouts/AppLayout";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppLayout />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
