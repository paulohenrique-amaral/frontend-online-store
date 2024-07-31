import { useContext, useState } from 'react';
import { Typography, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Context from '../../context/Context';
import { ProductWithQuantityType } from '../../types/apiTypes';
import { ContainerStyled, Item } from './CardCheckoutStyled';
import { useFormatCurrency } from '../../hook/useFormatCurrency';

type CardCheckoutProps = {
  id: string;
  product: ProductWithQuantityType;
  image: string;
  name: string;
  price: number;
};

function CardCheckout({ product, image, name, price }: CardCheckoutProps) {
  const [removeCard, setRemoveCard] = useState(false);
  const { removeItem } = useContext(Context);
  const formatCurrency = useFormatCurrency();
  return (
    <ContainerStyled>
      <Item elevation={ 5 } remove={ removeCard }>
        <Box
          sx={ {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 0.5rem',
          } }
        >
          <img
            src={ image }
            width="80px"
            alt={ `Imagem de ${name}` }
          />
        </Box>
        <Box
          sx={ {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          } }
        >
          <Box
            sx={ {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'flex-start',
              margin: '0 0.5rem',
              gap: '0.5rem',
              flexGrow: 1,
            } }
          >
            <Typography variant="body2">
              { name }
            </Typography>
            <Typography variant="body1">
              { formatCurrency(price) }
            </Typography>
            <Typography variant="body2">
              { `Quantidade: ${product.quantity}` }
            </Typography>
          </Box>
          <Box>
            <IconButton
              aria-label="delete"
              size="large"
              onClick={ () => {
                setRemoveCard(true);
                setTimeout(() => {
                  removeItem(product.id);
                }, 200);
              } }
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </Item>
    </ContainerStyled>
  );
}

export default CardCheckout;
