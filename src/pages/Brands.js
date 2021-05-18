import { Link } from "react-router-dom";
import { useContext } from "react";
import RootStore from "../stores/RootStore";
import { observer } from "mobx-react-lite";

import BrandItem from "../components/BrandItem";

function Brands() {
    const store = useContext(RootStore);
    const brands = store.brandStore.brands;
    return (
        <div className="container">
            <div className="main-heading">
                <h1 className="main-heading__title">Brands</h1>
                <Link to="/brands/add" className="btn btn-add">
                    &#43; Add brand
                </Link>
            </div>
            <ul className="grid">
                {brands.map((brand) => (
                    <BrandItem brand={brand} key={brand.id} />
                ))}
            </ul>
        </div>
    );
}

export default observer(Brands);
