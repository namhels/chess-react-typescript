import React, { FC, useEffect, useRef, useState } from 'react';
import { Player } from '../modals/Player';
import { Colors } from '../modals/Colors';
import { MdSettings } from 'react-icons/md'
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
        w='200px'
        h='40px'
        variant='solid'
        colorScheme='cyan'
      >
        <TagLeftIcon boxSize='12px' as={MdSettings} />
        <TagLabel>Black time: {blackTime}</TagLabel>
      </Tag>
      <Tag
        w='250px'
        h='50px'
        variant='solid'
        colorScheme='orange'
      >
        <TagLabel>Player move: {currentPlayer?.color}</TagLabel>
      </Tag>
      <Button
        onClick={handleRestart}
        w='250px'
        h='50px'
        color='white'
        colorScheme='yellow'
      >Restart</Button>
      <Tag
        w='200px'
        h='40px'
        variant='solid'
        colorScheme='cyan'
      >
        <TagLeftIcon boxSize='12px' as={MdSettings} />
        <TagLabel>White time: {whiteTime}</TagLabel>
      </Tag>
    </VStack>
  );
};

export default Timer;