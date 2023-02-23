import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Topicard from '../../Components/Topic Card/Topicard'
import { topic } from '../../Components/Topic Card/topicData'

const Dashboard = () => {
  return (
    <div>
       <Navbar />
       <SimpleGrid w='90%' m='40px auto' columns={3} spacing={10} >
       {
        topic.map((item)=>
        <Topicard 
        key={item.topic}
        image={item.image}
        topic={item.topic}
        />)
       }
       </SimpleGrid> 
    </div>
  )
}

export default Dashboard