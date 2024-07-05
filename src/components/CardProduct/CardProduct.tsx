import { useContext, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { styled, Typography, Paper, Box, keyframes } from '@mui/material';
import { ProductWithQuantityType } from '../../types/apiTypes';
import Context from '../../context/Context';

const rotate = keyframes`
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
`;

const ContainerStyled = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
}));

const Item = styled(Paper)(({ theme }) => ({
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
  '&:hover': {
    boxShadow: '0 0 10px 0 #000',
  },
}));

const ContentStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'space-around',
  padding: '0.5rem',
  margin: '0 0.5rem',
  width: 'calc(100% - 220px)',
}));

type CardProductProps = {
  id: string;
  product: ProductWithQuantityType;
  image: string;
  name: string;
  price: number;
  freight: boolean;
};

function CardProduct({ id, product, image, name, price, freight }: CardProductProps) {
  const [animate, setAnimate] = useState(false);
  const [showCartDetail, setShowCartDetail] = useState(false);
  const {
    handleAddToCart,
    removeItem,
    decrementItemQuantity,
    incrementItemQuantity,
  } = useContext(Context);

  const navigate = useNavigate();
  const location = useLocation();

  const showBtn = location.pathname === '/carrinho';

  return (
    <ContainerStyled>
      <Item elevation={ 5 }>
        <Box
          sx={ {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& a': {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 0.4rem',
            },
            '& img': {
              width: '100px',
            },
          } }
        >
          <Link to={ `/produto/${id}` }>
            <img src={ image } alt={ `Product-${name}` } />
          </Link>
        </Box>
        <ContentStyled>
          <Box
            sx={ {
              marginBottom: '10px',
              '& a': {
                textDecoration: 'none',
                color: 'black',
              },
            } }
          >
            <Typography fontFamily="monospace">
              <Link to={ `/produto/${id}` }>
                {name}
              </Link>
            </Typography>
          </Box>
          <Box
            sx={
            { display: 'flex', alignItems: 'baseline', gap: '0.3rem' }
          }
          >
            <Typography>
              R$
            </Typography>
            <Typography variant="h4">
              {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </Typography>
          </Box>
          {!showBtn && (
            <Box>
              <Button
                variant="contained"
                startIcon={ <AddShoppingCartIcon /> }
                onClick={ () => {
                  handleAddToCart(product);
                  setAnimate(true);
                  setTimeout(() => setAnimate(false), 700);
                } }
                sx={ {
                  '& svg': {
                    animation: animate ? `${rotate} .5s linear forwards` : 'none',
                  },
                } }
              >
                Adicionar ao carrinho
              </Button>
            </Box>
          )}
          <Box>
            <Typography variant="h6" color="#00A650">
              {freight ? 'Frete Grátis' : ''}
            </Typography>
          </Box>
        </ContentStyled>
        { showBtn && (
          <Box
            sx={ {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '0.5rem',
              position: 'absolute',
              top: 0,
              right: 0,
              margin: '0.7rem',
              '& button': {
                minWidth: '0px',
              },
            } }
          >
            <Button
              variant="outlined"
              size="small"
              onClick={ () => {
                if (product.quantity <= 1) {
                  removeItem(product.id);
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
              onClick={ () => incrementItemQuantity(product.id) }
            >
              +
            </Button>
          </Box>
        )}
      </Item>
    </ContainerStyled>
  );
}

export default CardProduct;
