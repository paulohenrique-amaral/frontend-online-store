import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import Context from '../../context/Context';
import { getProductById } from '../../services/api';
import Loading from '../../components/Loading/Loading';
import StarRating from '../../components/StarRating/StarRating';
import { ProductDetailType } from '../../types/apiTypes';
import FormEvaluation from '../../components/FormEvaluation/FormEvaluation';
import ReviewsSection from '../../components/ReviewsSection/ReviewsSection';
import { initialProductDetails } from '../../help/helper';

function Details() {
  const { productId } = useParams<string>();
  const productIdAsserted = productId!;
  const [product, setProduct] = useState<ProductDetailType>(initialProductDetails);
  const [isLoading, setIsLoading] = useState(true);

  const { handleAddToCart, productReviews } = useContext(Context);

  useEffect(() => {
    getProductById(productIdAsserted)
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch product by ID:', error);
      });
  }, [productIdAsserted]);

  if (isLoading) return <Loading />;

  return (
    <Container maxWidth="lg">
      <Grid container sx={ { marginBottom: '100px' } }>
        <Grid
          item
          xs={ 12 }
          md={ 8 }
          sx={ {
            backgroundColor: '#fff',
          } }
        >
          <Box
            sx={ {
              width: '90%',
              display: 'flex',
              justifyContent: 'center',
              margin: '20px 0px',
            } }
          >
            <img
              style={ { maxWidth: '100%', height: 'auto' } }
              src={ product?.pictures[0].url }
              alt="Produto"
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={ 12 }
          md={ 4 }
          sx={ {
            backgroundColor: '#fff',
          } }
        >
          <Box
            sx={ {
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              margin: '20px 0px',
              padding: '10px',
            } }
          >
            <Typography variant="h5">
              {product?.title}
            </Typography>
            <Box>
              <StarRating
                productIdAsserted={ productIdAsserted }
              />
            </Box>
            <Box
              sx={ {
                gap: '10px',
                display: 'flex',
                alignItems: 'baseline',
              } }
            >
              <Typography
                variant="overline"
                sx={ {
                  textDecoration: 'line-through',
                } }
              >
                R$
                {
                  (product.price + product.price * 0.30).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })
                }
              </Typography>
            </Box>
            <Box
              sx={ {
                gap: '10px',
                display: 'flex',
                alignItems: 'baseline',
              } }
            >
              <Typography variant="body1">
                R$
              </Typography>
              <Typography variant="h6">
                {
                  product?.price.toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                  })
                }
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2">
                {product?.warranty}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" color="#00A650">
                {product?.shipping.free_shipping ? 'Frete Grátis' : ''}
              </Typography>
            </Box>
            <Button
              variant="contained"
              endIcon={ <AddReactionIcon /> }
              type="button"
              onClick={ () => handleAddToCart(product) }
            >
              Eu quero
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={ 12 }
          md={ 12 }
          sx={ {
            padding: '20px',
            margin: '20px 0px',
            backgroundColor: '#fff',
            borderRadius: '10px',
          } }
        >
          <Typography variant="h5">
            Detalhes
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo eveniet suscipit,
            porro veniam sapiente quas labore ut et.
            Itaque iste delectus esse sunt commodi.
            Sapiente veniam iure aspernatur repudiandae
            odit.
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo eveniet suscipit,
            porro veniam sapiente quas labore ut et.
            Itaque iste delectus esse sunt commodi.
            Sapiente veniam iure aspernatur repudiandae
          </Typography>
        </Grid>
        <Grid
          item
          xs={ 12 }
          md={ 12 }
          sx={ {
            padding: '20px',
            margin: '0px 0px 20px 0px',
            backgroundColor: '#fff',
            borderRadius: '10px',
          } }
        >
          <Grid
            item
            xs={ 12 }
            md={ 7 }
            sx={ {
              paddingRight: '30px',
            } }
          >
            <FormEvaluation />
          </Grid>
        </Grid>
        <Grid
          item
          xs={ 12 }
          md={ 12 }
          sx={ {
            padding: '20px',
            margin: '0px 0px 20px 0px',
            backgroundColor: '#fff',
            borderRadius: '10px',
          } }
        >

          {productReviews.length > 0 ? (

            <ReviewsSection />
          ) : (

            <Typography variant="h6">
              Nenhuma avaliação disponível
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Details;
