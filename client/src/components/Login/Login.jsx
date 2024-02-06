import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {Box,Paper,Typography,Stack,Input,Button,InputLabel} from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Login = () => {
   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const [err,setErr] = useState('')
  const handlePassword = (event) => {
    setPassword(event.target.value)
  }
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    console.log(userEmail);
    if(userEmail){
      navigate('/home')
    }
    
  }, []);

   const navigate = useNavigate()
   
   const send = async() => {
       
     const result = await axios.post('http://localhost:4000/login',{ email,password})
     if(result.data.status==false){
       setErr('invalid user')
     }else{
        localStorage.setItem('userEmail',result.data.email)
        navigate('/home')
     }
    
   }


  return (
   <Box sx={{display:'flex',justifyContent:"center",alignItems:"center",minHeight:"100vh",backgroundColor:"darkgoldenrod"}}>
     <Paper sx={{backgroundColor:"skyblue",padding:"100px",borderRadius:"20%"}}>
     <Typography variant='h3' sx={{marginBottom:"30px"}}>Login</Typography>
         <Stack width={300} spacing={1} >
         <InputLabel htmlFor="email"><b>Username</b></InputLabel>
           <Input id='email' onChange={handleEmail} type="text" />
           <InputLabel htmlFor="password"><b>Password</b></InputLabel>
           <Input id='password' onChange={handlePassword} type="password" />
           <Button onClick={send} variant='contained'>Submit</Button>
           <Typography sx={{color:"red"}} variant='h5'>{err}</Typography>
         </Stack>
     </Paper>
   </Box>
  )
}

export default Login