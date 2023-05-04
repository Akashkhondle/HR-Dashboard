import React from "react";
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Performance from "./pages/Performance";
import Recruitment from "./pages/Recruitment";
import Payroll from "./pages/Payroll";
import Attendance from "./pages/Attendance";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {FetchData} from "./FetchData";

function App(){
    return (
        <>
         <BrowserRouter>
            <Routes>
                <Route path="/" exact element = {<Performance />}></Route>
                <Route path="/recruitment" exact element = {<Recruitment />}></Route>
                <Route path="/payroll" exact element = {<Payroll />}></Route>
                <Route path="/attendance" exact element = {<Attendance />}></Route>
            </Routes>
        </BrowserRouter>
        </>
        
    );
}

export default App;