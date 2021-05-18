import { Fragment } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function AppLayout() {
    return (
        <Fragment>
            <Header />
            <Main />
            <Footer />
        </Fragment>
    );
}

export default AppLayout;
