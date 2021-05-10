import { Link } from "react-router-dom";

function BrandItem() {
    return (
        <li>
            <h2>Brand Item</h2>
            <Link to="/brands/3/edit">Edit</Link>
        </li>
    );
}

export default BrandItem;
