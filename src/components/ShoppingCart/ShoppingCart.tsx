import { useContext } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Context from '../../context/Context';
import { StyledBadge } from './ShoppingCartStyled';
import CartDrawer from '../CartDrawer/CartDrawer';

function ShoppingCart() {
  const { cartSize, toggleCartDrawer } = useContext(Context);

  return (
    <>
      <IconButton
        onClick={ () => toggleCartDrawer(true) }
        aria-label="cart"
      >
        <StyledBadge
          badgeContent={ cartSize }
          color="info"
          sx={ {
            '& .MuiBadge-badge': {
              right: -5,
              top: 1,
              border: 'px solid white',
              padding: '0 4px',
            },
          } }
        >
          <ShoppingCartIcon style={ { fontSize: '2rem' } } />
        </StyledBadge>
      </IconButton>
      <CartDrawer />
    </>
  );
}

export default ShoppingCart;
