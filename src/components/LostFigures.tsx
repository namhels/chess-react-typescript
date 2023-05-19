import React, { FC } from 'react';
import { Figure } from '../modals/figures/Figure';
import { Box, Flex, Heading } from '@chakra-ui/react';

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
  return (
    <Box
      maxWidth='472px'
      p={4}
      bg='yellow.200'
    >
      <Heading as='h3' mb={3} color="cyan.400" fontSize='2xl'>{title}</Heading>
      <Flex flexWrap='wrap' gap={2}>
      {figures.map(figure =>
        <div key={figure.id}>
          {figure.logo && <img src={figure.logo} alt='chess figure' width={48} height={48} />}
        </div>
      )}
      </Flex>
    </Box>
  );
};

export default LostFigures;