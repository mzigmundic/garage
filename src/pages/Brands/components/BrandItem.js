import { Link } from "react-router-dom";
import { inject } from "mobx-react";

function BrandItem({ brandStore, brand }) {
    return (
        <li className="brand-card">
            <div className="brand-card__image">
                <img src={brand.logo} alt={brand.name} />
            </div>
            <div className="brand-card__content">
                <h2 className="brand-card__name">{brand.name}</h2>
                <div className="card__control-flex">
                    <Link to={`/brands/${brand.id}/edit`} className="btn btn-edit">
                        Edit
                    </Link>
                    <button className="btn btn-danger" onClick={() => brandStore.sellBrand(brand.id)}>
                        Dispose
                    </button>
                </div>
            </div>
        </li>
    );
}

export default inject("brandStore")(BrandItem);
