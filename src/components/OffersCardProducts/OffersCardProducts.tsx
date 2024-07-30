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
import { ProductType } from '../../types/apiTypes';

type OffersCardProductsProps = {
  product: ProductType;
};

const ImgStyled = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
}));

function OffersCardProducts({ product }: OffersCardProductsProps) {
  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        <Card
          sx={ { width: 320, maxWidth: '100%', boxShadow: 'lg' } }
        >
          <CardOverflow>
            <AspectRatio
              color="neutral"
              objectFit="contain"
              sx={ {
                background: 'red',
              } }
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
          <CardContent>
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
              sx={ { mt: 1, fontWeight: 'xl' } }
              endDecorator={
                <Chip component="span" size="sm" variant="soft" color="success">
                  Oferta
                </Chip>
          }
            >
              {product.price
                .toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
            </Typography>
          </CardContent>
          <CardOverflow>
            <Button
              variant="solid"
              color="primary"
              size="md"
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
