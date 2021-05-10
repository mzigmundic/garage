import { Link } from "react-router-dom";

function AddBrand() {
    return (
        <div className="container">
            <h1>Add Brand</h1>
            <Link to="/brands">Cancel</Link>
        </div>
    );
}

export default AddBrand;
