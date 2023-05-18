import React, { FC, useEffect, useRef, useState } from 'react';
import { Player } from '../modals/Player';
import { Colors } from '../modals/Colors';
import { AiOutlineFieldTime } from 'react-icons/ai'
import {  Button, Tag, TagLabel, TagLeftIcon, VStack } from '@chakra-ui/react';

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPlayer])


  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current)
    }
    const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTimer() {
    setBlackTime(prev => prev - 1);
  }

  function decrementWhiteTimer() {
    setWhiteTime(prev => prev - 1);
  }

  function handleRestart() {
    setWhiteTime(300);
    setBlackTime(300);
    restart();

  }

  return (
    <VStack
      align='end'
    >
      <Tag
        w='150px'
        h='60px'
        bg="cyan.400"
        color="black"
      >
        <TagLeftIcon boxSize='32px' as={AiOutlineFieldTime} />
        <TagLabel as='b' fontSize='4xl'>{blackTime}</TagLabel>
      </Tag>
      <Tag
        w='250px'
        h='50px'
        bg="orange.400"
        color="cyan.400"
        fontSize='2xl'
      >
        <TagLabel>Player move: {currentPlayer?.color}</TagLabel>
      </Tag>
      <Button
        onClick={handleRestart}
        w='250px'
        h='50px'
        color="cyan.400"
        colorScheme='yellow'
        fontSize='2xl'
      >Restart</Button>
      <Tag
        w='150px'
        h='60px'
        bg="cyan.400"
        color="white"
      >
        <TagLeftIcon boxSize='32px' as={AiOutlineFieldTime} />
        <TagLabel as='b' fontSize='4xl'>{whiteTime}</TagLabel>
      </Tag>
    </VStack>
  );
};

export default Timer;