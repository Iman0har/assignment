
import '../App.css';
import * as React from 'react';



import TextField from '@mui/material/TextField';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SendIcon from '@mui/icons-material/Send';

export const Adduser=()=> {
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
  const [name,setName]= React.useState("")
  const [email,setEmail]= React.useState("")
  const [number,setNumber] = React.useState("")
  const [mydate,setmyDate]= React.useState("")
  const [gender,setGender]= React.useState("female")
 const[hobbies,setHobbies]= React.useState([])
const [employees,setEmployees] = React.useState([])
 

//This is to show the employees data when page gets rendered
 React.useEffect(()=>{
    getemployees()
  
},[])

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }
  


//This is fetching data of employees from json server 

     const getemployees =()=>{

    fetch("http://localhost:3001/Employees").then((d)=> d.json()).then((res)=> {setEmployees(res) 
    }
    )
       
    };







  const handleChange = (newValue) => {
    setValue(newValue);
    setmyDate(newValue)
  };
  const [checked, setChecked] = React.useState([true, false]);
 console.log(name,email,number,value,gender,hobbies)


  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
    
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };
  const handleChange4 = (event) => {
    setChecked([checked[1], event.target.checked]);
  };
  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="travelling"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="music"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
     
    </Box>
  );



  return (
    <div className='maindiv'>
    {/* This is the table taken from material-ui and here the data of the employees will be displayed*/}
 {employees.length !=0 ?
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Mobile number</TableCell>
            <TableCell align="right">gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((e,id) => (
         
            <TableRow
              key={e.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {e.id}
              </TableCell>
              <TableCell align="right">{e.Name}</TableCell>
              <TableCell align="right">{e.Email}</TableCell>
              <TableCell align="right">{e.MobileNumber}</TableCell>
              <TableCell align="right">{e.Gender}</TableCell>
              <TableCell align="right">

                  {/* This for deleting individual data of a employee by clicking on delete button */}

                  <Button variant="contained"    onClick={()=>{

                 
                        fetch(`http://localhost:3001/Employees/${e.id}`, { method: 'DELETE',
headers:{
    "content-type":"application/json"
}
                         } ).then(getemployees)
                       }}>Delete</Button>
               
              </TableCell>
            </TableRow>
        )) }
        </TableBody>
      </Table>
    </TableContainer>
    </div> : ""}


   


     <div> <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-aligned"
        label="Name"
        onChange={(e)=>{
         setName(e.target.value)
        }}
      />
      <TextField
        helperText="Please enter your email "
        id="demo-helper-text-aligned-no-helper"
        label="Email"
        type="email"
        onChange={(e)=>{
          setEmail(e.target.value)
         }}
      />
       <TextField
        helperText="Please enter your mobilenumber "
        id="demo-helper-text-aligned-no-helper"
        label="Mobile number"
        type="number"
        onChange={(e)=>{
          setNumber(e.target.value)
         }}
      />
    </Box></div>


      <div>  <LocalizationProvider dateAdapter={AdapterDateFns}>
     
     <DesktopDatePicker
       label="Date desktop"
       inputFormat="MM/dd/yyyy"
       value={value}
       onChange={handleChange}
       renderInput={(params) => <TextField {...params} />}
     />
 
  
          </LocalizationProvider>
 
     </div>
          
     <div>
     <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      onChange={(e)=>{setGender(e.target.value)}}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female"  />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    
       </div> 
     <div>
     <FormControlLabel
        label="All interests"
        control={
          <Checkbox 
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1 } 
          />
        }
      />
      {children}
    
     </div>
    <div>
    <Button variant="contained" endIcon={<SendIcon />} onClick={
        ()=>{
            const  data= {Name:name,
            Email:email,
            MobileNumber:number,
            Gender:gender}

            fetch("http://localhost:3001/Employees",{
                method:"POST",
                body:JSON.stringify(data),
                headers:{
                    "content-type":"application/json"
                }
      
              }).getemployees()
      
         }
    }>
        Add
      </Button>
    </div>
   </div>
    
  );
}


