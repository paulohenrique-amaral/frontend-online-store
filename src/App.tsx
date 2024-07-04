import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Details from './pages/Details/Details';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavigateMobile from './components/NavigateMobile/NavigateMobile';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={ <Home /> }
        />
        <Route
          path="/carrinho"
          element={ <Cart /> }
        />
        <Route
          path="/checkout"
          element={ <Checkout /> }
        />
        <Route
          path="/produto/:productId"
          element={ <Details /> }
        />
      </Routes>
      <NavigateMobile />
      {/* <Footer /> */}
    </>
  );
}

export default App;
