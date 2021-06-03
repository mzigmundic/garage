import { useParams } from "react-router-dom";
import { inject } from "mobx-react";

import BrandForm from "../AddBrand/components/BrandForm";

function EditBrand({ brandStore }) {
    const brandId = useParams().brandId;
    const brandData = brandStore.getBrand(brandId);
    return (
        <div className="container">
            <div className="main-heading">
                <h1 className="main-heading__title">Edit brand</h1>
            </div>
            <BrandForm brandData={brandData} />
        </div>
    );
}

export default inject("brandStore")(EditBrand);
