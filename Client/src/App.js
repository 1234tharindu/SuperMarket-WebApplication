
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';

import About from './component/About';
import Contact from './component/contact';
import Footer from './component/Footer';

import Login from './component/Login_ui';

import Register from './component/Register';

import Logout from './component/Logout'

import item from './component/item';

import Cart from './component/cart';

import Profile from './component/Profile';

import Services from './component/Services';

import {Switch,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    {/* <Home/> */}
      <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/services" component={Services} />


      {/* <Route exact path="/" component={Products} /> */}
      {/* <Route exact path="/product" component={Products} /> */}
      {/* <products/> */}
      <Route exact path="/cart" component={Cart} />


      {/* <Route exact path="/product" component={item} /> */}

      <Route exact path="/about" component={About} />
      <Route exact path="/conatact" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/logout" component={Logout} />

      <Route exact path="/Profile" component={Profile} />


      </Switch>
    {/* <Home/>
    <Products/>
    <About/>
    <Contact/> */}

    <Footer/>
    
    

    </>
    
  );
}

export default App;
