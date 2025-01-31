import { Routes, Route } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Details from './pages/Details/Details';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavigateMobile from './components/NavigateMobile/NavigateMobile';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import AlertAddCart from './components/AlertAddCart/AlertAddCart';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';

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
        <Route
          path="/terms"
          element={ <TermsAndConditions /> }
        />
        <Route
          path="/contato"
          element={ <Contact /> }
        />
        <Route
          path="/login"
          element={ <Login /> }
        />
      </Routes>
      {matchesXS ? <NavigateMobile /> : <Footer />}
      <AlertAddCart />
    </>
  );
}

export default App;
