import { Box, Button, Center } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import BoardTable from '../../Components/LeaderBoardTable/BoardTable';

const LeaderBoard = () => {
   const navigate=useNavigate();
  return (
    <Box>
     <BoardTable />
     <Center>
       <Button variant='solid' colorScheme='blue' onClick={()=>navigate("/dashboard")}>Go To Dashboard</Button>
       </Center>
    </Box>
  )
}

export default LeaderBoard