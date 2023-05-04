import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppStore } from "../appStore";

const AppBar = styled(MuiAppBar, {
  })(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
  }));

export default function Navbar() {
    const updateOpen = useAppStore((state) => state.updateOpen);
    const dopen = useAppStore((state) => state.dopen);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => {updateOpen(!dopen)}}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            HR Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}