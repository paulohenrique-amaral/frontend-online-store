import Box from '@mui/joy/Box';
import CircularProgress from '@mui/joy/CircularProgress';
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';

function Loading() {
  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        <Box
          sx={ {
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
          } }
        >
          <CircularProgress variant="solid" />
        </Box>
      </CssVarsProvider>
    </StyledEngineProvider>
  );
}

export default Loading;
