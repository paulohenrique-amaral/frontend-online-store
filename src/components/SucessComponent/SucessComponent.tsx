import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Context from '../../context/Context';
import { BoxStyled } from './SucessComponentStyled';
import { initialState } from '../../help/helper';

type SucessComponentProps = {
  handleClose: () => void,
};

function SucessComponent({ handleClose }: SucessComponentProps) {
  const { personData, setPersonData, clearCart } = useContext(Context);
  const navigate = useNavigate();
  return (
    <BoxStyled>
      <Typography variant="body1" textAlign="center">
        {`Parabéns ${personData.person.name}, seu pedido foi realizado com sucesso!`}
      </Typography>
      <Typography variant="body2" textAlign="center">
        {`Os detalhes da sua compra foram enviados 
        para o email ${personData.person.email}`}
      </Typography>
      <Box sx={ { margin: '50px' } }>
        <ThumbUpIcon sx={ { fontSize: 150 } } />
      </Box>
      <Button
        onClick={ () => {
          setPersonData(initialState);
          clearCart();
          navigate('/');
          handleClose();
        } }
        variant="outlined"
        color="primary"
      >
        OK
      </Button>
    </BoxStyled>
  );
}

export default SucessComponent;
