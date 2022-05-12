
import Navbarre from './Components/Navbarre';
import 'bootstrap/dist/css/bootstrap.min.css';
import  ListRoutes  from "./Routes/ListRoutes";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { CartProvider } from "react-use-cart";
import { ToastContainer } from 'react-toastify';
//import CarouselHome from './Components/CarouselHome';

function App() {
  return (
    <>
    <CartProvider>
      <Router>
      
      <Navbarre/>
      
      <ListRoutes/>
      <ToastContainer />
      </Router>
      </CartProvider>
    </>
  );
}

export default App;
