// import { useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import Context from '../../context/Context';
import { BoxStyled } from './SucessComponentStyled';

type SucessComponentProps = {
  handleClose: () => void,
};

function SucessComponent({ handleClose }: SucessComponentProps) {
  // const { personData, setPersonData, setEtapaAtual } = useContext(Context);
  return (
    <BoxStyled>
      <Typography variant="body1">
        Parabéns seu pedido foi concluído com sucesso!
      </Typography>
      <Box sx={ { margin: '50px' } }>
        <ThumbUpIcon sx={ { fontSize: 150 } } />
      </Box>
      <Button
        onClick={ () => handleClose() }
        variant="outlined"
        color="primary"
      >
        OK
      </Button>
    </BoxStyled>
  );
}

export default SucessComponent;
