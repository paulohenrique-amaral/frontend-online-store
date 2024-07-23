import { useContext } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Context from '../../context/Context';
import { StyledBadge } from './ShoppingCartStyled';

function ShoppingCart() {
  const { cartSize } = useContext(Context);

  return (
    <Link to="/carrinho">
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={ cartSize } color="success">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Link>
  );
}

export default ShoppingCart;
