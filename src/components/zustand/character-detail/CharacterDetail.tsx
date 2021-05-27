import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStore } from '../../../vendors/zustand';
import { CharacterDetail as CharacterDetailComponent } from '../../character-detail';

export const CharacterDetail: FC = () => {
  const router = useRouter();
  const { character: characterId } = router.query;
  const { fetchCharacterById, characterDetail } = useStore((state) => state);

  useEffect(() => {
    fetchCharacterById(characterId)
  }, [characterId]);

  return <CharacterDetailComponent {...characterDetail} />;
};
