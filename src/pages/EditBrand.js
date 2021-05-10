import { Link } from "react-router-dom";

function EditBrand() {
    return (
        <div className="container">
            <h1>Edit Brand</h1>
            <Link to="/brands">Cancel</Link>
        </div>
    );
}

export default EditBrand;
