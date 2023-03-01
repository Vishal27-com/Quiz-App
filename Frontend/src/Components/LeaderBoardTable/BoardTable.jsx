import React, { useEffect, useState } from 'react'
import { Flex, Img, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { getLeaderBoardApi } from '../../api';

const BoardTable = () => {
    const [data,setData]=useState([]);
    const [rank,setRank]=useState([]);
    const getLeaderboard=async ()=>{
    const res=await getLeaderBoardApi();
    tellRank(res.data.message);
    setData(res.data.message);
    }
    function tellRank(data){
        let rank=0;
        let prev=0;
        let rank_arr=[]
        for(let i=0;i<data.length;i++){
            if(data[i].marks!==prev){
               rank_arr.push(++rank);
            }
            else {
                rank_arr.push(rank);
            }
            prev=data[i].marks
        }
        setRank(rank_arr);
    }
    useEffect(()=>{
        getLeaderboard()
    },[])
    const first="https://img.freepik.com/free-vector/horse-white-background_24908-61010.jpg?size=338&ext=jpg&ga=GA1.2.270881465.1677322869&semt=ais"
    const second="https://img.freepik.com/free-vector/horse-white-background_24908-61011.jpg?size=338&ext=jpg&ga=GA1.2.270881465.1677322869&semt=ais"
    const third="https://img.freepik.com/free-vector/horse-white-background_24908-61012.jpg?size=338&ext=jpg&ga=GA1.2.270881465.1677322869&semt=ais"
    const bgcolor=(rank)=>{return rank===1?"#F7EF8A":rank===2?"#C0C0C0":rank===3?"#B08D57":"#fff"}
    const image=(rank)=>{return rank===1?first:rank===2?second:rank===3?third:""}
    // console.log(rank)
  return (
    <TableContainer>
    <Table variant='styled' bg='#fff' m='20px auto' maxWidth='60%'>
      <Thead>
        <Tr>
          <Th>Rank</Th>
          <Th>Name</Th>
          <Th>Score</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          data.map((item,index)=>
          <Tr key={index+1} bg={bgcolor(rank[index])}>
            <Td>
              <Flex align='center' gap='10px' fontWeight='600'>
              <Img h='50px'  src={image(rank[index])} />
              <Text>
              {rank[index]}
              </Text>
              </Flex>
              </Td>
            <Td>{item.name}</Td>
            <Td>{item.marks}/{item.mm}</Td>
          </Tr>
          )
        }
      </Tbody>
    </Table>
  </TableContainer>
  )
}

export default BoardTable