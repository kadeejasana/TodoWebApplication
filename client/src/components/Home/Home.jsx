import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    console.log(userEmail);
    if(!userEmail){
      navigate('/login')
    }else{
      setName(userEmail);
    }
    
  }, []);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('userEmail'); // Change from clear to removeItem
    navigate('/login');
  };

  return (
    <>
      {/* Navbar */}
      <Box sx={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "10vh", backgroundColor: "#073971",display:"flex",alignItems:"center",justifyContent:"end",marginRight:"15px" }}>
      <Button sx={{backgroundColor:"ButtonFace",color:"black"}} variant='contained' onClick={logout}>Logout</Button>
      </Box>

      {/* Main content */}
      <Box sx={{ display: "flex", justifyContent: "center", backgroundColor: "lightsalmon", alignItems: "center", minHeight: "100vh", marginTop: "5vh" }}>
        <Card sx={{ width: "20vw", height: "40vh", backgroundColor: "cornflowerblue" }}>
          <CardContent>
            
            <Typography variant='h4'><b>Welcome Home</b></Typography>
            <Typography variant='h5' component="div"><i>{name}</i></Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Home;
