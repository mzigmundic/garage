import { useContext } from "react";
import { useParams } from "react-router-dom";

import RootStore from "../stores/RootStore";
import BrandForm from "../components/BrandForm";

function EditBrand() {
    const store = useContext(RootStore);
    const brandId = useParams().brandId;
    const brandData = store.brandStore.getBrand(brandId);
    return (
        <div className="container">
            <div className="main-heading">
                <h1 className="main-heading__title">Edit brand</h1>
            </div>
            <BrandForm brandData={brandData} />
        </div>
    );
}

export default EditBrand;
