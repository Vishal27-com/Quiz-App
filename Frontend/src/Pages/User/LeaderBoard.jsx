import { Box, Button, Center } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { getLeaderBoardApi } from '../../api';
import BoardTable from '../../Components/LeaderBoardTable/BoardTable';

const LeaderBoard = () => {
   
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