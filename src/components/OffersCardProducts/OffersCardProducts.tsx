import { useContext } from 'react';
import { Link as LinkRoute } from 'react-router-dom';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import { styled } from '@mui/material';
import Context from '../../context/Context';
import { ProductWithQuantityType } from '../../types/apiTypes';
import { useFormatCurrency } from '../../hook/useFormatCurrency';

type OffersCardProductsProps = {
  product: ProductWithQuantityType;
};

const ImgStyled = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
}));

function OffersCardProducts({ product }: OffersCardProductsProps) {
  const { handleAddToCart } = useContext(Context);
  const formatCurrency = useFormatCurrency();

  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        <Card
          sx={ {
            width: 320,
            height: 250,
            maxWidth: '100%',
            boxShadow: 'lg',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          } }
        >
          <CardOverflow>
            <AspectRatio
              color="neutral"
              objectFit="contain"
            >
              <LinkRoute to={ `/produto/${product.id}` }>
                <ImgStyled
                  src={ product.thumbnail }
                  loading="lazy"
                  alt="image-product"
                />
              </LinkRoute>
            </AspectRatio>
          </CardOverflow>
          <CardContent
            sx={ {
              flexGrow: 1,
              justifyContent: 'space-around',
            } }
          >
            <Link
              href={ `/produto/${product.id}` }
              fontWeight="sx"
              color="neutral"
              textColor="text.primary"
              textAlign="left"
              overlay
              endDecorator={ <ArrowOutwardIcon /> }
              sx={ {
                fontSize: '.8rem',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              } }
            >
              {product.title.slice(0, 30)}
            </Link>

            <Typography
              level="title-lg"
              sx={ {
                mt: 1,
                fontWeight: 'xl',
                flexWrap: 'wrap',
              } }
              endDecorator={
                <Chip component="span" size="sm" variant="soft" color="success">
                  Oferta
                </Chip>
              }
            >
              {formatCurrency(product.price)}
            </Typography>
          </CardContent>
          <CardOverflow>
            <Button
              variant="solid"
              color="primary"
              size="md"
              onClick={ () => handleAddToCart(product) }
            >
              Adicionar ao carrinho
            </Button>
          </CardOverflow>
        </Card>
      </CssVarsProvider>
    </StyledEngineProvider>
  );
}

export default OffersCardProducts;
