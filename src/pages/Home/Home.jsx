import React, { useContext } from "react";
import Category from "./components/Category";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";


const Home = () => {
    const {state} = useContext(DataContext)
  return (
    <>
   
      <main>
        <div className="home-hero-image">
          <NavLink to="/product">
            <img
            // src="https://res.cloudinary.com/dgoldjr3g/image/upload/v1684384979/flower1_yxr75v.png"
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
            {
                state.categoryData.map(({_id,categoryName,image})=><Category _id={_id} name={categoryName} src={image} />)
            }
          
          {/* <Category />
          <Category /> */}
          
    
   
      </div>
      
    </>
  );
};

export default Home;
