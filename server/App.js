const reader = require('xlsx')
const fs = require('fs')
const file = reader.readFile('test.xlsx')


const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
  
let data = []

const sheets = file.SheetNames

for(let i = 0; i < sheets.length; i++){
	const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
	temp.forEach((res) => {
		data.push(res) 
	})
} 
// JSON.stringify(data);
//console.log(data);
app.post("/", (req, res) => {
	res.send(JSON.stringify(data));
  });
	
const PORT = process.env.PORT || 8080;
	
app.listen(PORT, console.log(`Server started on port ${PORT}`));  
  