import PriceChangeIcon from '@mui/icons-material/PriceChange';
import { BoxStyled } from './CheckoutAnimationStyled';

function CheckoutAnimation() {
  return (
    <BoxStyled>
      <PriceChangeIcon sx={ { fontSize: 150 } } />
    </BoxStyled>
  );
}

export default CheckoutAnimation;
