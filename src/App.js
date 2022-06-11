
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import Menu from './Component/Navbar/Menu';
import Cart from './Component/Cart/Cart';
import Error from './Component/Error/Error';

import Product from './Component/Product/Product';
import ProductsContext from './Global/ProductsContext';


function App() {
  return (
    <div className="App">
      <Menu/>
   <ProductsContext>
   
      <Routes>
      <Route exact path="/apnamittee" element={<Product/>} /> 
      <Route path="/" element={<Product/>} /> 
      <Route path="/cart" element={<Cart/>} />
      <Route path="*" element={<Error/>} />
      
      </Routes>
      

   </ProductsContext>
  
   
   
    </div>
  );
}

export default App;
