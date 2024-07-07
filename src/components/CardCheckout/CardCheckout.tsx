import { useContext, useState } from 'react';
import { styled, Typography, Paper, Box, keyframes } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Context from '../../context/Context';
import { ProductWithQuantityType, FormDataType } from '../../types/apiTypes';

const scaleOutTl = keyframes`
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
    opacity: 1;
  }
`;

const ContainerStyled = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

type ItemProps = {
  remove: boolean;
};

const Item = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'remove',
})<ItemProps>(({ theme, remove }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: theme.palette.text.primary,
  width: '90%',
  lineHeight: '60px',
  margin: '0.5rem',
  padding: '0.5rem',
  transition: '0.5s',
  animation: remove ? `${scaleOutTl} 0.2s linear forwards` : 'none',
  '&:hover': {
    boxShadow: '0 0 10px 0 #000',
  },
}));

type CardCheckoutProps = {
  id: string;
  product: ProductWithQuantityType;
  image: string;
  name: string;
  price: number;
};

function CardCheckout({ id, product, image, name, price }: CardCheckoutProps) {
  const [removeCard, setRemoveCard] = useState(false);

  const {
    removeItem,
  } = useContext(Context);
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
              { `R$ ${price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` }
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
