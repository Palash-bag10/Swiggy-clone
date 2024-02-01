import React from "react"
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats.png"
                    alt="app logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor: "lightgreen"
}

const RestaurantCard = () => {
    return (
        <div className="restaurant-card" style={styleCard}>
            <img
             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ub35uaf2iferroprejgy" 
             alt="res-logo"
             className="res-logo"
            />
            <h3>Maghna Foods</h3>
            <p>Biriyani, Asian</p>
            <p>4.4 stars</p>
            <p>40 mins</p>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search"> Search </div>
            <div className="restaurant-container">
                {/* RestaurantCard */}
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            {/* Header */}
            <Header />
            {/* Body */}
            <Body />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< AppLayout />)