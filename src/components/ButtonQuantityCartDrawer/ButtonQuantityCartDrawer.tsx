import { useContext } from 'react';
import { Box } from '@mui/material';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Context from '../../context/Context';

type ButtonQuantityCartDrawerProps = {
  product: {
    id: string;
    quantity: number;
    available_quantity: number;
  };
};

function ButtonQuantityCartDrawer({ product }: ButtonQuantityCartDrawerProps) {
  const {
    decrementItemQuantity,
    incrementItemQuantity,
  } = useContext(Context);

  return (
    <Box
      sx={ {
        display: 'flex',
        gap: '0.3rem',
      } }
    >
      <IconButton
        variant="outlined"
        size="sm"
        color="neutral"
        onClick={ () => decrementItemQuantity(product.id) }
        disabled={ product.quantity <= 1 }
        sx={ {
          minWidth: '0px',
          minHeight: '0px',
          padding: '0.25rem',
        } }
      >
        -
      </IconButton>
      <Textarea
        size="sm"
        name="quantity"
        value={ product.quantity }
        sx={ {
          width: '2.5rem',
          pointerEvents: 'none',
          fontSize: '0.8rem',
          '& textarea': {
            padding: '0rem 0.7rem 0rem 0rem',
            textAlign: 'center',
          },
        } }
      />
      <IconButton
        variant="outlined"
        size="sm"
        color="neutral"
        onClick={
          () => incrementItemQuantity(product.id, product.available_quantity)
         }
        sx={ {
          minWidth: '0px',
          minHeight: '0px',
          padding: '0.2rem',
        } }
      >
        +
      </IconButton>
    </Box>
  );
}

export default ButtonQuantityCartDrawer;
