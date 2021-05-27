import BrandForm from "./BrandForm";

function AddBrand() {
    return (
        <div className="container">
            <div className="main-heading">
                <h1 className="main-heading__title">Add brand</h1>
            </div>
            <BrandForm brandData={{}} />
        </div>
    );
}

export default AddBrand;
