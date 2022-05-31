import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {useDispatch , useSelector} from 'react-redux'
import { addToCart } from "../actions/cartActions";
import AOS from 'aos'
import 'aos/dist/aos.css';

const Pizza = ({ pizza }) => {
  
  AOS.init({
    duration:1000
    
  })
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  // for handling the modal

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // for handlin g the modal
  const dispatch = useDispatch()
  function addtocart()
  {
    dispatch(addToCart(pizza,quantity,varient))
  }


  return (
    
    <div data-aos='zoom-out' className="shadow-lg p-3 mb-5 bg-black rounded" style={{backgroundColor:'black'}} >
      <div onClick={handleShow} style={{backgroundColor:'black'}}>
        {/* constainer div for holding the h1 and image together I will apply onclick for the modfal here */}
        <h1>{pizza.name}</h1>
        <img src={pizza.image} alt="pizza  name" className="img-fluid img1"style={{backgroundColor:'black'}} />
      </div>

      <div className="flex-container"style={{backgroundColor:'black'}}>
        <div className="w-100 m-1"style={{backgroundColor:'black'}}>
          {/* for the Variant  */}
          <p>Variants</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1"style={{backgroundColor:'black'}}>
          {/* for the Quantity  */}
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container"style={{backgroundColor:'black'}}>
        {/* for the price and add to cart functionality  */}
        <div className="w-100">
          {/* for the Price  */}

          <h1 className="mt-2">
            Price: {pizza.prices[0][varient] * quantity} Rs.
          </h1>
        </div>
        <div className="w-100"style={{backgroundColor:'black'}}>
          {/* for the add to cart  */}
          <button className='btn'onClick={addtocart} >Add To cart</button>
        </div>
      </div>
      {/* Bootsratp modal view */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modal-res">
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-res">
          {/* image  of modal goes here  */}
          <img
            src={pizza.image}
            alt="pizza img"
            className="img-fluid modal-image"
          />
          <p style={{ color: "black", fontWeight: "bold" }}>
            {pizza.description}
          </p>
        </Modal.Body>

        <Modal.Footer className="modal-foot">
          <button className="btn" onClick={handleClose}>
            CLOSE <span style={{ color: "white" }}>✖</span>
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Pizza;