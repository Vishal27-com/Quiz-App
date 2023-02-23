import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Text,
    Select,
    Stack,
  } from '@chakra-ui/react'
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import { getQuestion } from '../../Redux/Quiz/quiz.action';
function MyModal({type,isOpen,setIsOpen}) {
    const [level,setLevel]=useState("");
    const dispatch=useDispatch()
    const [limit,setLimit]=useState(0);
    const navigate=useNavigate()
    const submitHandler= ()=>{
       dispatch(getQuestion(type.toLowerCase(),level,limit))
       navigate("/quiz");
    }
    return (
      <>  
        <Modal isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{type} Quiz Form</ModalHeader>
            <ModalBody>
                <Stack>

           <Text>Level</Text>    
    <Select name='level' onChange={(e)=>setLevel(e.target.value)}>
        <option value="">Level</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
    </Select>
           <Text>Limit</Text>    
    <Select name='limit' onChange={(e)=>setLimit(Number(e.target.value))}>
        <option value="">Limit</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
    </Select>
           <Text>Duration:{Number(limit)*30}sec</Text>    
                </Stack>
    

            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='red' mr={3} onClick={()=>setIsOpen(false)}>
                Close
              </Button>
              <Button variant='solid' colorScheme='green' onClick={submitHandler}>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default MyModal;