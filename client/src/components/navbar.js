import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { addToCart } from "../actions/cartActions";
import {Dropdown}  from "react-bootstrap";
import { logoutUser } from "../actions/userActions";
const NavBar = () => {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();
  console.log(currentUser);
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-black">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            AE'S PIZZA <img src="https://img.icons8.com/external-febrian-hidayat-outline-color-febrian-hidayat/64/000000/external-pizza-fast-food-febrian-hidayat-outline-color-febrian-hidayat.png"/>
          </a>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"><i style={{ color: "black" }} className="fas fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              
            {currentUser ? (
								
								<Dropdown className="mt-2">
                  
									<Dropdown.Toggle variant="success" id="dropdown-basic">
										{currentUser.name}
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item href="/orders">Orders</Dropdown.Item>
										<Dropdown.Item href="#"onClick={() => {
                      dispatch(logoutUser());
                    }}>Log out</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							) : (
								<li className="nav-item">
                <a className="nav-link" aria-current="page" href="/login">
                  Login<img src="https://img.icons8.com/external-yogi-aprelliyanto-flat-yogi-aprelliyanto/32/000000/external-login-web-design-and-development-yogi-aprelliyanto-flat-yogi-aprelliyanto.png"/>
                </a>
              </li>
							)}
              
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  Cart <img src="https://img.icons8.com/ultraviolet/40/000000/shopping-cart-loaded--v1.png"/>{cartstate.cartItems.length}
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;