import React, {useEffect,useState} from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import {Barchart} from "../components/Barchart";
import {Piechart} from "../components/Piechart";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DynamicTable from "../components/DynamicTable";
import FetchData from "../FetchData";

const Performance = () => {
const [salary, setSalary] = useState([]);
const [dept, setDept] = useState([]);
const [headCount, setHeadCount] = useState(0);
const [avgExp, setAvgExp] = useState(0);
const [avgAge,setAvgAge] = useState(0);

useEffect(() =>{
  const getData = async () => {
    const url = "http://localhost:8080";

    try{
      const response = await fetch(url,{method:'POST'});
      const data = await response.json();

      console.log(data);


     let valueArray = data.map((item )=> item.DEPARTMENT);
     let setOfValue = new Set(valueArray);
     const uniqueValues = [...setOfValue];
       console.log(uniqueValues);

        // Parse the JSON data into a JavaScript object
const employees = data;
setHeadCount(Object.keys(employees).length);

let totalExp = 0;
for(let i=0; i < data.length;i++)
{
  totalExp += data[i].EXPERIENCE;
}
const avgExpp = totalExp / data.length;
setAvgExp(avgExpp);

let totalAge = 0;
for(let j=0; j < data.length;j++)
{
  totalAge += data[j].AGE;
}
const avgAgee = totalAge / data.length;
setAvgAge(avgAgee);

// Create an object to store the total salary and employee count for each department
const deptStats = {};

// Loop through each employee record and accumulate the salary and employee count for each department
for (const employee of employees) {
  const deptt = employee.DEPARTMENT;
  if (!deptStats[deptt]) {
    deptStats[deptt] = { totalSalary: 0, employeeCount: 0 };
  }
  deptStats[deptt].totalSalary += employee.SALARY;
  deptStats[deptt].employeeCount++;
}
const salaryarr =[];
// Calculate the average salary for each department and display it in the console
for (const deptt in deptStats) {
  const avgSalary = deptStats[deptt].totalSalary / deptStats[deptt].employeeCount;
  // console.log(`${deptt}: ${avgSalary}`);
  salaryarr.push(Math.round(avgSalary));

//   for(var i = 0; i < salaryarr.length; i++){
//  console.log(salaryarr[i]);
// }
}

      setSalary(salaryarr);
      setDept(uniqueValues);
    }catch (error){
      console.log(error);
    }
  };
  getData();
}, []);

const series = [
  {
    name : "salary",
    data : salary
  }
];

const options = {
  chart: {
    id: "basic-bar"
  },
  xaxis: {
    categories: dept
  },
  title:{
    text:'Distribution of salries by Department'
}
};



  return (
    
    <>
    {/* {console.log(salary)}
    {console.log(dept)} */}
    {/* {console.log(avgAge)} */}
    <Navbar />
    <Box height={70} />
     <Box sx={{ display: 'flex' }}>
     <Sidebar />
     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
        <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
            <Card sx={{ maxWidth: 345, minWidth: 250 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {headCount}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Head Count
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, minWidth: 250 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {Math.round(avgAge)} Year's
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Average Age
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, minWidth: 250 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {avgExp.toFixed(2)} Years
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Average Experience
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, minWidth: 250 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  $ 50000
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 Total Bonus
                </Typography>
              </CardContent>
            </Card>
            </Stack>
          </Grid>
          <Grid item xs={4}>

          </Grid>
          
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Barchart 
              series = {series}
              options = {options}
              />
            </Grid>
            <Grid item xs={6}>
              <Piechart />
            </Grid>
           
          </Grid>
          <DynamicTable />
          <FetchData />
      </Box>

     </Box>
     
        
    </>

  )
}

export default Performance;
// _.keys(_.countBy(data, function(data) { return data.name; }));