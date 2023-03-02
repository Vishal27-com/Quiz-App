import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import {Box, Button, Flex, HStack, Img, Select, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useToast} from "@chakra-ui/react";
import { deleteQuestionApi, getAllQuestionApi } from '../../api';
import Pagination from '../../Components/Pagination/Pagination';
import MyAlert from '../../Components/MyAlert/MyAlert';
import { Link } from 'react-router-dom';
import QuestionEdit from './QuestionEdit';
const AllQuestions = () => {
  const [page,setPage]=useState(1);
  const [sort,setSort]=useState("asc");
  const [type,setType]=useState("all");
  const [level,setLevel]=useState("all");
  const [limit,setLimit]=useState(10);
  const [total,setTotal]=useState(0);
  const [data,setData]=useState([]);
  const toast=useToast();
  const getAllQuestion=async (type,level,sort,page,limit)=>{
   const res=await getAllQuestionApi(type,level,sort,page,limit);
   setData(res.data.message);
   setTotal(res.data.count);
  }
  const typeHandler=(e)=>{
    const {value}=e.target;
    setType(value)
    getAllQuestion(value,level,sort,page,limit)
  }
  const levelHandler=(e)=>{
    const {value}=e.target;
    setLevel(value)
    getAllQuestion(type,value,sort,page,limit)
  }
  const sortHandler=(e)=>{
    const {value}=e.target;
    setSort(value)
    getAllQuestion(type,level,value,page,limit)
  }
  const pageHandler=(p)=>{
    setPage(p)
    getAllQuestion(type,level,sort,p,limit)

  }
  const limitHandler=(e)=>{
    const {value}=e.target;
    setLimit(value)
    getAllQuestion(type,level,sort,page,value)
  }
  const deleteHandler=async (id)=>{
  await deleteQuestionApi(id);
  MyAlert("Deleted","error",toast);
  getAllQuestion();
  }

  useEffect(()=>{
    getAllQuestion(type,level,sort,page,limit)
  },[])
  return (
    <Box>
      <Sidebar />
      <Flex  direction={["row"]} wrap='wrap' gap='15px' justify='center' mt='20px'>
        <Select onChange={typeHandler} w='100px' bg='#fff'>
          <option value="all">All</option>
          <option value="html">HTML Only</option>
          <option value="css">CSS Only</option>
        </Select>
        <Select onChange={levelHandler} w='100px' bg='#fff'>
          <option value="all">All</option>
          <option value="hard">Hard</option>
          <option value="medium">Medium</option>
          <option value="easy">Easy</option>
        </Select>
        <Select onChange={sortHandler} w='200px' bg='#fff'>
          <option value="asc">Oldest by date</option>
          <option value="desc">Latest by date</option>
        </Select>
      </Flex>
      <TableContainer>
  <Table variant='styled' bg='#fff' m='20px auto' maxWidth='60%' boxShadow='md'>
    <TableCaption>
    <HStack spacing={5}>
    <Select onChange={limitHandler} w='50px' bg='#fff'>
          <option value={5}>5 per page</option>
          <option value={10}>10 per page</option>
          <option value={20}>20 per page</option>
    </Select>
<Pagination total={Math.ceil(total/limit)} page={page} pageHandler={pageHandler} />
</HStack>
    </TableCaption>
    <Thead>
      <Tr>
        <Th>Sr.No.</Th>
        <Th>Question</Th>
        <Th>Type</Th>
        <Th>Level</Th>
      </Tr>
    </Thead>
    <Tbody >
     {
      data.map((item,ind)=>
      <Tr key={item._id}>
        <Td>{ind+1}</Td>
        <Td>{item.question}</Td>
        <Td>{item.type}</Td>
        <Td>{item.level}</Td>
        <Td> 
          <Link to={`/question/${item._id}`}>
        <Button size='sm' w='50px'  variant='outline'>
          <Img h='20px' src='https://cdn-icons-png.flaticon.com/128/1160/1160758.png' />
        </Button>
          </Link>
        </Td>
        <Td>
        <Button size='sm' w='50px' variant='outline' onClick={()=>deleteHandler(item._id)}>
          <Img h='20px' src='https://cdn-icons-png.flaticon.com/128/6460/6460112.png' />
        </Button>
        </Td>
      </Tr>
      )
     }
    </Tbody>
  </Table>
</TableContainer>
    </Box>
  )
}

export default AllQuestions