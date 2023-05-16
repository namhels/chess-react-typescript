import React, { useEffect, useState } from 'react';
import './App.css';
import { BoardComponent } from './components/BoardComponent';
import { Board } from './modals/Board';
import { Player } from './modals/Player';
import { Colors } from './modals/Colors';
import LostFigures from './components/LostFigures';
import Timer from './components/Timer';
import { Box, Flex, Heading } from '@chakra-ui/react'

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  console.log(setWhitePlayer, setBlackPlayer);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, [whitePlayer])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  }

  return (
    <Box
      bgImage="url('/assets/backdrop/darkTheme.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover">
      <Heading
        as='h1'
        w='400px'
        bgGradient='linear(to-l, #027a95, #f6dd00)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'
        textShadow='4px 4px 28px rgb(9, 211, 226)'>
        ChessInfinity
      </Heading>
      <Flex
        minWidth='max-content'
        justifyContent='center'
        alignItems='center'
        gap='8'>
        <Timer
          restart={restart}
          currentPlayer={currentPlayer}
        />
        <BoardComponent
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          swapPlayer={swapPlayer}
        />
        <div>
          <LostFigures
            title='Чёрные фигуры:'
            figures={board.lostBlackFigures}
          />
          <LostFigures
            title='Белые фигуры:'
            figures={board.lostWhiteFigures}
          />
        </div>
      </Flex>
    </Box>
  );
}

export default App;

    // <Box
    //   position="relative"
    //   bgImage="url('/assets/images/projects/airbnb/airbnb-home.jpg')"
    //   bgPosition="center"
    //   bgRepeat="no-repeat"
    //   bgSize="cover"
    //   p={6}
    // ></Box>
