import { useContext, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Typography, Box, Grid } from '@mui/material';
import { ProductWithQuantityType } from '../../types/apiTypes';
import Context from '../../context/Context';
import { ContainerStyled, Item, rotate } from './CardProductStyled';
import StarRating from '../StarRating/StarRating';
import AlertAddCart from '../AlertAddCart/AlertAddCart';
import ButtonQuantityCart from '../ButtonQuantityCart/ButtonQuantityCart';

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
  const [removeCard, setRemoveCard] = useState(false);
  const {
    handleAddToCart,
    removeItem,
    decrementItemQuantity,
    incrementItemQuantity,
    errorEditCart,
  } = useContext(Context);

  const location = useLocation();

  const showBtn = location.pathname === '/carrinho';
  const gridSize = showBtn ? 6 : 9;

  return (
    <ContainerStyled container>
      <Item elevation={ 5 } remove={ removeCard }>
        <Grid
          item
          xs={ 3 }
          md={ 3 }
          sx={ {
            overflow: 'hidden',
          } }
        >
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
        </Grid>
        <Grid
          item
          xs={ gridSize }
          md={ gridSize }
          sx={ {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'space-around',
            padding: '0.5rem',
            margin: '0 0.5rem',
            width: '100%',
            overflow: 'hidden',
          } }
        >
          <Box
            sx={ {
              width: '100%',
              marginBottom: '10px',
              '& a': {
                textDecoration: 'none',
                color: 'black',
                overflow: 'hidden',
              },
            } }
          >
            <Typography
              fontFamily="monospace"
              sx={ {
                fontSize: {
                  xs: '0.8rem',
                  sm: '1rem',
                },
              } }
            >
              <Link to={ `/produto/${id}` }>
                {name}
              </Link>
            </Typography>
          </Box>
          {!showBtn && (
            <Box>
              <StarRating productIdAsserted={ id } />
            </Box>
          )}
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
          {!showBtn && (
            <Box>
              <Typography variant="h6" color="#00A650">
                {freight ? 'Frete Grátis' : ''}
              </Typography>
            </Box>
          )}
        </Grid>
        { showBtn && (
          <Grid
            item
            xs={ 3 }
            md={ 3 }
          >
            <ButtonQuantityCart
              product={ product }
              setRemoveCard={ setRemoveCard }
            />
          </Grid>
        )}
      </Item>
    </ContainerStyled>
  );
}

export default CardProduct;
