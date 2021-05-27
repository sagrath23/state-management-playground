import { CharacterDetailProps } from '../components/character-detail/CharacterDetail';
const APIBaseURL = 'https://rickandmortyapi.com/api';

export const fetchCharacterById = async (id: string): Promise<CharacterDetailProps> => {
  const result = await fetch(`${APIBaseURL}/character/${id}`);

  return result.json();
};
