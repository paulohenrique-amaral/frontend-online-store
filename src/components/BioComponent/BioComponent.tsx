import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import avatar from '../../assets/avatar.png';

function BioComponent() {
  const navigate = useNavigate();
  const myGitHub = 'https://github.com/paulohenrique-amaral';
  const myLinkedIn = 'www.linkedin.com/in/paulopp-amaral';
  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        <Card
          sx={ {
            width: 420,
            maxWidth: '100%',
            boxShadow: 'lg',
          } }
        >
          <CardContent sx={ { alignItems: 'center', textAlign: 'center' } }>
            <Avatar src={ avatar } sx={ { '--Avatar-size': '5rem' } } />
            <Chip
              size="sm"
              variant="soft"
              color="primary"
              sx={ {
                mt: -1,
                mb: 1,
                border: '3px solid',
                borderColor: 'background.surface',
              } }
            >
              PRO
            </Chip>
            <Typography level="title-lg">
              Paulo Amaral
            </Typography>
            <Typography level="body-sm" sx={ { maxWidth: '24ch' } }>
              Hello, this project was developed and created by me !!!
            </Typography>
            <Chip
              size="sm"
              variant="solid"
              color="primary"
              sx={ {
                border: '3px solid',
                borderColor: 'background.surface',
              } }
            >
              paulopp.amaral@gmail.com
            </Chip>
            <Box
              sx={ {
                display: 'flex',
                gap: 2,
                mt: 2,
                '& > button': { borderRadius: '2rem' },
              } }
            >
              <IconButton
                size="md"
                variant="plain"
                color="neutral"
                onClick={ () => window.open(myGitHub) }
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                size="md"
                variant="plain"
                color="neutral"
                onClick={ () => window.open(myGitHub) }
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                size="md"
                variant="plain"
                color="neutral"
                onClick={ () => window.open(myLinkedIn) }
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </CardContent>
          <CardOverflow sx={ { bgcolor: 'background.level1' } }>
            <CardActions buttonFlex="1">
              {/* <ButtonGroup variant="outlined" sx={ { bgcolor: 'background.surface' } }>
                <Button>Message</Button>
                <Button>Connect</Button>
              </ButtonGroup> */}
            </CardActions>
          </CardOverflow>
        </Card>
      </CssVarsProvider>
    </StyledEngineProvider>
  );
}

export default BioComponent;
