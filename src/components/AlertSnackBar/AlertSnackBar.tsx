import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import Snackbar from '@mui/joy/Snackbar';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

type AlertSnackBarProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  message: string;
};

function AlertSnackBar({ open, setOpen, message }: AlertSnackBarProps) {
  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        <Snackbar
          autoHideDuration={ 5000 }
          variant="solid"
          color="primary"
          size="lg"
          invertedColors
          open={ open }
          onClose={ () => setOpen(false) }
          anchorOrigin={ { vertical: 'top', horizontal: 'center' } }
          sx={ (theme) => ({
            background: `linear-gradient(45deg,
              ${theme.palette.primary[600]} 30%,
              ${theme.palette.primary[500]} 90%})`,
            maxWidth: 360,
          }) }
        >
          <div>
            <Typography level="title-lg">Opa !!</Typography>
            <Typography sx={ { mt: 1, mb: 2 } }>
              { message }
            </Typography>
            <Stack direction="row" spacing={ 1 }>
              <Button
                variant="solid"
                color="primary"
                onClick={ () => setOpen(false) }
              >
                Ok, Entendi!
              </Button>
            </Stack>
          </div>
        </Snackbar>
      </CssVarsProvider>
    </StyledEngineProvider>
  );
}

export default AlertSnackBar;
