import { useContext, useState } from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import { Box } from '@mui/material';
import IconButton from '@mui/joy/IconButton';
import { Link } from 'react-router-dom';
import Card from '@mui/joy/Card';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import Context from '../../context/Context';
import { animation } from './CartDrawerCardStyled';
import ButtonQuantityCartDrawer
  from '../ButtonQuantityCartDrawer/ButtonQuantityCartDrawer';
import { useFormatCurrency } from '../../hook/useFormatCurrency';

function CartDrawerCard() {
  const [removedCard, setRemovedCard] = useState(false);
  const {
    cart,
    toggleCartDrawer,
    removeItem } = useContext(Context);

  const formatCurrency = useFormatCurrency();

  const handleRemoveItem = (productId: string) => {
    setRemovedCard(true);
    setTimeout(() => {
      setRemovedCard(false);
    }, 400);
    setTimeout(() => {
      removeItem(productId);
    }, 200);
  };

  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        {cart.length > 0 ? (
          cart.map((product) => (
            <Card
              key={ product.id }
              variant="outlined"
              orientation="horizontal"
              sx={ {
                margin: 1,
                width: 320,
                '&:hover': {
                  boxShadow: 'md',
                  borderColor: 'neutral.outlinedHoverBorder',
                  animation: removedCard ? `${animation} 0.3s linear` : 'none',
                },
              } }
            >
              <AspectRatio ratio="1" sx={ { width: 90 } }>
                <img
                  src={ product.thumbnail }
                  srcSet={ product.thumbnail }
                  alt="image-product"
                />
              </AspectRatio>
              <CardContent>
                <Typography
                  level="title-lg"
                  sx={ {
                    overflow: 'hidden',
                    fontSize: 14,
                  } }
                >
                  {product.title}
                </Typography>
                <Box>
                  <Typography level="title-sm">
                    {formatCurrency(product.price)}
                  </Typography>
                </Box>
                <Box
                  sx={ {
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'center',
                    gap: 1,
                  } }
                >
                  <Typography level="body-sm">
                    Qtd:
                  </Typography>
                  <Box>
                    <ButtonQuantityCartDrawer
                      product={ product }
                    />
                  </Box>
                </Box>
                <Box
                  sx={ {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  } }
                >
                  <Link
                    to={ `/produto/${product.id}` }
                    onClick={ () => toggleCartDrawer(false) }
                  >
                    <Chip
                      variant="outlined"
                      color="primary"
                      size="sm"
                      sx={ { pointerEvents: 'none' } }
                    >
                      Detalhes do produto
                    </Chip>
                  </Link>
                  <Box>
                    <IconButton
                      variant="outlined"
                      size="sm"
                      color="neutral"
                      onClick={ () => handleRemoveItem(product.id) }
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))
        )
          : (
            <Card
              variant="outlined"
              orientation="horizontal"
              sx={ {
                margin: 1,
                width: 320,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  boxShadow: 'md',
                  borderColor: 'neutral.outlinedHoverBorder',
                },
              } }
            >
              <Typography
                level="title-lg"
              >
                Seu carrinho está vazio
              </Typography>
              <Box>
                <ProductionQuantityLimitsIcon
                  color="primary"
                  sx={ { fontSize: '5rem' } }
                />
              </Box>
            </Card>
          )}
      </CssVarsProvider>
    </StyledEngineProvider>
  );
}

export default CartDrawerCard;
