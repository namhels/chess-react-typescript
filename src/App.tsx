import React, { useEffect, useState } from 'react';
import './App.css';
import { Flex, Heading } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react';
import { BoardComponent } from './components/BoardComponent';
import { Board } from './modals/Board';
import { Player } from './modals/Player';
import { Colors } from './modals/Colors';
import LostFigures from './components/LostFigures';
import Timer from './components/Timer';
import ToggleTheme from './components/ToggleTheme';

function App() {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const { colorMode } = useColorMode();
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
    <div className={colorMode === 'dark' ? 'appDark' : 'appLight'}>
      <Flex
        justifyContent='space-between'
        alignItems='center'
        px={7}
        >
        <Heading
        p={4}
        bgGradient='linear(to-l, #027a95, #f6dd00)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'
        textShadow='4px 4px 28px rgb(9, 211, 226)'>
        ChessInfinity
      </Heading>
      <ToggleTheme/>
      </Flex>
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
    </div>
  );
}

export default App;

