import React, { FC, useEffect, useRef, useState } from 'react';
import { Player } from '../modals/Player';
import { Colors } from '../modals/Colors';
import { Box } from '@chakra-ui/react';

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
    <Box
      py={8}
      px={4}
      bg='cyan.300'
      borderWidth='1px'
      borderColor='cyan.800'
      borderRadius='lg'>
      <div>
        <button onClick={handleRestart}>Рестарт</button>
      </div>
      <h2>Чёрные - {blackTime}</h2>
      <h2>Белые - {whiteTime}</h2>
    </Box>
  );
};

export default Timer;