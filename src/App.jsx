import { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function App() {
  
  
    const[userInput,setUserInput]=useState({
      name:"",
      department:"", 
      event:"",
      email:"",
      phone:"",
    })
     const alertbtn = () => {
    alert(`
      Full Name: ${userInput.name}
      Department: ${userInput.department}
      Event: ${userInput.event}
      Email: ${userInput.email}
      Phone Number: ${userInput.phone}
    `);
  }
  const clearbtn = () => {
    setUserInput({
      name: "",
      department: "", 
      event: "",
      email: "",
      phone: ""
    });
  }

  return (
    <>
      <Box
        sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',minHeight: '100vh',  backgroundColor: "black"}}
      >
        <Paper elevation={5} sx={{ p: 3, width: 600 }}>
          <h1 style={{ textAlign: "center", color:'red' }}>Sports Event Registration</h1>

          <TextField value={userInput.name} onChange={(e)=>setUserInput({...userInput,name:e.target.value})}
            fullWidth
            required
            label="Enter Full Name"
            
          />

          <TextField value={userInput.department} onChange={(e)=>setUserInput({...userInput,department:e.target.value})}
            fullWidth
            required
            label="Enter Department"
            margin="normal"
          />
          <TextField value={userInput.event} onChange={(e)=>setUserInput({...userInput,event:e.target.value})}
            fullWidth
            required
            label="Enter Event"
            margin="normal"
          />

          <TextField value={userInput.email} onChange={(e)=>setUserInput({...userInput,email:e.target.value})}
            fullWidth
            required
            label="Enter Mail ID"
            type="email"
            margin="normal"
          />

          <TextField value={userInput.phone} onChange={(e)=>setUserInput({...userInput,phone:e.target.value})}
            fullWidth
            required
            label="Enter Phone no."
            type="number"
            margin="normal"
          />
         

          <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
            <Stack direction="row" spacing={3}>
              <Button onClick={alertbtn} variant="contained" color="primary">
                Submit
              </Button>
              <Button onClick={clearbtn} variant="contained" color="warning">
                Clear
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Box>
    </>
  )
}

export default App