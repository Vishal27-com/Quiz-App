import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

const HistoryTable = () => {
  return (
    <TableContainer>
  <Table variant='styled' bg='#fff' m='20px auto' maxWidth='60%'>
    <Thead>
      <Tr>
        <Th>Type</Th>
        <Th>Level</Th>
        <Th>Score</Th>
      </Tr>
    </Thead>
    <Tbody>

    </Tbody>
  </Table>
</TableContainer>
  )
}

export default HistoryTable