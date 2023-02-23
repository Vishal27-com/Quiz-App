import { Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'

const Timer = ({stopQuiz,duration}) => {
    const [time, setTime] = useState(duration*30);
    const ref = useRef(null);
    useEffect(() => {
      if (ref.current === null && time !== 1) {
        ref.current = setInterval(() => {
          setTime((time) => time - 1);
        }, 1000);
      }
      if (time === 1){
        stopQuiz();
        return () => clearInterval(ref.current);
      }
    }, [time]);
    console.log(time)
  return (
    <Text>{time}</Text>
    )
}

export default Timer