import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import {Box, Button, Flex, HStack, Img, Select, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useToast} from "@chakra-ui/react";
import { deleteUserApi, getAllUserApi } from '../../api';
import Pagination from '../../Components/Pagination/Pagination';
import MyAlert from '../../Components/MyAlert/MyAlert';
const AllUser = () => {
  const [page,setPage]=useState(1);
  const [sort,setSort]=useState("asc");
  const [filter,setFilter]=useState("both");
  const [limit,setLimit]=useState(10);
  const [total,setTotal]=useState(0);
  const [data,setData]=useState([]);
  const toast=useToast();
  const getAllUser=async (filter,sort)=>{
   const res=await getAllUserApi(filter,sort,page,limit);
   setData(res.data.message);
   setTotal(res.data.count);
  }
  const filterHandler=(e)=>{
    const {value}=e.target;
    setFilter(value)
    getAllUser(value,sort,page,limit)
  }
  const sortHandler=(e)=>{
    const {value}=e.target;
    setSort(value)
    getAllUser(filter,value,page,limit)
  }
  const pageHandler=(p)=>{
    setPage(p)
    getAllUser(filter,sort,p,limit);

  }
  const limitHandler=(e)=>{
    const {value}=e.target;
    setLimit(value)
    getAllUser(filter,sort,page,value);
  }
  const deleteHandler=async (id)=>{
  await deleteUserApi(id);
  MyAlert("Deleted","error",toast);
  }
  useEffect(()=>{
    getAllUser(filter,sort,page,limit);
  },[])
  return (
    <Box>
      <Sidebar />
      <Flex  direction={["row"]} wrap='wrap' gap='15px' justify='center' mt='20px'>
        <Select onChange={filterHandler} w='100px' bg='#fff'>
          <option value="both">Both</option>
          <option value="user">User Only</option>
          <option value="admin">Admin Only</option>
        </Select>
        <Select onChange={sortHandler} w='200px' bg='#fff'>
          <option value="desc">Latest by date</option>
          <option value="asc">Oldest by date</option>
        </Select>
      </Flex>
      <TableContainer>
  <Table variant='styled' bg='#fff' m='20px auto' boxShadow='md' maxWidth='60%'>
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
        <Th>Name</Th>
        <Th>IsAdmin</Th>
      </Tr>
    </Thead>
    <Tbody>
     {
      data.map((item,ind)=>
      <Tr key={item._id}>
        <Td>{ind+1}</Td>
        <Td>{item.name}</Td>
        <Td>{item.isAdmin?"Yes":"No"}</Td>
        <Td><Button w='50px' variant='outline' onClick={()=>deleteHandler(item._id)}>
          <Img h='20px' src='https://cdn-icons-png.flaticon.com/128/6460/6460112.png' />
          </Button></Td>
      </Tr>
      )
     }
    </Tbody>
  </Table>
</TableContainer>
    </Box>
  )
}

export default AllUser