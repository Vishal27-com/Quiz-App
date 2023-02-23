import { Box, Button, Center, Flex, Select, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { postQuestionApi } from '../../api';
const init={
    type:"",
    level:"",
    question:"",
    answer:"",
    option:[]
}
const Question = () => {
    const [form,setForm]=useState(init);
    const [option,setOption]=useState("");
    const changeHandler=(e)=>{
    const {name,value}=e.target;
    setForm({
        ...form,
        [name]:value
    })
    }
    const optionHandler=()=>{
            setForm({
                ...form,
                option:[...form.option,option]
            })
    }
    const submitHandler=async ()=>{
      
      try{
          const res=await postQuestionApi(form);
          alert(res.data.message);
      }catch(error){
        alert(error.response.data.message)
      }

    }
    return (
        <Box fontWeight='600' w='50%' m='auto' bg='#fff' p='10px'>
        <Stack>
         <Center>
        <Text>Add Question</Text>    
        </Center>   
        <Text>Type</Text>    
    <Select name='type'  onChange={changeHandler}>
        <option value="">Type</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">Javascript</option>
    </Select>
        <Text>Level</Text>    
    <Select name='level' onChange={changeHandler}>
        <option value="">Level</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
    </Select>
        <Text>Question</Text>    
    <textarea name='question' style={{display:"block",width:'100%'}} onChange={changeHandler}></textarea>
        <Text>Answer</Text>    
    <textarea name='answer' style={{display:"block",width:'100%'}} onChange={changeHandler}></textarea>
        <Text>Options</Text>    
    <textarea name='option' style={{display:"block",width:'100%'}} onChange={(e)=>setOption(e.target.value)}></textarea>
    <Flex justify='flex-end'>
    <Button variant='solid' mt='15px' colorScheme='green' disabled={form.option.length===3} onClick={optionHandler}>Add Options</Button>  
    </Flex>
    <Button variant='solid' mt='15px' colorScheme='blue' onClick={submitHandler}>Submit</Button>  
   </Stack>
    </Box>
  )
}

export default Question