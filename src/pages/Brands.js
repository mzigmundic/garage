import { Link } from "react-router-dom";

import BrandItem from "../components/BrandItem";

function Brands({ brands, sellBrand }) {
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
                    <BrandItem brand={brand} key={brand.id} sellBrand={sellBrand} />
                ))}
            </ul>
        </div>
    );
}

export default Brands;
