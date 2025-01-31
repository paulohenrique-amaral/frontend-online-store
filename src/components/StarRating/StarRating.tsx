import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Context from '../../context/Context';

type StarRatingProps = {
  productIdAsserted: string;
};

function StarRating({ productIdAsserted }: StarRatingProps) {
  const [rating, setRating] = useState(0);
  const { productReviews } = useContext(Context);

  const reviews = productReviews.filter((review) => review.id === productIdAsserted);

  const evaluationAverage = reviews
    .reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  useEffect(() => {
    setRating(evaluationAverage);
  }, [evaluationAverage]);

  return (
    <Box
      sx={ {
        gap: 2,
        display: 'flex',
        alignItems: 'center',
        '& > legend': { mt: 2 },
      } }
    >
      <Rating
        name="half-rating-read"
        value={ rating }
        precision={ 0.5 }
        readOnly
      />
      <Typography
        variant="body1"
      >
        {rating ? rating.toFixed(1) : 'Sem Avaliações'}
      </Typography>
    </Box>
  );
}

export default StarRating;
