import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({total,page,pageHandler}) => {
    const arr=new Array(total).fill(0);
  return (
    <Flex gap='5px'>
     {
        arr.map((item,ind)=>
        <Button key={ind+1} 
        variant={page===(ind+1)?"solid":"outline"}
        isDisabled={page===ind+1} 
        colorScheme='blue' onClick={()=>pageHandler(ind+1)}>{ind+1}</Button>
        )
     }
    </Flex>
  )
}

export default Pagination