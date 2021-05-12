import BrandForm from "../components/BrandForm";

function AddBrand({ brandData = {}, submitBrandData }) {
    return (
        <div className="container">
            <div className="main-heading">
                <h1 className="main-heading__title">Add brand</h1>
            </div>
            <BrandForm brandData={brandData} submitBrandData={submitBrandData} />
        </div>
    );
}

export default AddBrand;
