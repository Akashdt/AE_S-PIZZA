import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import { Card, Button } from "react-bootstrap";
import Checkout from "../components/Checkout";
import AOS from 'aos'
import 'aos/dist/aos.css'
function Cartscreen() {
    AOS.init();
        const cartstate = useSelector((state) => state.cartReducer);
    const cartItems = cartstate.cartItems;
    var subtotal = cartItems.reduce((x, item) => x + item.price, 0);
    console.log(cartItems)
    const dispatch = useDispatch();
  return (
    <div data-aos="fade-down"className="cart-bg">
         <div className="row justify-content-center p-2 ">
        
             <div className="col-md-6">
              <h2 style={{ fontSize: "60px" ,color:"white"}}>
              My Cart<img src="https://img.icons8.com/clouds/100/000000/shopping-cart-promotion.png"/></h2>
              {cartItems.map(item=> {
                  console.log("ITEM",item)
            return <div className="flex-container">
                            <div className="text-left m-1 w-100">
                            <h1 style={{color:"white"}}> {item.name}[{item.varient}]</h1>
                             {console.log(item)}
                             <h1 style={{color:"white"}}> Pricing:  {item.quantity}*{item.prices[0][item.varient]}={item.price}</h1>
                            <h1 style={{display:'inline',color:"yellow"}} >Quantity: </h1>
                            <a onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity+1, item.varient)
                      );
                    }}>
                            <i  className="fa fa-plus" aria-hidden="true" ></i>
                            </a>
                   
                            <b style={{color:"white"}}> {item.quantity}</b>
                            <a onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity-1, item.varient)
                      );
                    }}>
                            <i className="fa fa-minus" aria-hidden="true" ></i>
                            </a>
                            <hr/>
                            </div>
                            
                            <div className="w-100 m-1">
                            <img src={item.image}style={{ height: "80px", height: "80px" }}/>   
                            </div>
                            <div className="w-100 m-1">
                              <a onClick={() => {
                      dispatch(deleteFromCart(item));
                    }}>
                            <i className="fa fa-trash mt-3" aria-hidden="true" o></i>
                            </a>
                            </div>

                    </div>
             
            })}
             </div>
             
            
             
             
             
          
                <div className="col-md-4 text-right">
                <Card style={{ width: "18rem"  }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/564x/27/4d/09/274d098d1c56c61e5c5f001b420efe80.jpg"
            />
            <Card.Body >
              <Card.Title>TOTAL AMOUNT</Card.Title>
              <Card.Text>
                <h2 style={{ fontSize: "45px" }}>{subtotal} /-rs only</h2>
              </Card.Text>
              <Checkout subtotal={subtotal} />
            </Card.Body>
          </Card>
                {/* <h2 style={{ fontSize: "45px" ,color: "white"}}>Total Amount: {subtotal} RS/-</h2>
                  <button className="btn" >Checkout={subtotal} </button> */}
                </div>

            
          </div>
    </div>
  )
}

export default Cartscreen