import React, { useState,useEffect } from 'react'
import {Box,Paper,Typography,Stack,Input,Button,InputLabel} from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err,setErr] = useState('')
    const navigate = useNavigate()
     
    const handleUser = (event) => {
        setUsername(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    
    const handlePassword = (event) => {
           setPassword(event.target.value)
    }

    const send = async() => {
     const result = await axios.post('http://localhost:4000/signup',{username:username,email:email, password:password})
     if(result.data.status===false){
      setErr("invalid user")
     }else{
           console.log(result);
     localStorage.setItem('userEmail',result.data[0].email)
     navigate('/home')
     }

    }
    useEffect(() => {
      const userEmail = localStorage.getItem('userEmail');
      console.log(userEmail);
      if(userEmail){
        navigate('/home')
      }
      
    }, []);

  return (
    <Box sx={{display:'flex',justifyContent:"center",alignItems:"center",minHeight:"100vh",backgroundColor:"coral"}}>
        <Paper sx={{ backgroundColor: "bisque", padding: "100px",borderRadius:"20%" }}>
      <Typography variant='h3' sx={{marginBottom:"30px"}}>Signup</Typography>
      <Stack width={300} spacing={1}>
        <InputLabel htmlFor="username"><b>Username</b></InputLabel>
        <Input id="username" onChange={handleUser} type="text" />

        <InputLabel htmlFor="email"><b>Email</b></InputLabel>
        <Input id="email" onChange={handleEmail} type="text" />

        <InputLabel htmlFor="password"><b>Password</b></InputLabel>
        <Input id="password" onChange={handlePassword} type="password" />

        <Button onClick={send} variant='contained'>Submit</Button>
        <Typography sx={{color:"red"}} variant='h5'>{err}</Typography>
      </Stack>
    </Paper>
  </Box>
  )
}

export default Signup