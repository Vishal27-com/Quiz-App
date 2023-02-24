import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import MyModal from '../Quiz Form/MyModal'

const Topicard = ({image,topic}) => {
  const [isOpen,setIsOpen]=useState(false);
  return (
   <Box p='10px'
   bg='#fff'
   boxShadow="0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
   >
    <Flex direction={["column","column","row"]} gap='10px'>
   <Image  src={image} alt={topic} />
   <Flex direction='column' justify='space-around' gap='20px'>
   <Heading size='md'>{topic} Quiz</Heading>
   <Button variant='solid' colorScheme='blue' onClick={()=>setIsOpen(true)}>Start Quiz</Button>
   </Flex>
    </Flex>
    <MyModal type={topic} isOpen={isOpen} setIsOpen={setIsOpen} />
   </Box>
  )
}

export default Topicard