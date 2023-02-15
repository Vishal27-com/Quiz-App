import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Topicard = ({image,topic}) => {
  return (
   <Box p='10px'
   bg='#fff'
   boxShadow="0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
   >
    <Flex gap='10px'>
   <Image src={image} alt={topic} />
   <Flex direction='column' justify='space-around'>
   <Heading size='md'>{topic} Quiz</Heading>
   <Button variant='solid' colorScheme='blue'>Start Quiz</Button>
   </Flex>
    </Flex>
   </Box>
  )
}

export default Topicard