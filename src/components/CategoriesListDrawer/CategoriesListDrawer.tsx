import { useContext } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Context from '../../context/Context';
import CategoriesList from '../CategoriesList/CategoriesList';

function CategoriesListDrawer() {
  const { open, toggleDrawer } = useContext(Context);
  return (
    <StyledEngineProvider injectFirst>
      <div>
        <Drawer open={ open } onClose={ (event, reason) => toggleDrawer(false) }>
          <CategoriesList />
        </Drawer>
      </div>
    </StyledEngineProvider>
  );
}

export default CategoriesListDrawer;
