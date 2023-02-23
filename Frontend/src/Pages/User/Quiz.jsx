import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Timer from "../../Components/Timer/Timer";
import {useNavigate} from "react-router-dom"
import { resultMaker } from "../../Components/ResultMaker/resultMaker";
import { QUIZ_RESULT } from "../../Redux/Quiz/quiz.type";
const Quiz = () => {
  const { loading, error, question } = useSelector((store) => store.quiz);
  const [index,setIndex]=useState(0);
  const [answer,setAnswer]=useState([]);
  const [choosen,setChoosen]=useState("");
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const prevHandler=()=>{
    answer.pop();
    setAnswer(answer);
    setIndex(index=>index-1)
  }
  const nextHandler=()=>{
    setAnswer([...answer,choosen])
    setChoosen("");
    setIndex(index=>index+1)
  }
  const submitHandler=()=>{
    setAnswer([...answer,choosen])
   let result=resultMaker(question,answer)
   dispatch({type:QUIZ_RESULT,payload:result})
   navigate("/result")
  }
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Something went wrong</h1>
      ) : (
        <Box fontWeight="600">
          <Center
            position="absolute"
            top="10px"
            right="10px"
            bg="#fff"
            h="40px"
            w="150px"
          >
            <Timer stopQuiz={submitHandler} duration={question?.length} />
          </Center>
          <Flex justify="center" align="center" h="100vh" >
            <Stack
              w='40%'
              bg='#fff'
              boxShadow="0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
              p="20px"
              spacing={5}
              >
                {
              <Text fontSize="20px" mb="20px">
              {index+1}.{question[index].question}
              </Text>   
                }
              <RadioGroup>
                <Stack>
                    {
                     question[index]?.option?.map((item)=>
                     <Radio value={item} onChange={(e)=>setChoosen(e.target.value)} colorScheme='green' key={item}>{item}</Radio>
                     )   
                    }
                </Stack>
              </RadioGroup>
              <Flex justify='space-between'>
              <Button variant='solid' colorScheme='red' isDisabled={index===0} onClick={prevHandler}>&larr; Prev</Button>
              {
                question.length-1===index?
                <Button variant='solid' colorScheme='green'  onClick={submitHandler}>Submit</Button>:
                <Button variant='solid' colorScheme='yellow' isDisabled={index===question.length-1}  onClick={nextHandler}>Next &rarr;</Button>
              }
              </Flex>
            </Stack>
          </Flex>
        </Box>
      )}
    </div>
  );
};

export default Quiz;
