import { Box } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';

const Result = () => {
    const {result } = useSelector((store) => store.quiz);
    console.log(result);
  return (
    <Box>
        
    </Box>
  )
}

export default Result