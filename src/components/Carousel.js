import React from 'react';
import pizzaImg from '../assets/pizza.jpg'; // Path from components to assets
import breadImg from '../assets/bread.jpg'; 
import pastryImg from '../assets/pastry.jpg'; 

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption" style={{ zIndex: "9" }}>
                        <form className="d-flex justify-content-center">
                            <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Type in..." aria-label="Search" />
                            <button className="btn text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src={pizzaImg} className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="Pizza" />
                    </div>

                    <div className="carousel-item">
                        <img src={pastryImg} className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="Pastry" />
                    </div>
                    <div className="carousel-item">
                        <img src={breadImg} className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="Bread" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
