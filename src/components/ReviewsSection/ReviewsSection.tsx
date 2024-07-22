import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import Context from '../../context/Context';

function ReviewsSection() {
  const [value, setValue] = useState<number | null>(2);
  const { productId } = useParams<string>();
  const productIdAsserted = productId!;

  const { productReviews } = useContext(Context);

  const reviews = productReviews.filter((review) => review.id === productIdAsserted);

  return (
    <Box
      sx={ {
        '& > legend': { mt: 2 },
      } }
    >
      <Typography variant="h6">
        Opiniões sobre o produto
      </Typography>
      { reviews.map((review) => (
        <Box
          key={ review.email }
          sx={ {
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            padding: '10px',
            borderBottom: '1px solid #ccc',
            borderRadius: '5px',
          } }
        >
          <Typography variant="body2">
            Usuário:
            {' '}
            { review.email }
          </Typography>
          <Typography variant="body2">
            Comentário:
            {' '}
            { review.evaluation }
          </Typography>
          <Rating name="read-only" value={ review.rating } readOnly />
        </Box>
      ))}
    </Box>
  );
}

export default ReviewsSection;
