function Home({ featuredVehicles }) {
    return (
        <div className="container">
            <div className="main-heading">
                <h1 className="main-heading__title">Featured</h1>
            </div>
            <ul className="grid grid-showcase">
                {featuredVehicles.map((vehicle) => {
                    return (
                        <li key={vehicle.id}>
                            <img src={vehicle.image} alt={vehicle.name} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Home;
