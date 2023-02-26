import React, { useContext } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  Text,
  Stack,
  Avatar,
  Flex
} from '@chakra-ui/react'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import Hamburger from "hamburger-react"
import { AuthContext } from '../../Context/AuthContext'
const Sidebar = () => {
      const { isOpen, onOpen, onClose } = useDisclosure()
      const btnRef = React.useRef()
      const {isAuth,setIsAuth}=useContext(AuthContext);

      return (
        <>
          <Button ref={btnRef} variant='outline' onClick={onOpen}>
           <Hamburger toggled={false} />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bg='#c8d6e5'>
              <DrawerCloseButton />
              <DrawerHeader><Logo /></DrawerHeader>
              <DrawerBody fontWeight='600'>
                <Stack spacing={5}>
                <Flex align='center' gap='10px'>
                <Avatar name={isAuth?.user?.name} />
                <Text>{isAuth?.user?.name}</Text>  
                  </Flex>  
               <Box p='10px' bg='#fff' _hover={{cursor:"pointer"}} borderRadius='15px'>
               <Link to='/admin'><Text>Add Question</Text></Link>
               </Box>
               <Box p='10px' bg='#fff' _hover={{cursor:"pointer"}} borderRadius='15px'>
               <Link to='/all-questions'><Text>All Questions</Text></Link>
               </Box>
               <Box p='10px' bg='#fff' _hover={{cursor:"pointer"}} borderRadius='15px'>
                <Link to='/create-admin'><Text>Add Admin</Text></Link>
               </Box>
               <Box p='10px' bg='#fff' _hover={{cursor:"pointer"}} borderRadius='15px'>
               <Link to='/all-user'><Text>All User</Text></Link>
               </Box>
               <Box p='10px' bg='#fff' _hover={{cursor:"pointer"}} borderRadius='15px'>
               <Text onClick={()=>setIsAuth({isAuth:false,user:{}})}>Logout</Text>
               </Box>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )
    }


export default Sidebar