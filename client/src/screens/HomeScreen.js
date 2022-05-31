import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import getAllPizzaReducer from "../reducers/pizzareducers"
 import GifLoader from 'react-gif-loader';
 import Loading from "../components/Loading";
import { useSelector } from "react-redux";
import pizzas from "../pizzaData";
import Pizza from "../components/Pizza";
import Filter from "../components/Filter";
const HomeScreen = () => {
  const dispatch = useDispatch();
  // useEffect() hook..............below
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  const pizzaState = useSelector((state)=>state.getAllPizzaReducer )
  const {loading,pizzas,error}=pizzaState;

  //  useeffect hook top ...........................
  return (
    <div className="home-bg">
       <Filter/>
      <div className="row">

      {loading ? (
          
          <GifLoader
            loading={true}
            imageSrc="https://i.gifer.com/Xuw0.gif"
            style={{ marginTop: "10%", height: "50%", width: "50%" }}
            // overlayBackground="rgba(0,0,0,0.5)"
          />
        ) : error ? (
          <GifLoader
            loading={true}
            imageSrc="https://i.gifer.com/Me3.gif"
            style={{ marginTop: "10%", height: "50%", width: "50%" }}
            // overlayBackground="rgba(0,0,0,0.5)"
          />)
      
      
      
      
      :(
pizzas.map((pizza) => {
  return (
    <div className="col-md-4" data-aos='fade-down' key={pizza._id} style={{color:'yellow'}}>    
      <div >
        <Pizza pizza={pizza} />
      </div>
    </div>
  );
})


      )}



      

        
      </div>
       
    </div>
  );
};
export default HomeScreen;


     
    
    
    
    
    
    
    
