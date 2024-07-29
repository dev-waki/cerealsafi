import  React,{useState} from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import EggIcon from '@mui/icons-material/Egg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import TocIcon from '@mui/icons-material/Toc';
import { Dialer } from './speeddial';
import { Accordion,Tooltip,Drawer,Divider,ListItemText,List,ListItem,ListItemButton,AccordionSummary,AccordionDetails, ListItemIcon } from '@mui/material';
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),

  '@media all': {
    minHeight: 128,
  },
}));


function Sidebar(){
return(
  <Box>
<Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              >
              Store
            </AccordionSummary>
              <AccordionDetails>
                  <List>
                  <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                  <AddIcon/>
                    </ListItemIcon>
                  <ListItemText primary='Add Product'/>
                  </ListItemButton>
                   </ListItem>
                  </List>

                  <List>
                  <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                  <DeleteIcon/>
                    </ListItemIcon>
                  <ListItemText primary='Delete Product'/>
                  </ListItemButton>
                   </ListItem>
                   </List>

              </AccordionDetails>

</Accordion>

<Divider/>
<Accordion>
<AccordionSummary
expandIcon={<ExpandMoreIcon />}
aria-controls="panel1-content"
id="panel1-header"
>
Payments
</AccordionSummary>
<AccordionDetails>
<List>
<ListItem>
<ListItemButton>
  <ListItemIcon>
<CurrencyExchangeIcon/>
  </ListItemIcon>
<ListItemText primary='Request payment'/>
</ListItemButton>

</ListItem>

</List>
<List>
<ListItem>
<ListItemButton>
  <ListItemIcon>
<TocIcon/>
  </ListItemIcon>
<ListItemText primary='View transactions'/>
</ListItemButton>

</ListItem>

</List>

</AccordionDetails>

</Accordion>

  </Box>
)


}
export default function Dashboard() {
  const [menu,setMenu] = useState(false)
  return (
    <Box sx={{ width:"100%" }}>
      <AppBar position="absolute">
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
           <Tooltip title='Menu'>
           <i onClick={()=>setMenu(true)}>
           <MenuIcon />
           </i>
           </Tooltip>
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="p"
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
          >
          Cereals <Typography component="strong" sx={{color:"rgb(253,140,0)"}}>Safi</Typography>
          </Typography>
          <IconButton size="large" aria-label="search" color="inherit">
            <Tooltip title='Search item'>
            <SearchIcon />
            </Tooltip>
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
         <Tooltip title='More'>
         <Dialer />
         </Tooltip>
          </IconButton>
        </StyledToolbar>
   
      </AppBar>

      <Drawer open={menu} onClose={()=>setMenu(false)}>
        <Sidebar/>
      </Drawer>
    </Box>
  );
}
