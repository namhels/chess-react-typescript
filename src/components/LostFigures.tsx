import React, { FC } from 'react';
import { Figure } from '../modals/figures/Figure';

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
  return (
    <div className='lost'>
      <h3>{title}</h3>
      {figures.map(figure =>
        <div key={figure.id}>
          {figure.name} {figure.logo && <img src={figure.logo} alt='chess figure' width={20} height={20} />}
        </div>
      )}
    </div>
  );
};

export default LostFigures;