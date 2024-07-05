import * as React from 'react';
import { useState } from 'react';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';
import Snackbar from '@mui/joy/Snackbar';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';

function AlertSnackBar() {
  const [open, setOpen] = useState(false);

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
            background: `linear-gradient(45deg, ${theme.palette.primary[600]} 30%, ${theme.palette.primary[500]} 90%})`,
            maxWidth: 360,
          }) }
        >
          <div>
            <Typography level="title-lg">Hey, Wait!!</Typography>
            <Typography sx={ { mt: 1, mb: 2 } }>
              Are you sure, you want to leave this page without confirming your order?
            </Typography>
            <Stack direction="row" spacing={ 1 }>
              <Button variant="solid" color="primary" onClick={ () => setOpen(false) }>
                Yes, Maybe later
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={ () => setOpen(false) }
              >
                No, I want to stay
              </Button>
            </Stack>
          </div>
        </Snackbar>
      </CssVarsProvider>
    </StyledEngineProvider>
}

export default AlertSnackBar;