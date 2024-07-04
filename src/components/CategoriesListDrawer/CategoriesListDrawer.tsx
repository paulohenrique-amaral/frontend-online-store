import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

type CategoriesListDrawerProps = {
  children: React.ReactNode;
  open: boolean;
  toggleDrawer: (newOpen: boolean) => void;
};

function CategoriesListDrawer({
  children,
  open,
  toggleDrawer,
}: CategoriesListDrawerProps) {
  // const [open, setOpen] = React.useState(false);

  // const toggleDrawer = (newOpen: boolean) => () => {
  //   setOpen(newOpen);
  // };

  // const DrawerList = (
  //   <Box sx={ { width: 250 } } role="presentation" onClick={ toggleDrawer(false) }>
  //     <List>
  //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //         <ListItem key={ text } disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={ text } />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //         <ListItem key={ text } disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={ text } />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  return (
    <StyledEngineProvider injectFirst>
      <div>
        {/* <Button onClick={ toggleDrawer(true) }>Open drawer</Button> */}
        <Drawer open={ open } onClose={ (event, reason) => toggleDrawer(false) }>
          {children}
        </Drawer>
      </div>
    </StyledEngineProvider>
  );
}

export default CategoriesListDrawer;
