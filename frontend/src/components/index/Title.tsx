import type { JSX } from 'react';

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps): JSX.Element => {
  return (
    <h1 data-testid="title" className="text-lg font-bold">
      {title}
    </h1>
  );
};
