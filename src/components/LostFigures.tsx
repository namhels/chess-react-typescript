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
      w='350px'
      p={4}
      bg='yellow.200'
      borderRadius='md'
    >
      <Heading as='h3' mb={3} color="cyan.400" fontSize='2xl'>{title}</Heading>
      <Flex flexWrap='wrap' gap={2}>
      {figures.map(figure =>
        <div key={figure.id}>
          {figure.logo && <img src={figure.logo} alt='chess figure' width={32} height={32} />}
        </div>
      )}
      </Flex>
    </Box>
  );
};

export default LostFigures;