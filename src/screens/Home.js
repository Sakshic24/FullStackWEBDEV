import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState('');

  const loadFoodItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/foodData", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      setFoodItems(data[0]);
      setFoodCat(data[1]);
    } catch (error) {
      console.error("Failed to fetch food data:", error);
    }
  };

  useEffect(() => {
    loadFoodItems();
  }, []);

  return (
    <div>
      <Navbar />

      {/* Carousel with Search */}
      <Carousel search={search} setSearch={setSearch} />

      <div className="container">
        {foodCat.length > 0 && foodCat.map((category) => (
          <div className="row mb-3" key={category._id || category.CategoryName}>
            <div className="fs-3 m-3">{category.CategoryName}</div>
            <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />

            {foodItems
              .filter(item =>
                item.CategoryName === category.CategoryName &&
                item.name.toLowerCase().includes(search.toLowerCase())
              )
              .map(item => (
                <div key={item._id || item.name} className="col-12 col-md-6 col-lg-3">
                  <Card
                    foodName={item.name}
                    item={item}
                    options={item.options[0]}
                    ImgSrc={item.img}
                  />
                </div>
              ))
            }

            {foodItems.filter(item =>
              item.CategoryName === category.CategoryName &&
              item.name.toLowerCase().includes(search.toLowerCase())
            ).length === 0 && (
              <div className="text-muted">No matching items in this category.</div>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
