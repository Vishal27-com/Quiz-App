import { Box, Button, Center } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ResultTable from '../../Components/ResultTable/ResultTable';

const Result = () => {
const navigate=useNavigate();
  return (
    <Box>
       <ResultTable /> 
       <Center>
       <Button variant='solid' colorScheme='blue' onClick={()=>navigate("/dashboard")}>Go To Dashboard</Button>
       </Center>
    </Box>
  )
}

export default Result