import { useContext } from 'react';
import { Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
import Context from '../../context/Context';
import { BoxStyled } from './ButtonQuantityCartStyled';

type ButtonQuantityCartProps = {
  product: {
    id: string;
    quantity: number;
    available_quantity: number;
  };
  setRemoveCard: (value: boolean) => void;
};

function ButtonQuantityCart({ product, setRemoveCard }: ButtonQuantityCartProps) {
  const {
    removeItem,
    decrementItemQuantity,
    incrementItemQuantity,
  } = useContext(Context);

  return (
    <BoxStyled>
      <Button
        variant="outlined"
        size="small"
        onClick={ () => {
          if (product.quantity <= 1) {
            setRemoveCard(true);
            setTimeout(() => {
              removeItem(product.id);
            }, 200);
          } else {
            decrementItemQuantity(product.id);
          }
        } }
      >
        -
      </Button>
      <Typography>
        {product.quantity}
      </Typography>
      <Button
        variant="outlined"
        size="small"
        onClick={ () => incrementItemQuantity(
          product.id,
          product.available_quantity,
        ) }
      >
        +
      </Button>
    </BoxStyled>
  );
}

export default ButtonQuantityCart;
