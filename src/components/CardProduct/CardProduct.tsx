import { useContext } from 'react';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { styled, Grid, Typography, Paper, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { ProductWithQuantityType } from '../../types/apiTypes';
import Context from '../../context/Context';

const ContainerStyled = styled(Box)(({ theme }) => ({
  // backgroundColor: 'blue',
  color: theme.palette.primary.contrastText,
  // width: '100%',
  // height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Item = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.text.primary,
  width: '100%',
  // width: '240px',
  // height: '340px',
  lineHeight: '60px',
  margin: '0.5rem',
  padding: '0.5rem',
}));

const ContentStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  // color: theme.palette.text.primary,
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
  const { handleAddToCart } = useContext(Context);
  return (
    <ContainerStyled>
      <Item elevation={ 5 }>
        <Box>
          <Link to={ `/produto/${id}` }>
            <img src={ image } alt={ `Product-${name}` } />
          </Link>
        </Box>
        <ContentStyled>
          <Box>
            <Typography variant="h6">
              {name}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">
              R$
              {' '}
              {price}
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              startIcon={ <AddShoppingCartIcon /> }
              onClick={ () => handleAddToCart(product) }
            >
              Adicionar ao carrinho
            </Button>
          </Box>
          <Box>
            <Typography variant="h6">
              {freight ? 'Frete Grátis' : ''}
            </Typography>
          </Box>
        </ContentStyled>
      </Item>
    </ContainerStyled>
  );
}

export default CardProduct;
