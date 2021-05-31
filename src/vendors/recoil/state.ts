import { atom, selector } from 'recoil';
import { fetchCharacterById } from '../../services';

export const characterDetailState = atom({
  key: 'characterDetailState',
  default: {
    characterId: ''
  }
});

export const characterDetailSelector = selector({
  key: 'characterDetailSelector',
  get: async ({ get }) => {
    const { characterId } = get(characterDetailState);

    if(characterId) {
      const characterDetail = await fetchCharacterById(characterId);

      return characterDetail;
    }

    return {};
  }
});
