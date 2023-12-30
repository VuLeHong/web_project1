
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCaterogy from './Pages/ShopCaterogy';
import Signups from './Pages/Signups';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Payment from './Pages/Payment';
import Logins from './Pages/Logins';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/bookmark' element={<ShopCaterogy banner={men_banner} category="bookmark"/>}/>
          <Route path='/mockhoa' element={<ShopCaterogy banner={women_banner} category="móc khóa"/>}/>
          <Route path='/lich' element={<ShopCaterogy banner={kid_banner} category="lịch"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path='/product/:productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/signup' element={<Signups/>}/>
          <Route path='/login' element={<Logins/>}/>
          <Route path='/payment' element={<Payment/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
