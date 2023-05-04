import React,{useState, useEffect} from 'react';
import Sidebar from "../components/Sidebar";
import Box from '@mui/material/Box';
import Navbar from "../components/Navbar";
import Chart from "react-apexcharts";
import Barchart from "../components/Barchart";
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Semipie } from '../components/Semipie';
import { Piechart } from '../components/Piechart';
import { Linechart } from '../components/Linechart';


const Attendance = () => {

  const [abm, setAbm] = useState();

  useEffect(() =>{
    const getData = async () => {
      const url = "http://localhost:8080";
  
      try{
        const response = await fetch(url,{method:'POST'});
        const data = await response.json();
  
        console.log(data);
        const abmArr = [];
        for(let j=0; j < 12;j++){
          abmArr.push(data[j].ABSENCES_BY_MONTH);
        }
        console.log(abmArr);
        setAbm(abmArr);

      }catch(error){
        console.log(error);
      }

    };
    getData();
  }, [])

  const series = [
    {
      name : "Months",
      data : abm
    }
  ];
  
  const options = {
    chart: {
      id: "line"
    },
    xaxis: {
      categories: abm
    },
    title:{
      text:'Abesenties By Month'
  }
  };
  
  
  return (
    
    <>
        <Navbar />
      <Box height={30} />
     <Box sx={{ display: 'flex' }}>
     <Sidebar />
     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
        <h1>Attendance</h1>
        <Grid item xs={8}>
              <Stack spacing={2} direction="row">
            <Card sx={{ maxWidth: 345, minWidth: 250 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  100
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Employees
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, minWidth: 250 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  29 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 Absences Days
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, minWidth: 250 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  4
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Approved Leaves
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, minWidth: 250 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  4
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Unapproved Leaves
                </Typography>
              </CardContent>
            </Card>
            </Stack>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Semipie />
            </Grid>
            <Grid item xs={6}>
            <Linechart 
                  series = {series}
                  options = {options}
              />
            </Grid> 
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              
            </Grid>
           
          </Grid>
         
       
      </Box>

     </Box>
        
    </>

  )
}

export default Attendance;