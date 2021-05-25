import { FC } from 'react';

export interface CharacterDetailProps {
  image: string;
  name: string;
  status: string;
  gender: string;
}

export const CharacterDetail: FC<CharacterDetailProps> = ({
  image: imagePath,
  name,
  status,
  gender
}) => (
  <div>
    <img src={imagePath} alt={name}/>
    <p>Character: {name}</p>
    <p>Status: {status}</p>
    <p>Status: {gender}</p>
  </div>
);  
