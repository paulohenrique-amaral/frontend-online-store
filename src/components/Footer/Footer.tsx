import { Grid, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { FooterStyled } from './FooterStyled';

function Footer() {
  const navigate = useNavigate();
  return (
    <FooterStyled>
      <Grid container>
        <Grid item xs={ 12 } md={ 12 }>
          <Box
            sx={ {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& > *': {
                m: 1,
              },
            } }
          >
            <ButtonGroup variant="text" aria-label="Footer button group">
              <Button
                onClick={ () => navigate('/') }
              >
                Home
              </Button>
              <Button
                onClick={ () => navigate('/terms') }
              >
                Termos e Condições
              </Button>
              <Button
                onClick={ () => navigate('/contato') }
              >
                Contato
              </Button>
            </ButtonGroup>
          </Box>
        </Grid>
        <Grid
          item
          xs={ 12 }
          md={ 12 }
          sx={ {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          } }
        >
          <Typography
            variant="caption"
          >
            Copyright © 1999-2024 bazarStore LTDA.
          </Typography>
          <Typography variant="caption">
            CNPJ n.º 03.000.000/0001-00 / - empresa do grupo empresa
          </Typography>
        </Grid>
      </Grid>
    </FooterStyled>
  );
}

export default Footer;
