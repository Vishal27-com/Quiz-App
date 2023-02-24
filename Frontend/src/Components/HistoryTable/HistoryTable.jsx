import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const HistoryTable = ({results}) => {
  return (
    <TableContainer>
  <Table variant='styled' bg='#fff' m='20px auto' maxWidth='60%'>
    <Thead>
      <Tr>
        <Th>Type</Th>
        <Th>Level</Th>
        <Th>Score</Th>
        <Th>Time</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        results.map((item)=>
        <Tr>
          <Td>{item.type.toUpperCase()}</Td>
          <Td>{item.level}</Td>
          <Td>{item.score}</Td>
          <Td>24-02-03</Td>
        </Tr>
        )
      }
    </Tbody>
  </Table>
</TableContainer>
  )
}

export default HistoryTable