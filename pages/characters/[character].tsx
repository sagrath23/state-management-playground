
import { FC } from 'react';
import { CharacterDetail } from '../../src/components/character-detail';
import { character } from '../../src/utils/mockCharacter';

const Character: FC = () => (
  <CharacterDetail {...character} />
); 

export default Character;
