import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';
import Badge, { BadgeProps } from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Context from '../../context/Context';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `1px solid ${theme.palette.background.paper}  `,
    padding: '0 4px',
  },
  '& svg': {
    color: theme.palette.primary.contrastText,
    fontSize: '2rem',
  },
}));

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
