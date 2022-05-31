import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import HomeScreen from './screens/HomeScreen';
import Loginscreen from './screens/Loginscreen';
import Registerscreen from './screens/Registerscreen';
import Ordersscreen from './screens/Ordersscreen';
import Adminscreen from './screens/Adminscreen';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import {BrowserRouter , Route , Link , Switch } from 'react-router-dom'

import Cartscreen from './screens/Cartscreen'
function App() {
  
  return (
    <div className="App"
    >
      
      
      
      
      
      <BrowserRouter>
      <Navbar/>
      <h1 style={{color: 'rgb(25, 25, 112)',fontWeight:'bold'}}  >🍕A Pizzaaaa slice a day keeps sadness away😊🍕</h1>
     
      <Route path="/" exact component={HomeScreen} />
          <Route path="/cart" exact component={Cartscreen}/>
          <Route path="/register" exact component={Registerscreen}/>
          <Route path='/login' exact component={Loginscreen}/>
          <Route path='/orders' exact component={Ordersscreen}/>
          <Route path='/admin' component={Adminscreen}/>
       {/* <Route  path="/" element={<HomeScreen/>} />
       <Route   path="/cart" element={<Cartscreen/>}/>
       <Route   path="/login" element={<Loginscreen/>}/>
       <Route   path="/register" element={<Registerscreen/>}/>
       <Route   path="/orders" element={<Ordersscreen/>}/>
       <Route path='/admin' element={<Adminscreen/>}/>
        */}
    </BrowserRouter>
      
   
    </div>
    
  );
}

export default App;
