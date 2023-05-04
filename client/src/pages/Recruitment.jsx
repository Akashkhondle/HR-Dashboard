import React from 'react';
import Sidebar from "../components/Sidebar";
import Box from '@mui/material/Box';
import Navbar from "../components/Navbar";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Piechart} from "../components/Piechart";
import {Progressbar} from "../components/Progressbar";
import {Barchart} from "../components/Barchart";
import {Linechart} from "../components/Linechart";

const Recruitment = () => {
  return (
    
    <>
    <Navbar />
    <Box height={30} />
     <Box sx={{ display: 'flex' }}>
     <Sidebar />
     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
        <h1>Recruitment</h1>

        <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Piechart />
            </Grid>
            <Grid item xs={6}>
              <Progressbar />
            </Grid> 
          </Grid>
          <Grid item xs={8}>
              <Stack spacing={2} direction="row">
            <Card sx={{ maxWidth: 345, minWidth: 250 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  100
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Open Positions
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, minWidth: 250 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  29 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  New Roles
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, minWidth: 250 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  4
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Roles
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, minWidth: 250 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  4
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Candidates Roles
                </Typography>
              </CardContent>
            </Card>
            </Stack>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Barchart />
            </Grid>
            <Grid item xs={6}>
              <Linechart />
            </Grid> 
          </Grid>
      </Box>
      </Box>
        
    </>

  )
}


export default Recruitment;