import { Avatar, Box, Center, Flex, Img, Input, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { getUserApi, updateUserApi } from '../../api'
import HistoryTable from '../../Components/HistoryTable/HistoryTable'
import { AuthContext } from '../../Context/AuthContext'

const Profile = () => {
const {isAuth}=useContext(AuthContext);
  return (
    <Box>
    <Flex  direction='column' justify='center' align='center' h='200px'>
      <Center>
       <Avatar h='100px' w='100px' position='relative' name={isAuth?.user?.name} />
       <Input type='file' position='absolute' h='100px' w='100px' cursor='pointer' opacity='0'  />
      </Center>
        <Text fontSize='25px' fontWeight='600'>{isAuth?.user?.name}</Text>
        <Text fontSize='25px' fontWeight='600'>{isAuth?.user?.email}</Text>
    </Flex>
     <HistoryTable />
    </Box>
  )
}

export default Profile