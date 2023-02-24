import React from 'react'
import {
    Table,
    Tbody,
    Tr,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import ResultChart from '../PieChart/ResultChart';
const ResultTable = () => {
  const {result } = useSelector((store) => store.quiz);
// box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  return (
    <TableContainer>
  <Table variant='simple' w='50%' m='20px auto' bg='#fff'
  boxShadow=" 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
  >
  <TableCaption><ResultChart percentage={result.percentage} status={result.status} /></TableCaption>
    <Tbody>
      <Tr>
        <Td>Total Questions</Td>
        <Td>{result.total_question}</Td>
      </Tr>
      <Tr>
        <Td>Total Attempted</Td>
        <Td>{result.attempted}</Td>
      </Tr>
      <Tr>
        <Td>Skipped</Td>
        <Td>{result.skipped}</Td>
      </Tr>
      <Tr>
        <Td>Correct Answer</Td>
        <Td>{result.correct_answer}</Td>
      </Tr>
      <Tr>
        <Td>Wrong Answer</Td>
        <Td>{result.wrong_answer}</Td>
      </Tr>
      <Tr>
        <Td>Marks Obtained</Td>
        <Td>{result.correct_answer*4}</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
  )
}

export default ResultTable