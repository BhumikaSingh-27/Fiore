import React, { useContext, useEffect } from "react";
import Category from "./components/Category";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";

const Home = () => {
  const { state, dispatch, setInputLogin } = useContext(DataContext);

  useEffect(() => {
    dispatch({ type: "RESET_ALL" });
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setInputLogin({ email: null, password: null });
  }, []);

  return (
    <>
      <main>
        <div className="home-hero-image">
          <NavLink to="/product">
            <img
              // onClick={() => getProductData()}
              src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt32prodlp/banners/same_day_delivery_d_interflora_banner_20230427.jpg"
              alt=""
            />
          </NavLink>
        </div>
      </main>

      <div className="mid-heading">
        <h1>Search by Category</h1>
      </div>

      <div className="align-category">
        {state.categoryData.map(({ _id, categoryName, image }, index) => (
          <div key={index}>
            {" "}
            <Category _id={_id} name={categoryName} src={image} />{" "}
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
