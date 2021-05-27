import { FC } from 'react';
import { useSelector } from 'react-redux';
import { CharacterDetail as CharacterDetailComponent } from '../../character-detail';

export const CharacterDetail: FC = () => {
  const character = useSelector((state) => state.characterDetail.character);

  console.log(character, 'character');

  return <CharacterDetailComponent character={character} />;
};
