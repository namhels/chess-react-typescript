import React, { FC, useEffect, useState } from 'react'
import { Board } from '../modals/Board'
import { CellComponent } from './CellComponent';
import { Cell } from '../modals/Cell';
import { Player } from '../modals/Player';
import { Flex } from '@chakra-ui/react';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

export const BoardComponent: FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  function click(cell: Cell) {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      swapPlayer()
      setSelectedCell(null);
      updateBoard();
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  }

  useEffect(() => {
    highlightCells()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCell])



  function highlightCells() {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
    <>
      <Flex
        w='calc(115px * 8)'
        h='calc(115px * 8)'
        flexWrap='wrap'
        boxShadow='0px 0px 10px 10px rgba(23,231,201,0.75)'
      >
        {board.cells.map((row, index) =>
          <React.Fragment key={index}>
            {row.map(cell =>
              <CellComponent
                click={click}
                cell={cell}
                key={cell.id}
                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
              />
              )}
          </React.Fragment>
        )}
      </Flex>
    </>
  )
}
