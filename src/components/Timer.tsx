import React, { FC, useEffect, useRef, useState } from 'react';
import { Player } from '../modals/Player';
import { Colors } from '../modals/Colors';
import { AiOutlineFieldTime } from 'react-icons/ai'
import { Button, Tag, TagLabel, TagLeftIcon, VStack } from '@chakra-ui/react';
import convertMs from '../modals/ConvertMs'

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(180000);
  const [whiteTime, setWhiteTime] = useState(180000);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPlayer])

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current)
      // timer.current = null;
    }

    const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);

    // if (blackTime === 0 || whiteTime === 0) {
    //   clearInterval(timer.current)
    // }
  }

  function decrementBlackTimer() {
    setBlackTime(prev => prev - 1000);
  }

  function decrementWhiteTimer() {
    setWhiteTime(prev => prev - 1000);
  }

  function handleRestart() {
    setWhiteTime(180000);
    setBlackTime(180000);
    restart();

  }

  function updateTimer(time: number) {
    const minutes = convertMs(time).minutes;
    const seconds = String(convertMs(time).seconds).padStart(2, '0');
    return `${minutes}:${seconds}`
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
        <TagLabel as='b' fontSize='4xl'>{updateTimer(blackTime)}</TagLabel>
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
        <TagLabel as='b' fontSize='4xl'>{updateTimer(whiteTime)}</TagLabel>
      </Tag>
    </VStack>
  );
};

export default Timer;