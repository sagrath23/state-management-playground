import create from 'zustand';
import { fetchCharacterById } from '../../services';

export const useStore = create((set) => ({
  characters: [],
  characterDetail: {
    image: '',
    name: '',
    status: '',
    gender: '',
  },
  fetchCharacterById: async(characterId) => {
    const characterDetail = await fetchCharacterById(characterId);

    set({ characterDetail });
  }
}));
