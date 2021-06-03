import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { inject, observer } from "mobx-react";

function BrandForm({ brandStore, brandFormStore, brandData: { id = null, name = "", logo = "" } }) {
    useEffect(() => {
        brandFormStore.initialize(name, logo);
    }, []);

    const history = useHistory();
    const buttonDisabled = !brandFormStore.brandName || !brandFormStore.brandLogo;

    const handleChange = (e) => {
        if (e.target.name === "brandName") {
            brandFormStore.setBrandName(e.target.value);
        } else if (e.target.name === "brandLogo") {
            brandFormStore.setBrandLogo(e.target.value);
        }
    };

    const submitBrand = (e) => {
        e.preventDefault();
        const { brandName, brandLogo } = brandFormStore;
        brandStore.submitBrandData({ brandName, brandLogo, id });
        history.push("/brands");
    };

    return (
        <form className="form">
            <div className="form-field">
                <label htmlFor="brandName">Brand Name</label>
                <input
                    type="text"
                    value={brandFormStore.brandName}
                    onChange={handleChange}
                    name="brandName"
                    id="brandName"
                    placeholder="Brand Name"
                    autoComplete="off"
                />
            </div>
            <div className="form-field">
                <label htmlFor="brandLogo">Brand Logo URL</label>
                <input
                    type="text"
                    value={brandFormStore.brandLogo}
                    onChange={handleChange}
                    name="brandLogo"
                    id="brandLogo"
                    placeholder="Brand Logo"
                    autoComplete="off"
                />
                <p>
                    Find logos here:{" "}
                    <a href="https://www.carlogos.org/car-brands/list_1_2.html" target="_blank" rel="noopener noreferrer">
                        www.carlogos.org
                    </a>
                </p>
            </div>
            <div className="form-controls">
                <button className={buttonDisabled ? "btn" : "btn btn-add"} onClick={submitBrand} disabled={buttonDisabled}>
                    Submit
                </button>
                <Link to="/brands" className="btn btn-danger">
                    Cancel
                </Link>
            </div>
        </form>
    );
}

export default inject("brandStore", "brandFormStore")(observer(BrandForm));
