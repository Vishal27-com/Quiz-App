import { Box, Button, Center, Flex, Select, Stack, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getQuestionByIdApi, updateQuestionApi } from "../../api";
import MyAlert from "../../Components/MyAlert/MyAlert";
import Sidebar from "../../Components/Sidebar/Sidebar";
const init = {
  type: "",
  level: "",
  question: "",
  answer: "",
  option: [],
};
const QuestionEdit = () => {
  const toast=useToast();
  const [formData, setFormData] = useState(init);
  const params=useParams()
  const navigate=useNavigate()
  const [loading,setLoading]=useState(false);
  const updateHandler = async () => {
    try {
      setLoading(true);
      const res=await updateQuestionApi(params.id,formData);
      setLoading(false);
      MyAlert(res.data.message,"success",toast);
    } catch (error) {         
      setLoading(false);
    MyAlert(error.response.data.message,'error',toast)
  }
  };
  const getQuestion=async ()=>{
      const res=await getQuestionByIdApi(params.id);
      setFormData(res.data.message);       
  }
  const changeHandler = (e) => {
    const {name,value}=e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  };
  const optionHandler=(id,e)=>{
  setFormData({
    ...formData,
    option:formData.option.map((item,ind)=>{
      if(ind===id){
        return e.target.value;
      }
      return item;
    })
  })
  }
  useEffect(() => {
    getQuestion()
  }, []);

  return (
    <Box fontWeight='600' w='50%' m='auto' bg='#fff' p='10px'
        boxShadow='0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
        borderRadius='10px'
        >
      <Stack>
         <Center>
        <Text>Update Question</Text>    
        </Center>   
        <Text>Type</Text>    
    <Select name='type'  value={formData.type} onChange={changeHandler}>
        <option value="">Type</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">Javascript</option>
    </Select>
        <Text>Level</Text>    
    <Select name='level' value={formData.level} onChange={changeHandler}>
        <option value="">Level</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
    </Select>
        <Text>Question</Text>    
    <textarea name='question' value={formData.question} style={{display:"block",width:'100%',padding:"10px"}} onChange={changeHandler}></textarea>
        <Text>Answer</Text>    
    <textarea name='answer' value={formData.answer} style={{display:"block",width:'100%',padding:"10px"}} onChange={changeHandler}></textarea>
        {
          formData.option.map((item,ind)=>
          <Box key={ind}>
          <Text>Options-{ind+1}</Text>    
          <textarea name='option' value={item} style={{display:"block",width:'100%',padding:"10px"}} onChange={(e)=>optionHandler(ind,e)}></textarea>
          </Box>
          
          )
    }
   </Stack> 
    <Button isLoading={loading} variant='solid' mt='15px' colorScheme='yellow' onClick={updateHandler}>Update</Button>  
    <Button variant='solid' mt='15px' ml='5px' colorScheme='blue' onClick={()=>navigate("/all-questions")}>Go Back</Button>  
    </Box>
  );
};

export default QuestionEdit;
