import { Routes, Route } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Details from './pages/Details/Details';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavigateMobile from './components/NavigateMobile/NavigateMobile';
import CardProduct from './components/CardProduct/CardProduct';

function App() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down('sm'));
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
      {matchesXS ? <NavigateMobile /> : <Footer />}
      {/* <CardProduct /> */}
    </>
  );
}

export default App;
