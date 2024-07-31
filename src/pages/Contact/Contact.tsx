import { Container, Grid, Box } from '@mui/material';
import BioComponent from '../../components/BioComponent/BioComponent';
import BioSlider from '../../components/BioSlider/BioSlider';

function Contact() {
  return (
    <Container maxWidth="sm">
      <Grid container>
        <Grid
          item
          xs={ 12 }
          md={ 12 }
          sx={ {
            display: 'flex',
            justifyContent: 'center',
            // alignItems: 'center',
            height: '50vh',
          } }
        >
          <Box>
            <BioComponent />
          </Box>
        </Grid>
        <Grid
          item
          xs={ 12 }
          md={ 12 }
          sx={ {
            display: 'flex',
            justifyContent: 'center',
            height: '30vh',
            marginBottom: '3rem',
          } }
        >
          <BioSlider />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
