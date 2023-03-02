import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Question from './Question'

const Admin = () => {
  return (
    <Box>
       <Sidebar />
       <Question />

    </Box>
  )
}

export default Admin