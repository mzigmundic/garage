import { Link } from "react-router-dom";

import BrandItem from "../components/BrandItem";

function Add() {
    return (
        <div className="container">
            <h1>Brands</h1>
            <Link to="/brands/add">Add new</Link>
            <ul>
                <BrandItem />
                <BrandItem />
            </ul>
        </div>
    );
}

export default Add;
