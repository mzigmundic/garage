import BrandForm from "../components/BrandForm";

function EditBrand({ brandData, submitBrandData }) {
    return (
        <div className="container">
            <div className="main-heading">
                <h1 className="main-heading__title">Edit brand</h1>
            </div>
            <BrandForm brandData={brandData} submitBrandData={submitBrandData} />
        </div>
    );
}

export default EditBrand;
